import React, { useState, useEffect } from 'react'
import './login.css'
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";







const Login = () => {
    const [email, setEmail] = useState("")
    const [pwd, setPwd] = useState("")
    const [show, setShow] = useState(false)
    let banco = (
        {
            acesso: 'lucasmoreira.gabriel2004@gmail.com',
            pwd: 'admin'
        }
    
    )
    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show)
    }

    const comparar = () => {
        const login_email = setEmail => (document.querySelector('.InputEmail').value)
        const login_senha = setPwd => (document.querySelector('.InputPwd').value)

        if ( email === banco.acesso && pwd === banco.pwd) {
            alert('Seu login foi efeituado com sucesso!')
        }
        else (alert('Seu dados estão incorretos!')

        )
    }
    return (
        <div className="Login">


            <div className="login-right">
                <h1>Admin painel</h1>


                <div className='InputEmail'>
                    <input
                        type='email'
                        placeholder='digite seu email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        id='email' />

                </div>
                <div className='InputPwd'>
                    <input
                        type={show ? "text" : "password"}
                        placeholder='digite sua senha'
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


            </div>
        </div>
    )

}









export default Login;
