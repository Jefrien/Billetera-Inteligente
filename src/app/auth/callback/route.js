import { cookies } from 'next/headers'
import {NextRequest, NextResponse} from "next/server";
import {createClient} from "../../../utils/supabase/server";
import {redirect} from "next/navigation";

export async function GET(request) {
    const cookieStore = await cookies()
    const supabase = await createClient()

    const searchParams = request.nextUrl.searchParams
    const authCode = searchParams.get("code");

    if (!authCode) {

        return NextResponse.json({message: "No code provided"}, {status: 400})
    }

    const { data, error } = await supabase.auth.exchangeCodeForSession(authCode)

    if (error) {
        return new Response(error.message, { status: 500 });
    }

    const { access_token, refresh_token } = data.session;

    cookieStore.set("sb-access-token", access_token, {
        path: "/",
        secure: true,
        httpOnly: true,
    });
    cookieStore.set("sb-refresh-token", refresh_token, {
        path: "/",
        secure: true,
        httpOnly: true,
    });

    redirect('/app')

}
