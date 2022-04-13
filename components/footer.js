import React from "react";
import styles from "../styles/layout.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <h2>Ubicación</h2>
        <p>Carrera 52 # 73 - 75
          Medellín - Colombia
        +57(4) 516 83 00
        </p>
      </div>

      <div>
        <h2>Contáctanos</h2>
        <p>Corporación Parque Explora
        +57(4) 516 83 00
        comunicaciones@parqueexplora.org
        </p>
        <a href="https://www.parqueexplora.org/" target="_blank">
          Parque explora pagina principal
        </a>

        <button className={styles.button}> <a href="https://www.facebook.com/ParqueExplora" target="_blank"> Facebook </a></button>
        <button className={styles.button}> <a href="https://twitter.com/ParqueExplora?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"> Twitter </a></button>
        <button className={styles.button}> <a href="https://www.instagram.com/parqueexplora/?hl=es" target="_blank"> Instagram </a></button>
      </div>
    </div>
  );
}
