import React, { useState } from "react";
import Axios from "axios";
import Swal from 'sweetalert2';
import {Switch , Route, Link,useParams} from 'react-router-dom';




const EditUserForm = (props) => {

    
    const url = "https://api-new-03.herokuapp.com/update.php"

    const [data, setdata]=useState(
          { 
            id : "",
            nombre: "",
            apellido: "",
            identificacion: "",
            correo: ""
        }
    )
    const [place, setplace]=useState(
      { 
        id : "",
        nombre: "",
        apellido: "",
        identificacion: "",
        correo: ""
    }
)
        const [equipo, setEquipo] = React.useState([]);

        React.useEffect(() => {
          obtenerDatos();
        }, []);
      
        const obtenerDatos = async () => {
          debugger
          const data = await fetch(
            'https://api-new-03.herokuapp.com/read.php'
          );
          const users = await data.json();
          setEquipo(users);
           
        };
        
        const {id} = useParams ()
        debugger
        data.id = id
        equipo.forEach(item => {
          place.id = id
          if(place.id === item.id){
             place.nombre = item.nombre
             place.apellido = item.apellido
             place.identificacion =item.identificacion
             place.correo = item.correo
          }
        })
        
        function submit(e){
            debugger
            e.preventDefault()
            if(data.nombre === ''){
              data.nombre = place.nombre
            };
            if(data.apellido === ''){
              data.apellido = place.apellido
            };
            if(data.identificacion === ''){
              data.identificacion = place.identificacion
            };
            if(data.correo ===''){
              data.correo = place.correo
            };
            Axios.post(url,JSON.stringify(data))
            .then(res => {
                res.data = data;
                Swal.fire({
                   icon: 'success',
                   title: 'Operacion Exitosa',
                   text: 'Datos Insertados Correctamente',
                   buttonFuncion: <Link to="/">Editar</Link>
                 }).then(
                  window.location = "/"
                 )
               //  fetch(Url, {
               //     method: 'POST', // or 'PUT'
               //     body: JSON.stringify(data), // data can be `string` or {object}!
               //     headers:{
               //       'Content-Type': 'application/json'
               //     }
               //   }).then(res => res.json())
               //   .catch(error => console.error('Error:', error))
               //   .then(response => console.log('Success:', response));
             
              
       })
    }
   
    function handle(e){
      
       const newData = {...data};
       newData[e.target.id] = e.target.value;
       setdata(newData)
    }
    return (
        <div className="container mr-0">
        <br />
            <form onSubmit= {(e)=>submit(e)}>
            <div className="form-group">
            <label for="nombre">ID</label>
            <input onChange={(e)=>handle(e)} disabled value={data.id} type="text" name="nombre" className="form-control" id="nombre" placeholder={data.id} />
            <label for="nombre">Nombre</label>
            <input onChange={(e)=>handle(e)}  value={data.nombre} type="text" name="nombre" className="form-control" id="nombre" placeholder={place.nombre} />
 
            <label for="apellido">Apellido</label>
            <input onChange={(e)=>handle(e)} value={data.apellido} type="text" name="apellido" className="form-control" id="apellido" placeholder={place.apellido} />
            <label for="identificacion">Identificacion</label>
            <input onChange={(e)=>handle(e)} value={data.identificacion} type="text" name="identificacion" className="form-control" id="identificacion" placeholder={place.identificacion} />
            <label for="correo">Correo</label>
            <input onChange={(e)=>handle(e)} value={data.correo} type="text" name="correo" className="form-control" id="correo" placeholder={place.correo} />
            </div>
             <div className="row">
             <button type="submit" className="btn btn-success ml-3">Editar</button>
            <Link type="button" to="/" className="btn btn-danger ml-3">Cancelar</Link>
             </div>
            </form>
        </div>
    )
}
export default EditUserForm