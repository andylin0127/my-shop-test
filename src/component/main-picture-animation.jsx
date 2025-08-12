import { useState , useEffect, useRef } from "react"
import cow from "../assets/cow.jpg"
import cow1 from "../assets/cow1.jpg"
import cow2 from "../assets/cow2.jpg"
import left from "../assets/left.jpg"
import right from "../assets/right.jpg"

export default function PictureAnimation(){
        const allpicture=[cow,cow1,cow2];
        const [index,setIndex]=useState(0)
        const [paused, setPaused] = useState(false);
        const prefReduced = useRef(false);

        useEffect(() => {
            prefReduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        }, []);
    
        function changeLeftPicture(){
            setIndex((i)=>(( i - 1 ) + allpicture.length)%allpicture.length);
        }
    
        function changeRightPicture(){
            setIndex((i)=>(( i + 1 )%allpicture.length));
        }
        
        useEffect(()=>{
            if(paused||prefReduced.current)return;
            const id=setInterval(changeRightPicture, 3000);
            return ()=>clearInterval(id);
        },[paused,index])


        useEffect(() => {
            const onKey = (e) => {
            if (e.key === "ArrowLeft") changeLeftPicture();
            if (e.key === "ArrowRight") changeRightPicture();
            };
            window.addEventListener("keydown", onKey);
            return () => window.removeEventListener("keydown", onKey);
        }, []);
        
     return(
        <div 
        className="group relative w-full aspect-[7/2] shrink-0"
        role="region"
        aria-label="Product image carousel"
        onMouseEnter={()=>setPaused(true)}
        onMouseLeave={()=>setPaused(false)}
        >
            {allpicture.map((src,i)=>(
                <img
                key={i}
                src={src}
                alt={src}
                className={`absolute  w-full h-full transition-opacity duration-500
                ${i===index?'opacity-100':'opacity-0'}`}
                />
            ))}
            <button type="button" aria-label="Previous image" onClick={changeLeftPicture} 
            className="absolute z-10 top-1/2 left-2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 backdrop-bluropacity-0 group-hover:opacity-100 transition-opacity">
                <img src={left} alt="" className="size-6"/>
            </button>
            <button type="button" aria-label="Next image" onClick={changeRightPicture}
            className="absolute z-10 top-1/2 right-2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 backdrop-bluropacity-0 group-hover:opacity-100 transition-opacity">
                <img src={right} alt="" className="size-6"/>
            </button>
             <div className="absolute z-10 bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                {allpicture.map((_, i) => (
                    <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-2.5 w-2.5 rounded-full transition-opacity
                    ${i === index ? "bg-black" : "bg-black/50 hover:bg-black/80"}`}
                    />
                ))}
            </div>
        </div>
     )   
}