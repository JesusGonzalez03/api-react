import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import "../compo_style/IniSesionform.css"

const IniSesionform = () => {
    const {register, handleSubmit,
        formState: {errors}, watch,
         reset
        } = useForm();
        
         console.log(errors);
        
        const onSubmit = handleSubmit((data) => {
          console.log(data);
        
          alert('Bienvenido')
          reset();
        
        });

  return ( 
    <div>
      <div className="linea">
      <h4>Bienvenido a EVOLUTION CODE el siguiente formulario es para usuarios ya REGISTRADOS</h4> 
           <p>Si no a gestionado el formulario de resgistro <Link className='gaaa' to='/registro'>REGISTRATE!!!</Link> si
            ya lo gestionastes has caso omiso a esto :3</p>
      </div>
        <br/>   
   <div className="container1">
    <div className="container2">
      <h4>Inicia sesion</h4>

    <form onSubmit= {onSubmit}>
    <label 
    htmlFor="nombreYapellido">Nombre y apellido </label>
    <br/>
    <input type="text"{...register("nombreYapellido", {
      required: {
          value: true,
          message: 'Nombre y apellido requeridos para Iniciar Sesion'
        },
        minLength: {
          value: 20,
          message: 'Este campo debe tener minimo 20 caracteres'
        },
        maxLength: {
          value: 50,
          message: 'Este campo debe tener maximo 50 caracteres'
        }
      })}
      />
      <br/><br/>
      {
        errors.nombreYapellido&&<span>{errors.nombreYapellido.message}</span>
      }



      <label 
      htmlFor="Correo">Correo</label>
      <br/>
      <input type="email"{...register("correo", {
        required: { 
        value: true,
        message: "El correo es requerido"
        },
        pattern: {
          value: /^[a-z0-9,_%+-]+@[a-z0-9·-]+\.[a-z]{2,4}$/,
          message: "Correo no valido"
        }
      })}
      />
      <br/><br/>
       {
        errors.correo && <span>{errors.correo.message}</span>
      }

      <label 
      htmlFor="Contraseña">Contraseña</label>
      <br/>
      <input type="password"{...register("Contraseña", {
        required: { 
          value: true,
          message: "La contraseña es requerida para Iniciar Sesion"
          },
          minLength: {
            value: 6,
            message:"La contraseña debe tener al menos 6 cataracteres"
          },
          
      })}
      />
      <br/><br/>
       {
        errors.Contraseña && <span>{errors.Contraseña.message}</span>
      }

      <button type='submit'>Iniciar Sesion</button>
       
        <pre>
          {JSON.stringify(watch(), null,2)}
        </pre>
      
        </form>
      </div>  

      <div className="container-right">
        <h3>Inicia sesion <br/>
           Y Ten Acceso A Todos
           Nuestros Cursos <br/>
           Por Un Increible precio</h3>
      </div>

    </div>  

    </div>
  )
}


export default IniSesionform