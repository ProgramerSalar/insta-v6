


import React, { useEffect, useState } from "react"
import minifaker, { username } from "minifaker"
import "minifaker/locales/en"
import Story from "./Story"







export default function Stories(){
    const [storyUsers , setStoryUsers] = useState([])
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
            {storyUsers.map(user=>(
                        <Story key={user.id} username={user.username} img={user.img}/>
                    ))}
                
        </div>

        </div>
    )
}







