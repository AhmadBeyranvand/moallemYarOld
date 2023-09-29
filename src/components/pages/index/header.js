import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.svg"


export default function IndexHeader() {
    return (
        <header className="p-4 mx-auto h-28 justify-around text-center flex border-b border-gray-200 items-center">
          <img src={logo} alt="لوگو معلم یار" className="h-full p-3" />
          <div className="menuLinkHolder">
            <a href="/">صفحه اصلی</a>
            <a href="/">معرفی</a>
            <a href="/">پلن‌ها</a>
            <a href="/">آموزش کار با سامانه</a>
          </div>
          <div>
            <Link to="/app" className="flex rounded-md bg-amber-400 py-3 px-6 hover:bg-gray-600 hover:text-white">
              +   <pre>  </pre>
              طراحی آزمون
            </Link>
          </div>
        </header>
    )
}