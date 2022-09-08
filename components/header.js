

import React from "react";
import Image from "next/image"
import { MagnifyingGlassIcon , PlusIcon , HomeIcon } from '@heroicons/react/24/solid'


export default function Header(){
    return(
        <div className="">
            <div className="flex items-center justify-between max-w-6xl mx-4 mx-auto bg-white z-30">
                <div className="relative hidden lg:inline-grid cursor-pointer">
                    <Image
                    src="https://download.logo.wine/logo/Facebook/Facebook-Logo.wine.png"
                    width={400}
                    height={150}
                    className="object-contain"/>
                </div>
                <div className="relative lg:hidden cursor-pointer">
                    <Image
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png"
                    width={100}
                    height={100}
                    className="object-contain"/>
                </div>
                    {/* middle  */}
                    <div className="">
                        <div className="absolute top-16">
                            <MagnifyingGlassIcon className="h-6 text-gray-600"/>
                        </div>
                        <input type="text" placeholder="Search" className="bg-gray-50 pl-10 border-gray-600 text-sm focus:ring-black focus:border-black rounded-md" />
                    </div>
                

                <div className="flex space-x-4 items-center">
                    <HomeIcon className="h-6 hidden md:inline-flex cursor-pointer hover:scale-125 transition-transform-200 ease-out"/>
                    <PlusIcon className="h-6 cursor-pointer hover:scale-125 transition-transform-200 ease-out"/>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png" alt="user-image" className="h-10 rounded-full"/>
                </div>

                
                
                
                
            </div> 
        </div>
    )
}