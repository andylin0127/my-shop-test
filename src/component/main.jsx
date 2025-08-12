import PictureAnimation from "./main-picture-animation";
import { useState , useEffect } from "react";

export default function Main(){
    const [productList,setProductList]=useState([]);

    useEffect (()=>{
        fetch(`${import.meta.env.BASE_URL}locales/product.json`)
        .then((res)=>res.json())
        .then(raw => {
      const base = import.meta.env.BASE_URL.replace(/\/$/, "");
      const data = raw.map(p => ({
        ...p,
        // 支援 http(s) 直接網址，也把開頭的 / 移除再接 base
        img: /^https?:\/\//.test(p.img)
          ? p.img
          : `${base}/${p.img.replace(/^\/+/, "")}`,
      }));
      setProductList(data);
    });
    },[]);

    return (
        <>
            <section className="relative mx-[calc(50%-50vw)] w-screen">
                <PictureAnimation/>
            </section>
            <div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {productList.map((product,i)=>(
                    <div key={i} className="rounded-lg border border-neutral-200/40 p-3">
                        <div className="aspect-[3/2] rounded-md">
                            <img src={product.img} alt={product.name || "product image"} className="w-full h-full object-cover" />
                        </div>
                        <div className="mt-2 text-sm font-medium" aria-label="productName">{product.name}</div>
                        <div className="text-sm text-neutral-600" aria-label="productPrice">{product.price}</div>
                    </div>
                    ))}           
                </div>
            </div>
        </>
    );
}