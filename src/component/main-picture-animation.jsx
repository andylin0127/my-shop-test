import { useState } from "react"
import cow from "../assets/cow.jpg"
import cow1 from "../assets/cow1.jpg"
import cow2 from "../assets/cow2.jpg"

export default function PictureAnimation(){
        const allpicture=[cow,cow1,cow2];
        const [index,setIndex]=useState(0)
    
        function changLeftPicture(){
            setIndex((i)=>(( i - 1 ) + allpicture.length)%allpicture.length);
        }
    
        function changeRightPicture(){
            setIndex((i)=>(( i + 1 )%allpicture.length));
        }
        
     return(
        <div className="relative w-[500px] h-[400px]">
            {allpicture.map((src,i)=>(
                <img
                key={i}
                src={src}
                alt={src}
                className={`absolute  w-full h-full object-cover transition-opacity duration-500
                ${i===index?'opacity-100':'opacity-0'}`}
                />
            ))}
            <button onClick={changLeftPicture}>
                <img src="./src/assets/left.jpg" alt="" className="absolute size-10 top-1/2 left-0 -translate-y-1/2 transition-opacity duration-300  hover:opacity-100 opacity-0"/>
            </button>
            <button onClick={changeRightPicture}>
                <img src="./src/assets/right.jpg" alt="" className="absolute size-10 top-1/2 right-0 -translate-y-1/2 transition-opacity duration-300  hover:opacity-100 opacity-0"/>
            </button>
        </div>
     )   
}