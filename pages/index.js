


import React from "react"
import Head from "next/head"
import Header from "../components/header"
import Feed from "../components/Feed"

export default function Home(){
  return(
    <div className="">
      <div className="">
      <Head>
        <title>insta-v6</title>
      </Head>

      {/* Header  */}
      <Header/>





      {/* feed  */}
      <Feed/>
        
      </div>
     
      
    </div>
  )
}
