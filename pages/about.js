import React, { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/layout.module.css";

export default function about() {
  return (
    <Layout>
      <div className={styles.quienes}>
       
       <div>
           <h3 className={styles.titulos}>¿Qué es Parque Explora?</h3>
        <p>
          ¿Qué es Parque Explora? El Parque Explora, es un museo interactivo de
          ciencias en la ciudad de Medellín, Colombia, formado por un acuario
          con énfasis en la Amazonia, un planetario, un taller público de
          experimentación -Exploratorio- y un parque con más de 300 experiencias
          orientadas a la apropiación social del conocimiento. Tiene 22 mil
          metros cuadrados de área interna y 15 mil de plazas públicas, con
          jardines nativos que lo convierten en un atractivo parque. El Parque
          Explora está comprometido con la protección de la vida en su más
          cautivante expresión: la diversidad. Es un museo de ciencias
          incluyente diseñado para anular barreras de diverso tipo: físicas,
          actitudinales, informativas, culturales…La biodiversidad pasa por lo
          humano. Y por nuestra relación con los otros. El Acuario nos incluye y
          pone de presente que la fragilidad de la vida del agua es, también, la
          nuestra. Este escenario educativo y de conservación recrea dos
          ecosistemas en riesgo: el bosque húmedo tropical y los arrecifes de
          coral. El Acuario rebasa el nivel exhibitorio y promueve una nueva
          ética de la vida. Más de 4 mil individuos de 400 especies, nos
          recuerdan que no estamos solos, que nuestro destino es común y que es
          preciso conocer y respetar no solo lo que se nos parece. Explora es el
          mayor proyecto dedicado a la apropiación social de la ciencia y
          tecnología de Medellín, y pone todos sus acentos en la formación de
          capacidades científicas y ciudadanas que nos ayuden a vivir mejor.
          Tiene exhibiciones permanentes y temporales dedicadas a temas como las
          neurociencias, la música, el Tiempo, las historias de la gente y los
          medios de comunicación que les han permitido contarlas. Es un
          atractivo turístico indiscutible, tanto para locales como para
          visitantes de otros países. Y es un símbolo de transformación social
          desde la educación, ubicado en la Zona Norte de Medellín, un sector
          estigmatizado durante muchos años por albergar el antiguo basurero de
          la ciudad y que hoy tiene una vitalidad plural y emocionante. Con sus
          cuatro cajas que flotan contra el horizonte de barrios obreros y
          montañas, el parque colorea el paisaje y acoge a de manera gratuita a
          quienes más lo necesitan. El museo, sus servicios y programas
          especiales, se convierte en un aliado para renovar la escuela, con
          experiencias que ofrecen recursos para mejorar las prácticas
          pedagógicas, para activar aprendizajes basados en proyectos STEAM y
          otras metodologías conectadas con los territorios, conectadas con la
          posibilidad de aprender divirtiéndose y, en definitiva, conectadas con
          hacer del conocimiento una aventura que no termina. Con una atractiva
          programación el Parque Explora es un gran movilizador y articulador
          social que contribuye a consolidar una opinión pública informada y
          deliberante. Su vida digital es profusa y participativa, a tal punto
          que la gente nos ha convertido en el museo con más seguidores en redes
          sociales de Colombia. Gracias a este trabajo que hacemos con las
          personas, consideradas protagonistas centrales de las experiencias,
          hemos logrado cumplir la exigente misión que se nos ha confiado:
          Inspirar, comunicar y transformar mediante escenarios de interacción
          que, en relación siempre respetuosa con la vida, contribuyan a la
          apropiación del conocimiento necesaria para la construcción de una
          mejor sociedad.
        </p>

       </div>
            <div className={styles.imgQuienes}>
            <Image  
            src="/img/parque1.png" width={1500} height={400}></Image>
            <Image 
            src="/img/parque2.jpeg" width={1500} height={400}></Image>
            <Image 
            src="/img/parque3.jpg" width={1500} height={400}></Image>
            <Image 
            src="/img/parque4.jpg" width={1500} height={400}></Image>
            </div>

      </div>

       
    <div className={styles.quienes}>
        <div>
        <Image  
            src="/img/feria1.jpg" width={1500} height={400}></Image>
            <Image 
            src="/img/feria2.jpg" width={1500} height={400}></Image>
            <Image 
            src="/img/parque3.jpg" width={1500} height={400}></Image>
            <Image 
            src="/img/parque4.jpg" width={1500} height={400}></Image>
        </div>
           
            <div>
          <h3 className={styles.titulos} >Reconocimientos de Parque Explora</h3>
                <li>
                {" "}
                Smithsonian Cooper-Hewitt, concedido por el National Design Museum de
                Nueva York en 2010.{" "}
                </li>

                <li>
                Reconocimiento y exposición en el Netherlands Architecture Institute
                de Holanda: Testify, the consequences of architecture, 2011.{" "}
                </li>

                <li>
                {" "}
                Premio de diseño Lápiz de Acero en la categoría Azul a la museografía
                del Acuario Parque Explora en 2011.{" "}
                </li>

                <li>
                {" "}
                Premio de diseño Lápiz de Acero a la mejor experiencia por Encuentros,
                de la Sala Conexión de la Vida, en 2011.
                </li>

                <li>
                {" "}
                Premio a la Mejor Unidad de Comunicaciones y premio a la Innovación,
                concedidos por el Centro Colombiano de Comunicaciones y Relaciones
                Públicas en 2011.{" "}
                </li>

                <li>
                {" "}
                Premio a la Divulgación, concedido por la Asociación Colombiana para
                el Avance de las Ciencias – ACAC en 2012.{" "}
                </li>
                <li>
                {" "}
                Premio Lápiz de Acero en la categoría Identidad Visual por la
                exposición temporal Los mundos de Julio Verne en 2014.{" "}
                </li>

                <li>
                {" "}
                Mención de honor en la categoría Solidaridad, concedida por la
                Fundación Alejandro Ángel Escobar para la Investigación, la Ciencia y
                la Solidaridad en 2015.{" "}
                </li>

                <li>
                {" "}
                Beca de Creación en Astronomía a la producción audiovisual para domo,
                otorgada por la Alianza Americana de Museos –Musseums connect– del
                Departamento de Estado de los Estados Unidos en 2015.{" "}
                </li>

                <li>
                {" "}
                Premio a la Divulgación Científica en la categoría de Organizaciones,
                concedido por la Red de Popularización de la Ciencia y la Tecnología
                para América Latina y el Caribe (RedPop) en 2015.{" "}
                </li>

                <li>
                {" "}
                Premio de las Naciones Unidas para el Desarrollo Urbanístico, otorgado
                al proyecto de urbanismo social de la ciudad de Medellín, del que
                Explora forma parte, en 2016.{" "}
                </li>

                <li>
                {" "}
                VI Premio Iberoamericano de Educación y Museos, otorgado a la Feria de
                la Ciencia, la Tecnología y la Innovación en 2016.{" "}
                </li>
                <h4>Fuente: https://www.parqueexplora.org/visita/el-parque </h4>
            </div>

      </div>

    </Layout>
  );
}
