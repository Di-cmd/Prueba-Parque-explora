import Layout from "../components/layout";
import React from "react";
import Moment from "react-moment";
import styles from "../styles/layout.module.css"


export default function DatosApi({ data2 }) {
  

  return (
    <Layout>

           <h2 className={styles.titulos}>Datos que vienen de la API: Prueba Backend</h2>

     {data2.map( (post1) => (console.log(post1),
          (
            <div className={styles.card}>
                <h3 >Titulo:</h3>
              <h2>{post1.titulo}</h2>
              <h3>Descripción:</h3>
                <p>{post1.descripcion}</p>
                <h3>Sala interactiva:</h3>
                <p>{post1.sala}</p>
                <h3>¿Noticia es Destacada?</h3>
                <p>{post1.destacada}</p>
  
            </div>
          )
        )
      )}
    </Layout>
  );
}
export async function getStaticProps() {
  try {
    const res2 = await fetch("http://localhost:9000");
    const data2 = await res2.json();
   
    return {
      props: {
        data2
      },
    };
  } catch (error) {
    console.log(error);
  }
}


