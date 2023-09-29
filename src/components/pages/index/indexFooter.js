import { CodeFilled, GithubFilled, HeartFilled, InstagramFilled, LinkedinFilled, TwitterSquareFilled } from "@ant-design/icons"
import logo from "../../../assets/images/logo.svg"

export default function IndexFooter() {
    return (

        <div className="w-full mt-3 flex overflow-hidden">
            <footer className="flex flex-col w-11/12 ml-auto bg-gray-800 p-8 rounded-tl-3xl">
                <div className="flex">
                    <div className="w-4/12 group flex-col flex text-gray-400">
                        <a href="/" className="py-2 hover:text-white">سوالات متداول</a>
                        <a href="/" className="py-2 hover:text-white">درباره ما</a>
                        <a href="/" className="py-2 hover:text-white">کد منبع</a>
                        <a href="/" className="py-2 hover:text-white">لوگو و علائم</a>
                    </div>
                    <div className="w-4/12 justify-center flex">
                        <img alt="معلم یار" src={logo} className="w-52 filter contrast-100 grayscale invert" />
                    </div>
                    <div className="w-4/12 group text-white text-center flex flex-col">
                        <p className="text-gray-300 mb-3">ما را در شبکه‌های اجتماعی دنبال کنید</p>
                        <div className="mx-auto">
                            <a className="flex ltr items-center" href="/">
                                <TwitterSquareFilled className="text-2xl"/>
                                <p className="text-sm text-gray-200 mx-2"> @MoallemYar </p>
                            </a>
                            <a className="flex ltr items-center" href="/">
                                <LinkedinFilled className="text-2xl"/>
                                <p className="text-sm text-gray-200 mx-2"> @MoallemYar </p>
                            </a>
                            <a className="flex ltr items-center" href="/">
                                <InstagramFilled className="text-2xl"/>
                                <p className="text-sm text-gray-200 mx-2"> @MoallemYar </p>
                            </a>
                            <a className="flex ltr items-center" href="/">
                                <GithubFilled className="text-2xl"/>
                                <p className="text-sm text-gray-200 mx-2"> @MoallemYar </p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full my-3 text-center flex justify-center group text-violet-100 items-center">
                    طراحی شده با
                    <HeartFilled className="mx-2 text-white" />
                     و
                     <CodeFilled className="text-white mx-2"/>
                     در استودیوی طراحی تسنیم
                </div>
            </footer>
            {/* <img alt="لوگو معلم یار" className="w-1/12 transform  -rotate-90 grayscale filter" src={logo} /> */}
        </div>
    )
}