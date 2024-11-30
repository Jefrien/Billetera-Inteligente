import { Button } from '../components/material'
import Image from "next/image";
import LoginImage from "../../public/images/login.jpg";
import { login } from './auth/actions'

export default function Home() {
  return (
      <div className="flex h-screen justify-center items-center ">

          <Image src={LoginImage}
                 className="w-full h-full object-cover fixed top-0 left-0 z-0"
                 alt="Login Image"
            sizes="20vw"
          />

          <div
              className="flex px-4 flex-col w-full h-full justify-center items-center relative text-black dark:text-white z-10 bg-black/90 backdrop-blur-md">
              <h1 className="text-4xl text-center md:text-5xl font-bold mb-4">
                  Billetera Inteligente
              </h1>
              <p className="text-2xl mb-8">Ingresa a tu cuenta</p>

              <Button onClick={login} variant="filled" color='white' size='lg' className='flex items-center gap-3'>
                  <i className="fa-brands fa-google text-xl"></i>
                  Ingresar con Google
              </Button>


          </div>

          <div id="loader"
               className="fixed top-0 left-0 w-full h-full bg-black/60 backdrop-blur flex-col justify-center items-center hidden">
              <i className="fa-solid fa-sun"></i>
              <p className="text-center text-white text-2xl mt-4">Cargando...</p>
          </div>

      </div>
  );
}