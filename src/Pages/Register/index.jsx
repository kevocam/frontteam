import React from 'react';
import { useForm } from "react-hook-form";
import form from '../../assets/form.svg';
import './style.scss';

const Register = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();  

    const onSubmit = data => console.log(data);

    return (
        <div className="register">
            <div className="register__img">
               <img src={form} alt="register" />     
            </div>
            <div className="register__form">  
                <h2>Registro</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Nombre" {...register("firstName", { required: true })} />
                    {errors.firstName?.type === 'required' &&  <em className="error">*El apellido es requerido</em>}
                    
                    <input placeholder="Apellido" {...register("lastName", { required: true })} />
                    {errors.lastName && <em className="error">*El apellido es requerido</em>}
                    
                    <input type="tel" maxlength="9" placeholder="Celular" {...register("mobile", { pattern: "[0-9]{9}" })} />
                    {errors.mobile && <em className="error">*El celular es requerido</em>}


                    <input placeholder="Correo electronico" name="email" {...register("email", 
                    { 
                        required: true,                         
                        pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,

                    })} />
                    {errors.email && <em className="error">*El correo es requerido</em>}
                     
                    <select {...register("Sede")}>
                        <option value="miraflores">Miraflores</option>
                        <option value="la molina">La molina</option>
                        <option value="san isidro">San isidro</option>
                    </select>
                    <input type="date" placeholder="localNacimiento" {...register("localNacimiento", {})} />
                    {errors.mobile && <em className="error">*La fecha de nacimiento es requerido</em>}

                    <input placeholder="Contraseña" type ="password"></input>
                    {errors.mobile && <em className="error">*La contraseña es requerido</em>}


                    <button type="submit" > Registrar </ button> 
                </form>
            </div>            
        </div>
    );
}

export default Register;
