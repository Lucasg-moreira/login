import React, { useState } from 'react'
import './login.css'
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Img } from '../Img';
import { ErrorLogin } from '../Error';

const banco = [
    {
        id: 1, login: 'lucasmoreira.gabriel2004@gmail.com', pwd: 'admin'
    },
    {
        id: 2, login: 'teste@gmail.com', pwd: 'admin'
    },
    {
        id: 3, login: 'isa@gmail.com', pwd: 'teste'
    }
]

const Login = () => {
    const [email, setEmail] = useState("")
    const [pwd, setPwd] = useState("")
    const [show, setShow] = useState(false)
    const [errorLogin, setError] = useState(false)
    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show)
    }

    const erroLogin = () => {
        if (email === "" || pwd === "") {
            setError(true)
        }
    }
    const comparar = () => {
        erroLogin()
        if (errorLogin === false) {
            banco.forEach((element, i) => {
                const itemLogin = element.login
                const itemPwd = element.pwd
                if (itemLogin === email && itemPwd === pwd) {
                    alert('Login efetuado com sucesso!')

                }
            }
            )
        }else if(errorLogin !== false){
         setError(false)
        }
    }



    return (
        <div className="Login">
            <div className="login-right">
                <Img />
                <div className='InputEmail'>
                    <p>Usuário</p>
                    <input
                        type='email'
                        placeholder='Example@gmail.com'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        id='email'
                    />
                </div>

                <div className='InputPwd'>
                    <p>Senha</p>
                    <input
                        type={show ? "text" : "password"}
                        placeholder='Password'
                        value={pwd}
                        onChange={e => setPwd(e.target.value)}
                        id='pwd'
                    />

                    <div className="login-eye">

                        {show ? (
                            <AiFillEye onClick={handleClick}
                                size={20}
                            />

                        ) :
                            (
                                <AiFillEyeInvisible onClick={handleClick}
                                    size={20} />

                            )}
                    </div>
                </div>

                <button type='submit' className='enviar' onClick={comparar} >Entrar</button>
                {errorLogin === true ? <ErrorLogin /> : <p id="hidden">teste</p>}

                <span id='noPwd'>
                    <p><a href="#">Esqueci minha senha</a></p>
                </span>

                <div className='rodape'>
                    <footer>
                        <p> © criado por Lucas Gabriel - 2021</p>
                    </footer>
                </div>
            </div>
        </div>
    )

}
export default Login;
