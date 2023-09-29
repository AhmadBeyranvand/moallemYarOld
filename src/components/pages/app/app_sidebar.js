import { BookOutlined, PlusCircleFilled, PlusCircleOutlined, UserAddOutlined, UsergroupAddOutlined, UserSwitchOutlined } from "@ant-design/icons"
import logo from "../../../assets/images/logoWhite.svg"
import "./app_sidebar.scss"
import NavLink from "./app_sidebar_link"

export default function AppSideBar() {
    return (
        <header className="sticky top-0 flex-col lg:w-1/5 md:w-1/3 bg-indigo-900 rounded-r-2xl shadow-sm hidden md:flex  max-h-screen--p-3">
            {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
            <img src={logo} alt="لوگو معلم یار" className="px-8 py-2" />
            <hr className="my-5 mx-3 border-indigo-500" />
            <nav className="my-3 mx-auto w-full overflow-y-scroll">
                <ul className="">
                    <legend>
                        <BookOutlined />
                        امتحانات
                    </legend>
                    <NavLink to="/ss" icon={<PlusCircleOutlined />}>امتحان جدید</NavLink>
                    <NavLink to="/ss" icon={<BookOutlined />} active>امتحان‌های برگزار شده</NavLink>
                </ul>
                <ul className="">
                    <legend>
                        <UserSwitchOutlined />
                        دانش آموزان
                    </legend>
                    <NavLink to="/ss" icon={<UserAddOutlined />}>افزودن دانش آموز</NavLink>
                    <NavLink to="/ss" icon={<UsergroupAddOutlined />} >مدیریت دانش آموزان</NavLink>
                </ul>
                <ul className="">
                    <legend>امتحانات</legend>
                    <NavLink to="/ss" icon={<PlusCircleFilled />}>امتحان جدید</NavLink>
                    <NavLink to="/ss" icon={<PlusCircleFilled />} >امتحان جدید</NavLink>
                </ul>
                <ul className="">
                    <legend>امتحانات</legend>
                    <NavLink to="/ss" icon={<PlusCircleFilled />}>امتحان جدید</NavLink>
                    <NavLink to="/ss" icon={<PlusCircleFilled />} >امتحان جدید</NavLink>
                </ul>
            </nav>

        </header>
    )
}