import React from 'react'
import { useForm } from "react-hook-form";
import login from '../../assets/login.svg'

import './style.scss'
function Login() {

    const { register, formState: { errors }, handleSubmit } = useForm();
    
    const onSubmit = data => console.log(data);
    
    return (
        <div className="login">
            <div className="login__img">
               <img src={login} alt="login" />     
            </div>
            <div className="login__form">  
                <h2>Ingreso</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <input placeholder="Correo electronico" name="email" {...register("email", 
                    { 
                        required: true,                         
                        pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,

                    })} />

                    <input placeholder="Contraseña" type ="password"></input>


                   
                    <button type="submit" > Ingresar </ button> 
                    {
                        errors.email && <em className="error">* Ingresa un correo válifo</ em>}
                </form>
            </div>            
        </div>
    )
}

export default Login
