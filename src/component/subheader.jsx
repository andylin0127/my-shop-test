import { HiShoppingCart } from "react-icons/hi";

export default function Subheader(){


function handleSubmit(e) {
  e.preventDefault(); 
}

    return (
        <div className="flex bg-gradient-to-b from-blue-600 via-blue-400 to-blue-200 p-2 items-center">
            <div className="min-w-[30%] text-white text-[clamp(25px,7vw,100px)] flex justify-center ">
                <a href="">牛讚</a>
            </div>
            <div className="flex justify-center min-w-[50%] text-[clamp(15px,1.5vw,20px)] pb-2 ">
                <form className="flex border-2 rounded-3xl flex-1" onSubmit={handleSubmit}>
                    <input className="bg-amber-50 rounded-tl-3xl rounded-bl-3xl w-full" type="text" name="username" />
                    <button className="bg-green-300 rounded-tr-3xl rounded-br-3xl w-30 cursor-pointer" type="submit">送出</button>
                </form>
            </div>
            <div className="min-w-[20%] text-center flex justify-center text-[clamp(20px,5vw,80px)] cursor-pointer" ><HiShoppingCart/></div>
        </div>
    )
}