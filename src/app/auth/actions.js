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

    console.log('redirecting to', process.env.NEXT_REDIRECT_CALLBACK_URL)

    if (error) {
        redirect('/')
    }

    redirect(data.url)
}

export async function logout() {
    const supabase = await createClient()

    await supabase.auth.signOut()

    redirect('/')
}
