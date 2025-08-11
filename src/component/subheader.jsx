import { HiShoppingCart } from "react-icons/hi";

export default function Subheader(){


function handleSubmit(e) {
  e.preventDefault(); 
}

    return (
    <section className=" bg-gradient-to-b from-neutral-900 via-neutral-500 to-neutral-300">
        <div className="flex mx-auto max-w-screen-xl px-4 md:px-6 lg:px-8 py-5 md:py-7 items-center gap-4">
            <a href="" className="px-3 shrink-0 text-white font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl">牛讚</a>
        
            <form onSubmit={handleSubmit} className=" w-full flex text-[10px] rounded-3xl bg-white/95 shadow-sm overflow-hidden">
                <input type="search" placeholder="搜尋商品" className="w-full px-4 py-2 text-slate-800 placeholder:text-slate-400 outline-none" />
                <button type="submit" className=" rounded-r-3xl px-5 py-2 bg-neutral-800 text-white hover:bg-neutral-600 active:scale-95 transition">送出</button>
            </form>
            <a
            href="#cart"
            className="text-neutral-200 hover:text-white px-3"
            aria-label="購物車"
            >
                <HiShoppingCart className=" text-3xl md:text-5xl drop-shadow-sm" />
                {/* 例：數量徽章 */}
                {/* <span className="absolute -top-1 -right-1 rounded-full bg-red-500 text-xs px-1.5 py-0.5">3</span> */}
            </a>
        </div>
    </section>
    )
}