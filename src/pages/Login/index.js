import React, { useState, useEffect } from 'react'
import './login.css'
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";







const Login = () => {
    const [email, setEmail] = useState("")
    const [pwd, setPwd] = useState("")
    const [show, setShow] = useState(false)
    let banco = (
        {
            'acesso' : 'lucasmoreira.gabriel2004@gmail.com',
            'pwd' : 'admin'
        }
    

    )
    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show)
    }

    const comparar = () => {
      
        if (email === banco.acesso && pwd === banco.pwd) {
            alert('Seu login foi efeituado com sucesso!')
        }
        else (alert('Seu dados estão incorretos!')

        )
    }
    return (
        <div className="Login">


            <div className="login-right">

                <div id='imagem'>
                    <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Freact-icon%2Freact-icon-0.jpg&f=1&nofb=1'></img>
                </div>

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
