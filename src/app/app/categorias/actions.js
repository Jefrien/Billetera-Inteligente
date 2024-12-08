'use server'

import {createClient} from "../../../utils/supabase/server";
import {revalidatePath} from "next/cache";
import { z } from "zod";


export async function deleteCategory(id) {
    const supabase = await createClient()
    const {error} = await supabase.from('categories').delete().eq('id', id)

    if (error) {
        return false
    }

    revalidatePath('/app')
}

export async function createCategory(prevState, formData) {
    const supabase = await createClient()

    const schema = z.object({
        title: z.string().min(1),
    });

    const parse = schema.safeParse({
        title: formData.get("title"),
        category: formData.get("category"),
    });

    if (!parse.success) {
        return { message: "Error creando la categoría", success: false };
    }

    const data = parse.data;

    const {data: {user}} = await supabase.auth.getUser()

    const {error} = await supabase.from('categories').insert({
        title: data.title,
        parent: data.category,
        user_id: user.id
    })

    if (error) {
        return { message: "Error creando la categoría", success: false };
    }

    revalidatePath('/app')
    return {
        success: true
    }
}

export async function getCategories() {
    const supabase = await createClient()
    const {data, error} = await supabase.from('categories').select('*')

    if (error) {
        return []
    }

    return data
}

export async function bulkInsertCategories(categories) {
    const supabase = await createClient()

    const {data: {user}} = await supabase.auth.getUser()

    const {error} = await supabase.from('categories').insert(categories.map(item => ({
        title: item,
        parent: null,
        user_id: user.id
    })))

    if (error) {
        return []
    }

    revalidatePath('/app')
}
