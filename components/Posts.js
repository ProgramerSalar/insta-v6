
import React from "react";
import Post from "./Post";


export default function Posts(){
    const posts = [
        {
            id:"1",
            username:"codewithmanish",
            userImg:"https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png",
            img:"https://images.unsplash.com/photo-1662581871625-7dbd3ac1ca18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
            caption:"nice photo"
        },
        {
            id:"2",
            username:"codewithmanish",
            userImg:"https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png",
            img:"https://images.unsplash.com/photo-1662529785350-78ccca5012cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
            caption:"nice photo"


        }
    ]
    return(
        <div className="">
            {posts.map(post =>(
                <Post
                key={post.id}
                id={post.id}
                username={post.username}
                userImg={post.userImg}
                img={post.img}
                caption={post.caption}/>
            ))}
        </div>
        
        
            

        
    )
}