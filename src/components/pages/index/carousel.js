import { LeftOutlined, PushpinOutlined } from "@ant-design/icons"
import wallpaper from "../../../assets/images/wallpaper.jpg"

export default function IndexCarousel () {
    return (
        <div className="w-full relative overflow-hidden border-bq-2" style={{ height: '155vh' }}>
          <img className="absolute top-52 -left-10 rounded-3xl shadow-img" src={wallpaper} alt="تصویر زمینه" />
          <p className="mr-16 mt-16 text-4xl font-bold max-w-lg">دیگر نیاز نیست زمان خود را صرف طراحی برگه امتحانی کنید!</p>
          <div className="absolute top-20 left-20 rounded-3xl  bg-white p-8 max-w-sm shadow-2xl" style={{ transform: "rotate(-5deg)" }}>
            <div className="absolute -top-5 left-44 bg-white p-4 shadow-xl rounded-xl">
              <PushpinOutlined style={{ fontSize: "18pt" }} />
            </div>
            <p className="text-lg font-thin text-justify my-3">تنها با ۵ مرحله ساده آزمون خود را طراحی کنید و خروجی PDF آن را دریافت کنید. هم‌چنین می‌توانید آزمون خود را به صورت آنلاین برگزار کنید!
            </p>
            <button className="items-center bg-gray-900 text-white hover:text-gray-900 hover:border-gray-900 border-2 hover:bg-white p-3 rounded-2xl mr-auto flex" >همین حالا شروع کنید!
              <LeftOutlined className="p-2 mx-2 bg-orange-500 text-white rounded-full " />
            </button>
          </div>
        </div>
    )
}