import React from "react";
import styles from "../styles/layout.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.header}>
      <Image
        className={styles.logo}
        src="/img/logo3.png"
        width={150}
        height={150}
      ></Image>
      <navbar className={styles.navbar}>
        <menu>
          <Link href="/">
            <a className={styles.Link}>Inicio</a>
          </Link>
          <Image
            src="/img/casa.png"
            width={30}
            height={30}
            margin={5}
            className={styles.logo}
          ></Image>
          <Link href="/navigation">
            <a className={styles.Link}>Explora</a>
          </Link>
          <Image
            src="/img/ciencia.webp"
            width={30}
            height={30}
            margin={5}
          ></Image>
          <Link href="/about">
            <a className={styles.Link}>¿Quienes somos?</a>
          </Link>
          <Image src="/img/orga.png" width={30} height={30} margin={5}></Image>
        </menu>
      </navbar>
    </div>
  );
}
