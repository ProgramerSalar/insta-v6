
import { username } from "minifaker";
import React  from "react";

export default function Story({img , username}){
    return(
        <div className="">
            <img className="h-14 rounded-full p-[1.5px] border-red-800 border-2 cursor-pointer hover:scale-110 transition-transform duration-200 ease-out"
            src={img} alt={username}/>
            <p className="text-xs w-14 truncate">{username}</p>
        </div>
    )
}