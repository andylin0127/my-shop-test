import { HiShoppingCart } from "react-icons/hi";

export default function Subheader(){


    function handleSubmit(e) {
  e.preventDefault(); 
}

    return (
        <div className="flex bg-gradient-to-b from-green-700 via-green-500 to-green-300 p-2 items-center">
            <div className="min-w-[30%] text-amber-200 text-[clamp(25px,7vw,100px)] flex justify-center ">
                <a href="">牛讚</a>
            </div>
            <div className="flex justify-center min-w-[50%] text-[clamp(15px,1.5vw,20px)] pb-2 ">
                <form className="flex border-2 flex-1" onSubmit={handleSubmit}>
                 <input className="bg-amber-50 w-full" type="text" name="username" />
                 <button className="bg-green-300 w-30" type="submit">送出</button>
                </form>
            </div>
            <div className="min-w-[20%] text-center flex justify-center text-[clamp(20px,5vw,80px)]" ><HiShoppingCart/></div>
        </div>
    )
}