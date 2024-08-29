const NotfoundPage = () => {
    return (
        <div className="flex justify-center items-center w-full h-[100vh] dark:bg-gray-900">
            <section className="">
                <div className="max-w-screen-xl px-8 py-8 mx-auto lg:py-16 lg:px-6">
                    <div className="max-w-screen-lg min-w-[20rem] mx-auto text-center">
                        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 text-[#d5e0fa]">404</h1>
                        <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-[#718395]">Something&apos;s missing.</p>
                        <p className="mb-4 text-lg font-light text-[#dba1b1]">Page not found</p>
                        <a href="/" className="inline-flex text-white bg-[#1e40af] hover:bg-[#2563eb] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NotfoundPage
