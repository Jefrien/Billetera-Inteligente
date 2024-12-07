import LoaderIcon from "../../../public/icons/loader.svg";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="p-4 md:p-6 w-full h-[90vh] overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6 w-full">
                { Array.from({length: 18}).map((_, index) => (
                <div
                    key={index}
                    className="grid h-full max-h-[400px] min-h-[260px] w-full animate-pulse place-items-center rounded-lg bg-gray-300 dark:bg-big-stone-900"/>
                ))}
            </div>
        </div>
    )
}
