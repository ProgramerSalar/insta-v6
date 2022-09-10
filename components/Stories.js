
import React, { useEffect, useState } from "react"
import minifaker from "minifaker"
import "minifaker/locales/en"
import Story from "./Story"
import {useSession , username , isUser} from "next-auth/react"


export default function Stories(){
    const [storyUsers , setStoryUsers] = useState([])
    const {data : session} = useSession();

    
    useEffect(()=>{
        const storyUsers = minifaker.array(400,(i)=>(
            {

                username:minifaker.username({locale:"en"}).toLowerCase(),
                img:`https://i.pravatar.cc/150?img=${Math.ceil(Math.random()* 70)}`,
                id:i
            }))
        setStoryUsers(storyUsers)
        console.log(storyUsers)
    },[])
    return(
        <div className="">
        <div className="flex space-x-2 bg-white border-gray-200 border overflow-x-scroll rounded-sm scrollbar-hide ">
            {session && (
                 <Story  img={session.user.img} username={session.user.username} isUser="true"/>
                
            )}
            {storyUsers.map(user=>(
                        <Story key={user.id} username={user.username} img={user.img}/>
                    ))}
                
        </div>

        </div>
    )
}







