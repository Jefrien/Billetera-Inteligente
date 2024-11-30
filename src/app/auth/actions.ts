'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '../../utils/supabase/server'

export async function login(formData: FormData) {
    const supabase = await createClient()

    const {data, error} = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: process.env.DEV
                ? "http://localhost:3000/auth/callback"
                : "https://billetera-inteligente.vercel.app/auth/callback",
        },
    })

    if (error) {
        redirect('/')
    }

    redirect(data.url)
}
