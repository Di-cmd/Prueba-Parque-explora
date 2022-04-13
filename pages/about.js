import React, { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "../components/layout";


export default function about({data}){


    return (
     
    <Layout>
        {
    data.map((post)=>(
        <div key={post.id}>
            <card>
            <h3>{post.title.rendered}</h3>
          <h3> {post.url}</h3>
          {/* <div dangerouslySetInnerHTML={post.content.rendered}></div> */}

                </card>
         
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