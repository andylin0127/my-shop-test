import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiLine, SiThreads } from "react-icons/si";


export default function Header(){
    const [language,setLanguage]=useState("Chinese");
    const [languages,setLanguages]=useState({});

    const handleChange=(e)=>{
        setLanguage(e.target.value);
    };

    useEffect(()=>{
        const langFile = language === "Chinese"? "ch":"en";
        {
        fetch(`${import.meta.env.BASE_URL}locales/${langFile}.json`)
        .then(res=>res.json())
        .then(data=>setLanguages(data))
        .catch((err) => console.error("載入語言檔錯誤", err));
        }
    }
    ,[language])

    return (
        <div className="flex gap-2 text-white bg-blue-600 pt-3 pb-2 ">
            <div className="min-w-[50px] text-[clamp(10px,1.5vw,15px)]"><a href="https://andylin0127.github.io/test-git/">{languages.my}</a></div>
            <ul className="flex items-center gap-1.5 min-w-[15px] text-[clamp(10px,1.5vw,15px)]">{languages.ul}
                <li><a href=""><FaFacebook/></a></li>
                <li><a href=""><FaInstagram/></a></li>
                <li><a href=""><SiLine/></a></li>
                <li><a href=""><SiThreads/></a></li>
            </ul>
            <div className=" flex-1 "></div>
            <button className="text-[clamp(10px,1.5vw,15px)] "><a href="">{languages.sign}</a></button>
            <button className="text-[clamp(10px,1.5vw,15px)] "><a href="">{languages.login}</a></button>
            <select  name="Language" className="text-[clamp(10px,1.5vw,15px)]" value={language} onChange={handleChange}>
                <option value="Chinese" className="text-black">繁體中文</option>
                <option value="English" className="text-black">English</option>
            </select>

        </div>
    )
}