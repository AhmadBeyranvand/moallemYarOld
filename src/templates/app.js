import AppSideBar from "../components/pages/app/app_sidebar";
import AppTopBar from "../components/pages/app/app_topbar";

export default function AppTemplate(props) {
    return (
        <div className="flex z-10 p-3 bg-gray-100">

            <AppSideBar />
            <main className="app-main flex flex-col relative bg-white dark:bg-gray-800 lg:w-4/5 md:w-2/3 p-3 max-h-screen--p-3 md:rounded-r-none md:rounded-l-2xl rounded-2xl overflow-y-scroll overflow-x-hidden">
                <AppTopBar />
                <section className="sticky top-0 py-3 px-4 dark:text-white">
                    {props.children}
                </section>
            </main>
        </div>
    )
}