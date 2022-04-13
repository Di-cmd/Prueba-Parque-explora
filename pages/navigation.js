import React from "react";
import Layout from "../components/layout";
import Image from "next/image";
import styles from "../styles/layout.module.css";
export default function navigation() {


//Captura los datos del formulario y los muestra en consola
    async function handleOnSubmit(e){
        e.preventDefault();
        const formData={}
        Array.from(e.currentTarget.elements).forEach(field=>{
          if(!field.name) return;  
          formData[field.name]=field.value;
        });

        //Este fectch permite guardar el correo electronico y lo muestra en consola
        fetch('/api/mail',
        {
            method:'post',
            body:JSON.stringify(formData)

        })

        //este console  log permite verificar la informacion optenida del formulario
        console.log("Captura los datos del formulario",formData);
        }




  return (
    <Layout>
      {/* Esta es la imagen inicial como cabecera  */}
      <div className={styles.imgheader}>
        <Image src="/img/fondo1.jpg" width={1500} height={400}></Image>
        <div className={styles.textfloatheader}>
          <h1>NAVEGACIÓN POR EL UNIVERSO PARA COLEGIOS </h1>
          <p>
            En este viaje en vivo conoceremos los logros y descubrimientos que
            hicieron mujeres y hombres inquietos por observar los misterios del
            cosmos. Acompañados por la curiosidad y el asombro, seremos testigos
            de la diversidad de objetos que hay en nuestro universo y, a través
            de historias, viajaremos por lugares ya conocidos y por conocer.
          </p>
          <Image src="/img/whatsapp.png" width={50} height={50}></Image>
          <h3>Escribenos por Whatsapp</h3>
        </div>
      </div>

      {/* esta es el contenido con la informacion de  */}
      <div className={styles.img}>
        <Image src="/img/fondo2.png" width={1500} height={600}></Image>

        <div className={styles.textfloat}>
          <h1  className={styles.titulos} >¿Cuáles son los objetivos de estos encuentros?</h1>

          <div>
            <Image src="/img/uno.png" width={50} height={50}></Image>
            <p>
              Motivar la observación del cielo e incentivar la curiosidad sobre
              algunos temas relacionados con la Astronomía como planetas,
              estrellas y galaxias.
            </p>
          </div>

          <div>
            <Image src="/img/dos.png" width={50} height={50}></Image>
            <p>
              Fortalecer la divulgación de la Astronomía a través de entornos
              digitales que permitan mantener la conexión con estudiantes y
              maestros.
            </p>
          </div>
          <div>
            <Image src="/img/tres.png" width={50} height={50}></Image>
            <p>
              Mostrar la Tierra como un planeta muy especial que nos conecta con
              su familia planetaria y el universo en general.
            </p>
          </div>
        </div>
      </div>

      {/* Espacio para las caracteristicas */}

      <div className={styles.div2}>
        <Image
          className={styles.caract}
          src="/img/caracteristicauno.png"
          width={300}
          height={300}
        ></Image>

        <Image
          className={styles.caract}
          src="/img/caracteristicados.png"
          width={300}
          height={300}
        ></Image>
        <Image
          className={styles.caract}
          src="/img/caracteristicatres.png"
          width={300}
          height={300}
        ></Image>
        <div className={styles.div2}>
          <h1  className={styles.titulos} >Características: </h1>
          <p>Para estudiantes de 1 a 11 </p>
          <p>Incluye viaje por el universo + actividad experimental</p>
          <p>Grupos de 20 personas acompañados por un mediador</p>
          <p>1 sesión de 90 minutos </p>
          <p>Conexión privada por Zoom </p>
        </div>
      </div>

      <div>
        <h1  className={styles.titulos} >¿Quieres más información? Déjanos tus datos y te contactaremos</h1>
        <div className={styles.div3}>
        <form className={styles.form} method="post" onSubmit={handleOnSubmit}>
          <input type="Text" name="nombre" placeholder="Nombre"></input>

          <input type="number" name="cedula" placeholder="cedula"></input>

          <input type="phone" name="telefono" placeholder="Telefono"></input>

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
        </div>
        
      </div>
    </Layout>
  );
}
