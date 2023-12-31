export default function AppTopBar(props) {
    let address = window.location.pathname
    console.log(address)
    return (
        <header className=" focus:px-4 p-3 mb-4 top-0 sticky bg-amber-400 rounded-3xl shadow-sm">

            <nav className="flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <a href="/app" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                            <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                            Home
                        </a>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd"d="m 12.707,14.707 a -1,1 0 0 0 0,-1.414 L 9.414,10 12.707,6.707 A -1,1 0 0 0 11.293,5.293 l -4,4 a -1,1 0 0 0 0,1.414 l 4,4 a -1,1 0 0 0 1.414,0 z"clipRule="evenodd"id="path2" /></svg>
                            <a href="/app" className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Projects</a>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                            <span className="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500">Flowbite</span>
                        </div>
                    </li>
                </ol>
            </nav>

        </header>
    )
}