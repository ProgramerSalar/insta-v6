import React from "react";
import { modalState } from "../atom/modalAtom";
import {useRecoilState} from "recoil";
import Modal from "react-modal";
import { CameraIcon } from "@heroicons/react/24/solid";
import { useRef , useState } from "react";


export default function UploadModal(){
    const [open , setOpen] = useRecoilState(modalState);
    const [selectedFile , setSelectedFile] = useState(null);

    function addImageToPost(event){
        const reader = new FileReader()
         if(event.target.files[0]){
            reader.readAsDataURL(event.target.files[0])
        }
        reader.onload = (readerEvent) =>{
            setSelectedFile(readerEvent.target.result)
        }
    }
    const filePickerRef = useRef(null)

    return(
        <div className="">
            <h1>uploadModel </h1>
            {open && <h1>The Model is open</h1>}
            {open && (
                <Modal
                className="max-w-lg w-[90%] h-[300px] absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md"
                isOpen={open}
                onRequestClose={() => {setOpen(false);setSelectedFile(null) }}>
                    <div className="flex flex-col justify-center items-center h-[100%]">
                    <h1>Modal</h1>
                    {selectedFile ? (
                        <img onClick={()=>setSelectedFile(null)} src={selectedFile} className="w-full max-h-[250px] object-cover cursor-pointer"/>
                    ): (<CameraIcon onClick={()=> filePickerRef.current.click()} className="cursor-pointer h-14 bg-red-300 rounded-full border-2 text-red-500"/>)}

                    <input type="file" hidden ref={filePickerRef} onChange={addImageToPost}/>
                    <input type="text" maxLength="150" placeholder="Please Enter your caption....." className="m-4 border-none text-center w-full focus:ring-0"/>
                    <button disabled className="w-full bg-red-600 text-white p-2 shadow-md hover:brightness-125 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:brightness-100">Upload Post </button>
                     </div>

                </Modal>
            )}

        </div>
    )
}