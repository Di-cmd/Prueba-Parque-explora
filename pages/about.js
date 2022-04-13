import React, { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "../components/layout";


export default function about({data}){


    return (
     
    <Layout>
        {
    data.map((post)=>(
        <div key={post.id}>
          
            <h3>{post.title.rendered}</h3>
         
          </div>
          

    ))
}
        
    </Layout>
        
    )
}

export async function getStaticProps(){
    try{
const res=await fetch('https://encasa.parqueexplora.org/wp-json/wp/v2/posts')
const data=await res.json()  
return{
    props:{
      data  
    }
}

}
    catch (error){
        console.log(error)

    }
}