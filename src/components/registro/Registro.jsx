import React, {useState} from "react";
import {Form, Button} from 'react-bootstrap'
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import InputGroup from 'react-bootstrap/InputGroup';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  firstName: yup.string().required(),
  age: yup.number().positive().integer().required(),
}).required();


const Registro = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");



    // TAREA: Crear un estado para el campo de confirmar contraseña
    // Validar que la contraseña y la confirmación sean iguales
    // Mostrar un mensaje de error si no son iguales
    // Mostrar un mensaje de éxito si son iguales
    // Limpiar los campos 
    // Validaciones con expresiones regulares
    // /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/

    const { register, formState: { errors }, handleSubmit, reset, setValue } = useForm();
 
    
    const onSubmit = (data) => {
      console.log(data, "<-----data");      
      console.log(data.nombre, data.apellido, data.email, data.password, data.confirmPassword, "<-----data.Datos"); 
      
      /* setValue("nombre", "Probando SetValue...") */
      console.log(name, lastName, email, password, confirmPassword, "<-----DatosssssName");
      if(data.password === data.confirmPassword){
        Swal.fire({
          icon: "success",
          title: "Registrado!",
          text: "Registro exitoso!",
        });
        reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Las contraseñas no coinciden",
          text: "Error de confirmación de contraseñas. Verifique las contraseñas ingresadas.",
        });
      }
      
    }
  
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(email, password, confirmPassword);   
  //   if(password === confirmPassword){
  //     Swal.fire({
  //       icon: "success",
  //       title: "Registrado!",
  //       text: "Registro exitoso",
  //     });      
  //   } else {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Las contraseñas no coinciden",
  //       text: "Error de conformación de contraseñas. Verifique las Las contraseñas ingresadas.",
  //     });
  //   }

  // };

  return (
    <>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mt-4">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              /* value={name} */
              /* onChange={ (e) => {setName(e.target.value); console.log(name, "<-----name");}   }  */
              placeholder="Ingrese su nombre"
              {...register("nombre", {  required: {value: true, 
                                                  message: "El nombre es requerido"}, 
                                        minLength: {value: 2,
                                                    message: "El nombre debe tener al menos 2 caracteres"},
                                        maxLength: {value: 30,
                                                    message: "El nombre debe tener como máximo 30 caracteres"},            
                                      pattern:{value: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/i ,
                                                message: "El formato del nombre no es correcto"} 
                                    }) }

            onChange={ (e) => {setName(e.target.value); console.log(name, "<-----name");}   }                        
            />
          {/* {errors.nombre && <span>{errors.nombre.message}</span>} */}
          <div className="text-danger" >{errors.nombre?.message}</div>

            <Form.Group className="mt-4">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              /* value={lastName} */
              
              placeholder="Ingrese su Apellido"
              {...register("apellido", {  required: {value: true, 
                                                  message: "El apellido es requerido"}, 
                                        minLength: {value: 2,
                                                    message: "El apellido debe tener al menos 2 caracteres"},
                                        maxLength: {value: 30,
                                                    message: "El apellido debe tener como máximo 30 caracteres"},            
                                      pattern:{value: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/i ,
                                                message: "El formato del apellido no es correcto"} 
                                    }) }
             onChange={(e) => setLastName(e.target.value)}                       
            />
            {/* {errors.apellido && <span>{errors.apellido.message}</span>} */}
            <div className="text-danger" >{errors.apellido?.message}</div>                        
          </Form.Group>
          </Form.Group>
        
          <Form.Group className="mt-4">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              /* value={email} */
              
              placeholder="Ingrese su email"
              {...register("email", { required: {value: true, 
                                                message: "El email es requerido"}, 
                                      pattern:{value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i ,
                                              message: "El formato del email no es correcto"} 
                                    }) }
            onChange={(e) => setEmail(e.target.value)}                        
            />
            {/* {errors.email && <span>{errors.email.message}</span>} */}
            <div className="text-danger" >{errors.email?.message}</div>  
          </Form.Group>

        
          <Form.Group className="mt-4">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              /* value={password} */
              
              placeholder="Ingresar contraseña"
              {...register("password", { required: {value: true, 
                                                    message: "La contraseña es requerida"}, 
                                        minLength: {value: 8,
                                                    message: "La contraseña debe tener al menos 8 caracteres"},
                                        maxLength: {value: 64,
                                                      message: "La contraseña debe tener como máximo 64 caracteres"},            
                                        pattern:{value: /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/i ,
                                                  message: "La contraseña debe tener una letra minúscula, una letra mayúscula, un número, un carácter especial y mínimo 8 dígitos."}            
                                        })}
             onChange={(e) => setPassword(e.target.value)}
            />
            {/* {errors.password && <span>{errors.password.message}</span>} */}
            <div className="text-danger" >{errors.password?.message}</div>  
          </Form.Group>
          
          <Form.Group className="mt-4">
            <Form.Label>Confirme Password</Form.Label>
            <Form.Control
              type="password"
              /* value={confirmPassword} */
              
              placeholder="Confirme su password"
              {...register("confirmPassword", { required: {value: true, 
                                                          message: "La confirmación de la contraseña es requerida"}, 
                                                minLength: {value: 8,
                                                            message: "La contraseña debe tener al menos 8 caracteres"},
                                                maxLength: {value: 64,
                                                              message: "La contraseña debe tener como máximo 64 caracteres"},            
                                                pattern:{value: /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/i ,
                                                          message: "La contraseña debe tener una letra minúscula, una letra mayúscula, un número, un carácter especial y mínimo 8 dígitos."}            
                                                })}    
              onChange={(e) => setConfirmPassword(e.target.value)}                                           
            />
            {/* {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>} */}
            <div className="text-danger" >{errors.confirmPassword?.message}</div>                                     
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-4">
            Submit
          </Button>
        </Form>
    </>
  );
};

export default Registro;
 

 