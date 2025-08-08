export default function Header(){
    

    return (
        <div className="flex gap-2 bg-red-300 p-3">
            <div><a href="https://andylin0127.github.io/test-git/">製作人簡介</a></div>
            <ul className="flex gap-2">追蹤我
                <li><a href="">Facebook</a></li>
                <li><a href="">Intergram</a></li>
                <li><a href="">Line</a></li>
                <li><a href="">threads</a></li>
            </ul>
            <div className=" mx-70 "></div>
            <div>繁體中文</div>
            <div>註冊</div>
            <div>登入</div>
        </div>
    )
}