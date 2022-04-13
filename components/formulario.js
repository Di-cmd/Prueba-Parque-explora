import React, { useState } from "react";
import Layout from "../components/layout";
import Image from "next/image";
import styles from "../styles/layout.module.css";
export default function Formulario() {

async function handleOnSubmit(e){
e.preventDefault();
const formData={}
Array.from(e.currentTarget.elements).forEach(field=>{
  if(!field.name) return;  
  formData[field.name]=field.value;
});

console.log("Hola enviaaa",formData);
}


  return (
    <Layout>
        <form className={styles.form} method="post" onSubmit={handleOnSubmit}>
          <input  type="Text" name="nombre" placeholder="Nombre"></input>

          <input type="number" name="title" placeholder="cedula"></input>

          <input type="phone" name="title" placeholder="Telefono"></input>

          <input
            type="email"
            name="title"
            placeholder="Correo electronico"
          ></input>

          <select>
            <option>Preescolar</option>
            <option>Primaria</option>
            <option>Secundaria</option>
          </select>

          <button type="submit">enviar</button>
        </form>
      
    
    </Layout>
  );
}