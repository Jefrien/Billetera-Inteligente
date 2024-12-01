'use client'
import {Button} from "../../components/material";
import {login} from "../auth/actions";
import GoogleIcon from "../../assets/icons/google.svg";
import {useLoaderStore} from "../../store/loader";

export default function LoginButton() {

    const { showLoader } = useLoaderStore()

    return (
        <Button onClick={() => {
            showLoader(true)
            login()
        }} variant="filled" color='white' size='lg' className='flex items-center gap-3'>
            <GoogleIcon/>
            Ingresar con Google
        </Button>
    )
}
