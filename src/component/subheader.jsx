

export default function Subheader(){


    function handleSubmit(e) {
  e.preventDefault(); 
}

    return (
        <div className="flex bg-orange-200 p-6 items-center">
            <div className="mr-10 text-6xl px-35"><a href="">牛讚</a></div>
            <form className="flex border-2 " onSubmit={handleSubmit}>
                <input className="bg-amber-50 w-full" type="text" name="username" />
                <button className="bg-blue-300 w-30" type="submit">送出</button>
            </form>
        </div>
    )
}