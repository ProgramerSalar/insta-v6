

import {getProviders , signIn} from "next-auth/react"
import { useRouter } from "next/router";



export default function signin({providers}){
    const router = useRouter();
    return(
        <>
        {/* <Headers>

        </Headers> */}
        <div className="flex-1">
            <img className="hidden object-cover  md:inline-flex m-auto  justify-center hover:scale-125 transition-transform-200 cursor-pointer "  src="https://i0.wp.com/www.videooutcomes.com/wp-content/uploads/2021/01/facebook-advertising-melbourne.png?fit=512%2C512&ssl=1"
            onClick={()=>{
                router.push("/")
            }}/>
            <div className="">
                {
                    Object.values(providers).map((provider)=>(
                        <div className="flex flex-col items-center" key={provider.name}>
                            <button className="h-12 bg-green-600 rounded-md hover:bg-blue-600 border-l text-white p-3 hover:scale-150 transition-transform-200" onClick={()=>signIn(provider.id , {callbackUrl:"/"})}>Sign in with {provider.name}</button>
                        </div>
                    ))
                }
            </div>
        </div>
        </>
        
    )
}

export async function getServerSideProps(context){
    const providers = await getProviders();
    return{
        props:{providers}
    }
        
    
}