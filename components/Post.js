


import React, { useEffect, useState } from "react";
import { EllipsisHorizontalIcon , HeartIcon ,   BookmarkIcon, ChatBubbleBottomCenterIcon , FaceSmileIcon ,   } from '@heroicons/react/24/solid'
import { useSession } from "next-auth/react";
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import Moment from "react-moment"
import { async } from "@firebase/util";
import {HeartIcon as HeartIconFilled} from '@heroicons/react/24/solid'

export default function Post({img,userImg , caption , username , id}){
    const {data:session} = useSession();
    const [commet , setcomment ] = useState();
    const [comments , setComments] = useState([]);
    const [likes  , setLikes] = useState([]);
    const [hasLiked , setHasLiked] = useState([]);

    useEffect(()=>{
        const unsubscribe = onSnapshot(
            query(collection(db , "posts" , id , "comments") , orderBy("timestamp" , "desc")) , (snapshot) =>{setComments(snapshot.docs)}
        )
    } , [db , id])


    useEffect(()=>{
        const unsubscribe = onSnapshot(
            collection(db , "posts" , id , "likes"),
            (snapshot)=> setLikes(snapshot.docs)
        );

    } , [db]);

    useEffect(()=>{
        setHasLiked(
            likes.findIndex((like)=> like.id === session?.user.uid) !== -1)
             
    }  , [likes]
    
    );

    async function likePost(){
        if (hasLiked) {
            await deleteDoc(doc(db , "posts" , id , "likes" , session.user.uid));

        }else{
            await setDoc(doc(db , "posts" , id , "likes" , session.user.uid),{
                username : session.user.username,
            })
        }
    }

    async function sendComment(event){
        event.preventDefault();
        const commentToSend = commet;
        setcomment("")
        await addDoc(collection(db , "posts" , id , "comments"), {
            commet:commentToSend,
            username:session.user.username,
            userImg:session.user.image,
            timestamp:serverTimestamp()
        })
    }
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

             {/* post button  */}
             {session && (
                <div className=" flex justify-between px-4 ">
                <div className=" flex space-x-2">
                    
                    <ChatBubbleBottomCenterIcon className="btn text-gray-200 h-10"/>
                    {hasLiked ? (<HeartIconFilled onClick={likePost} className="btn text-red-700 h-10" />):
                    (<HeartIcon onClick={likePost} className="btn text-gray-200 h-10"/>)}
                    

                </div>
                    <BookmarkIcon className="btn text-gray-200 h-10"/>
                    
        </div>


             )}

            

            {/* post coments  */}
            

            <p className="p-6 truncate"><span className="font-bold mr-6">{username}</span>{caption}</p>
            {comments.length > 0 && (
                <div className="mx-10 max-h-24 overflow-y-scroll scrollbar-none">
                    {comments.map(comment => (
                        <div className="flex items-center space-x-2 mb-2">
                            <img className="h-7 rounded-full object-cover" src={comment.data().userImg} alt="user-image"/>
                            <p className="font-semibold">{comment.data().username}</p>
                            <p className="flex-1 truncate">{comment.data().comment}</p>
                            <Moment fromNow>{comment.data().timestamp?.toDate()}</Moment>
                        </div>
                    ))}
                </div>
            )}
           

            {/* post input box  */}
            {session && (
                <form action="" className="flex items-center p-14">
                <FaceSmileIcon className="h-7 text-yellow-500"/>
                <input className="border-none flex-1 focus:ring-0" placeholder="Enter your comments............." type="text" 
                value={commet}
                onChange={(event)=>setcomment(event.target.value)}/>
                <button type="submit" onClick={sendComment} disabled={!commet}>Post</button>

            </form>
            

            )}
            
            
        </div>
    )
}