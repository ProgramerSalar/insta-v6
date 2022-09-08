

import React, { useEffect, useState } from "react";
import minifaker from "minifaker"

export default function Suggestions(){
    const [suggection , setSuggestion] = useState([])
    useEffect(()=>{
        const suggection = minifaker.array(50,(i)=>({
            username:minifaker.username({locale:"en"}).toLowerCase(),
            jobTitle:minifaker.jobTitle(),
            id:i

            
        }));
        setSuggestion(suggection)
    } , [])

    return(
        <div className="  border-8 border:ml-14 ">
            <div className=" flex justify-between mt-3  ">
                <h3 className="font-bold text-sm ml-4">Suggestions</h3>
                <button className="text-gray-700 font-bold text-sm mr-4 ">See All</button>

            </div>
            {suggection.map(suggection => (
                <div className="flex items-center justify-between mt-4 ml-4 mr-4">
                    <img className="h-10 rounded-full border p-[2px]" src={`https://i.pravatar.cc/150?img=${Math.ceil(Math.random()*70)}`}/>
                    <div className="flex-1 ">
                        <h2 className="font-semibold text-gray-800 text-sm">{suggection.username}</h2>
                        <h3 className="text-sm text-gray-400 truncate-[230px]">{suggection.jobTitle}</h3>
                    </div>
                    <button className="font-semibold text-blue-900 text-sm">Follow</button>
                </div>
            ))}
        </div>
    )
}