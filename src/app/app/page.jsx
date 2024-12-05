import MainChart from "./components/MainChart";

export default function App() {
    return (
        <div className="p-6">
            <div className='grid grid-cols-2 gap-3'>
                <MainChart />
                <MainChart />
            </div>
        </div>
    )
}
