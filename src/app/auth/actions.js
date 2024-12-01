'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '../../utils/supabase/server'

export async function login(formData) {
    const supabase = await createClient()

    const {data, error} = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: process.env.NEXT_REDIRECT_CALLBACK_URL
        },
    })

    if (error) {
        redirect('/')
    }

    redirect(data.url)
}
