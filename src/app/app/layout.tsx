import NavDrawer from "../../components/global/NavDrawer/NavDrawer";
import NavBar from "../../components/global/NavBar/NavBar"
import {Suspense} from "react";
import Loading from "./loading";
import NewIncomeDrawer from "./ingresos/NewIncome";

export default function AppLayout({children}) {
    return (
        <div>
            <NavDrawer/>
            <div className="lg:pl-64 h-screen">
                <NavBar />
                <Suspense fallback={<Loading />}>
                    {children}
                </Suspense>
                <NewIncomeDrawer />
            </div>
        </div>
    )
}
