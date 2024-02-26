import Logo from '../assets/Logo.png'
import InputEmail from '../components/Login/Email.Input';
import InputPassword from '../components/Login/Password.Input';
import LoginButton from '../components/Login/Login.Button';

function Login() {

    return (
        <container className="flex justify-center items-center h-screen bg-black">
            <main className="flex flex-col justify-center items-center bg-black rounded-xl p-5 gap-4 drop-shadow-xl py-8">
                <div className="flex flex-col justify-center items-center font-sans gap-2">
                    <h1 className="text-xl text-white pb-2 font-thin">Bienvenido a</h1>
                    <img src={Logo} alt="Urity" className='w-96' />
                    <h1 className="text-md text-zinc-400 pt-16 pr-52">Inicio de sesión</h1>
                </div>
                <div className="flex flex-col justify-center items-center  w-full flex-wrap md:flex-nowrap gap-4 bg-transparent" data-theme="dark">
                    <InputEmail />
                    <InputPassword />
                    <LoginButton />

                </div>
            </main>
        </container>
    )
}
export default Login

