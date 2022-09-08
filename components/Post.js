


import React from "react";
import { EllipsisHorizontalIcon , HeartIcon ,   BookmarkIcon, ChatBubbleBottomCenterIcon , FaceSmileIcon ,  } from '@heroicons/react/24/solid'

export default function Post({img,userImg , caption , username , id}){
    return(
        <div className="">
            
            <div className="bg-white my-7 border-8 rounded-md">

                {/* Posts  */}
                <div className="flex items-center p-5">
                    <img  className="h-12 rounded-full object-cover border p-1 mr-3 " src={userImg}  alt={username}/>
                    <p className="font-bold flex-1">{username}</p>
                    <EllipsisHorizontalIcon className="h-6"/>
                </div>

                {/* post image  */}
                <img className="object-cover w-full" src={img}/>

               

                

            </div>

             {/* poar button  */}

            <div className=" flex justify-between px-4 ">
                    <div className=" flex space-x-2">
                        <HeartIcon className="btn text-gray-200 h-10"/>
                        <ChatBubbleBottomCenterIcon className="btn text-gray-200 h-10"/>
                        

                    </div>
                        <BookmarkIcon className="btn text-gray-200 h-10"/>
                        
            </div>

            {/* post coments  */}

            <p className="p-6 truncate"><span className="font-bold mr-6">{username}</span>{caption}</p>

            {/* post input box  */}
            <form action="" className="flex items-center p-14">
                <FaceSmileIcon className="h-7 text-yellow-500"/>
                <input className="border-none flex-1 focus:ring-0" placeholder="Enter your comments............." type="text" />
                <button>Post</button>

            </form>
            
        </div>
    )
}