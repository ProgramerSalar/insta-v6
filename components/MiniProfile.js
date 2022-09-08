import React from "react";


export default function MiniProfile(){
    return(
        <div className="flex items-center justify-between ml-4 ">
            <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png"
            alt="user-image"
            className="h-16 rounded-full border p-[2px]"
            />

            <div className="flex-1 ml-14">
                <h2 className="font-bold">Codewithmanish</h2>
                <h3 className="text-sm text-gray-400 ">Welcome To Facebook </h3>
            </div>
            <button className="font-semibold text-blue-800 text-sm"> Sign out </button>
        </div>
    )
}