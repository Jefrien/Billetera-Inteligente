export default function _notFound() {
    return (
        <div className="flex h-screen justify-center items-center ">
        <div
            className="flex px-4 flex-col w-full h-full justify-center items-center relative text-black dark:text-white z-10 bg-white/80 dark:bg-black/90 backdrop-blur-md"
        >
            <h1 className="text-4xl text-center md:text-5xl font-bold mb-4">
            404
            </h1>
            <p className="text-2xl mb-8">Página no encontrada</p>
        </div>
        </div>
    );
}
