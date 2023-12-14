import React from 'react'
import "../compo_style/Regisform.css"
import { useForm } from 'react-hook-form';

const Regisform = () => {
    const {register, handleSubmit,
        formState: {errors}, watch,
         setValue,
         reset
        } = useForm();
        
         console.log(errors);
        
        const onSubmit = handleSubmit((data) => {
          console.log(data);
        
          alert('Registro realizado')
          reset();
        
        });

  return (
    <div>

      <div className='encabezado-regis'>
        <h4>Registrate y deja a <span>EVOLUTION CODE</span> evolucionar tu forma de aprender</h4>
        <p>Si no te satisface la metodologia de aprendizaje pues nos vale  lo que al genero masculino
          le cuelga el bruto es usted</p>
      </div>
       <br/>
      
    <div className='regis-conten'>
      <h2>Registrate</h2>

    <form className='container-form' onSubmit= {onSubmit}>
    <label 
    htmlFor="nombre">Nombre</label>
    <input type="text"{...register("nombre", {
      required: {
          value: true,
          message: 'El nombre es requerido para el registro'
        },
        minLength: {
          value: 5,
          message: 'Nombre debe tener minimo 5 caracteres'
        },
        maxLength: {
          value: 20,
          message: 'Nombre debe tener maximo 20 caracteres'
        }
      })}
      />
      <br/><br/>
      {
        errors.nombre &&<span>{errors.nombre.message}</span>
      }

      <label 
      htmlFor="apellido">Apellidos</label>
      <br/>
      <input type="text"{...register("apellido", {
        required: {
          value: true,
          message: 'El apellido es requerido para el registro'
        },
        minLength: {
          value: 5,
          message: 'Apellido debe tener minimo 5 caracteres'
        },
        maxLength: {
          value: 20,
          message: 'Apellido debe tener maximo 20 caracteres'
        }
      })}
      />
      <br/><br/>
       {
        errors.apellido &&<span>{errors.apellido.message}</span>
      }

      <label 
      htmlFor="Correo">Correo</label>
      <br/>
      <input type="email"{...register("Correo", {
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
      htmlFor="confirmarCorreo">Confirmar correo</label>
      <br/>
      <input type="email"{...register("confirmarCorreo", {
        required: { 
          value: true,
          message: "El correo es requerido"
          },
          validate: (value) => {
            if (value === watch('Correo')) {
              return true
            }else {
              return 'Los correos ingresados no son los mismos'
            }
          }
      })}
      />
      <br/><br/>
       {
        errors.confirmarCorreo && <span>{errors.confirmarCorreo.message}</span>
      }

      <label 
      htmlFor="Contraseña">Contraseña</label>
      <br/>
      <input type="password"{...register("Contraseña", {
        required: { 
          value: true,
          message: "La contraseña es requerida"
          },
          minLength: {
            value: 6,
            message:"La contraseña debe tener al menos 6 cataracteres "
          },
          
      })}
      />
      <br/><br/>
       {
        errors.Contraseña && <span>{errors.Contraseña.message}</span>
      }
      <label 
      htmlFor="confirmarContraseña">Confirmar contraseña</label>
      <br/>
      <input type="password"{...register("confirmarContraseña", {
        required: {
          value: true,
          message: " Confirmar la contraseña es requerido para el registro",
        },
        validate: (value) => {
          if (value === watch('Contraseña')) {
            return true
          }else {
            return 'Las contraseñas ingresadas no son las misma'
          }
        }
      })}
      />
      <br/><br/>
       {
        errors.confirmarContraseña && <span>{errors.confirmarContraseña.message}</span>
      }
      <label 
      htmlFor="fechadeNacimiento">Fecha de nacimiento</label>
      <br/>
      <input type="date"{...register("fechadeNacimiento", {
        required: {
          value: true,
          message: "La fecha de nacimiento es requerida para el registro"
        },

        //Validacion de edad en el formulario
        validate: (value) => {
          const fechadeNacimiento = new Date(value);
          const fechaActual = new Date();
          const edad = fechaActual.getFullYear() -
          fechadeNacimiento.getFullYear();

          if (edad > 18) {
            return true;
          } else {
            return"Debes ser mayor de edad para registrarse"
          }
        },
      })}
      />
      <br/><br/>
      {
        errors.fechadeNacimiento && <span>{errors.fechadeNacimiento.message}</span>
      }
      <label 
      htmlFor="fotodeUsuario">Foto de perfil</label>
      <br/>
      <input type="file" onChange={(e) => {
        console.log(e.target.files[0])
        setValue('fotodelusuario', e.target.files[0].name)
      }}/>
      <br/><br/>

      <label 
      htmlFor="terminos">Acepto terminos</label>
      <br/>
      <input type="checkbox"{...register("terminos", {
        required: true,
        message: "Para registrarse debe aceptar los terminos y condiciones"
      })}
      />
      <br/>
      {
        errors.terminos && <span>{errors.terminos.message} </span>
      }

      <button type='submit'>Registrar</button>
       

        <pre>
          {JSON.stringify(watch(), null,2)}
        </pre>
      
        </form>

        </div> 
        <br/><br/><br/>

    </div>
  )
}


export default Regisform