
import React from "react";
import Image from "next/image";

export default function Header(){
    return(
        <div className="">

            {/* Left  */}

            <div className="flex items-center justify-between max-w-6xl">
            <div className="h-24 w-34 relative hidden lg:inline-grid cursor-pointer">
                <Image
                src="https://cdn2.downdetector.com/static/uploads/logo/Instagram_Logo_Large.png"
                width={400}
                height={150}
                className="object-contain"
                
                
                />
            </div>
            
            <div className=" h-24 w-10 relative lg:hidden cursor-pointer">
                <Image
                src="https://www.computerhope.com/jargon/i/instagram.png"
                width={100}
                height={100}
                className="object-contain"
                
                />
                

            </div>
            <h1>Right side </h1>
            
        </div>

        {/* middle  */}

        {/* right  */}

        </div>
        
    )
}