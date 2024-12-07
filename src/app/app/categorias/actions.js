'use server'

import {createClient} from "../../../utils/supabase/server";
import {revalidatePath} from "next/cache";

export async function deleteCategory(id) {
    const supabase = await createClient()
    const { error } = await supabase.from('categories').delete().eq('id', id)

    if (error) {
        return false
    }

    revalidatePath('/app')
}

export async function getCategories() {
    const supabase = await createClient()
    const { data, error } = await supabase.from('categories').select('*')

    if (error) {
        return []
    }

    return data
}

export async function bulkInsertCategories(categories) {
    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser()

    const { error } = await supabase.from('categories').insert(categories.map(item => ({
        title: item,
        parent: null,
        user_id: user.id
    })))

    if (error) {
        return []
    }

    revalidatePath('/app')
}
