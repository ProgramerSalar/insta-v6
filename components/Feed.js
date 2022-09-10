
import React from "react";
import MiniProfile from "./Miniprofile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";
import { useSession } from "next-auth/react";


export default function Feed(){
    const {data:session} = useSession()
    return <main className={`grid  ${session ? "grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto" : " grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto"}`}>

        <section className="md:col-span-2">
            

            {/* stories  */}
            <Stories/> 
            

            {/* posts  */}
            <Posts/>
            


        </section>
        <section className="hidden md:inline-grid md:col-span-1">

            {/* miniprofile */}

            <div className="">

                <MiniProfile/>
            </div>
           

            {/* suggection  */}
            <div className="">
                <Suggestions/>
            </div>

            


        </section>
    </main>
}