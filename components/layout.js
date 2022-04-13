import React from "react";
import Header from "./header";
import Footer from "./footer";
import Head from "next/head";
import styles from "../styles/layout.module.css";

export default function Layout({ children }) {
  return (
    <div >
                            
          <Head>
              <title>prueba Parque Explora</title>
            </Head>

            <Header></Header>

            {children}

            <Footer></Footer>
        </div>
  );
}
