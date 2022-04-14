import Head from "next/head";
import Image from "next/image";
import styles from "../styles/layout.module.css";
import Layout from "../components/layout";
import React from "react";
import Moment from "react-moment";
import DatosApi from "./datosApi"


export default function Home({ data}) {
  const dateToFormat = new Date("1976-04-19T12:59-0500");
  <Moment date={dateToFormat} />;
  var fechaInicio = new Date("2016-07-1").getTime();
  var fechaFin = new Date("2016-08-01").getTime();

  var diff = fechaFin - fechaInicio;

  console.log(diff / 24, "differencia");


  return (
    <Layout>
      <div  className={styles.back} >
          <h2 className={styles.titulos}><a href="/datosApi"> Datos que vienen de la API: Prueba Backend </a></h2>

     
      </div>
  

        <h2 className={styles.titulos} > Noticias mas recientes Parque Explora</h2>
     
  
     {data.map( (post) => (console.log(post),
          (
            <div>
              <h3>{post.title.rendered}</h3>
              <div
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}/>
  
            </div>
          )
        )
      )}
    </Layout>
  );
}
export async function getStaticProps() {
  try {
    const res = await fetch("https://encasa.parqueexplora.org/wp-json/wp/v2/posts");
 
    const data = await res.json();
    
   
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}


