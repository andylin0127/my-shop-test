import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiLine, SiThreads } from "react-icons/si";


export default function Header(){
    

    return (
        <div className="flex gap-2 text-white bg-green-700 pt-3 pb-2 ">
            <div className="min-w-[50px] text-[clamp(10px,1.5vw,15px)]"><a href="https://andylin0127.github.io/test-git/">製作人簡介</a></div>
            <ul className="flex items-center gap-1.5 min-w-[15px] text-[clamp(10px,1.5vw,15px)]">追蹤我
                <li><a href=""><FaFacebook/></a></li>
                <li><a href=""><FaInstagram/></a></li>
                <li><a href=""><SiLine/></a></li>
                <li><a href=""><SiThreads/></a></li>
            </ul>
            <div className=" flex-1 "></div>
            <button className="text-[clamp(10px,1.5vw,15px)]" >註冊</button>
            <button className="text-[clamp(10px,1.5vw,15px)]">登入</button>
            <select name="language" className="text-[clamp(10px,1.5vw,15px)]">
                <option value="chinese" className="text-black">繁體中文</option>
                <option value="English" className="text-black">English</option>
            </select>

        </div>
    )
}