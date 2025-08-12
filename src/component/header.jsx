import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiLine, SiThreads } from "react-icons/si";


export default function Header(){
    const [language,setLanguage]=useState("Chinese");
    const [languages,setLanguages]=useState({
    my: "我的網站",
    ul: "追蹤我們",
    sign: "註冊",
    login: "登入",
});

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
        <div className="sticky top-0 z-50 flex bg-neutral-900 text-neutral-200 border-b border-neutral-800 ">
            <div className="mx-auto max-w-screen-xl px-4 md:px-6 lg:px-8 flex items-center justify-between h-10 gap-2">
                <div className="flex items-center text-[10px] md:text-sm">
                    <a href="https://andylin0127.github.io/test-git/" className="opacity-90 hover:opacity-100">
                    {languages.my}
                    </a>
                </div> 
                <span className="hidden md:inline">{languages.ul}</span>
                <nav>
                    <ul className="flex items-center gap-2 text-[10px] md:text-sm">
                        <li><a aria-label="Facebook" href="#" className="opacity-80 hover:opacity-100"><FaFacebook/></a></li>
                        <li><a aria-label="Instagram" href="#" className="opacity-90 hover:opacity-100"><FaInstagram/></a></li>
                        <li><a aria-label="LINE" href="#" className="opacity-90 hover:opacity-100"><SiLine/></a></li>
                        <li><a aria-label="Threads" href="#" className="opacity-90 hover:opacity-100"><SiThreads/></a></li>
                    </ul>
                </nav>
            </div>
            <div className="mx-auto max-w-screen-xl h-10 px-4 md:px-6 lg:px-8" />
            <div className="mx-auto max-w-screen-xl h-10 px-4 md:px-6 lg:px-8 flex items-center gap-3">
                <a className="text-[10px] md:text-sm hover:underline" href="">{languages.sign}</a>
                <a className="text-[10px] md:text-sm hover:underline" href="">{languages.login}</a>
                <select  
                name="Language"  
                value={language} 
                onChange={(e)=>setLanguage(e.target.value)}
                className="rounded bg-neutral-800 px-2 py-0.5 text-[10px] md:text-sm"
                >
                    <option value="Chinese" >繁體中文</option>
                    <option value="English" >English</option>
                </select>
            </div>
        </div>
    )
}