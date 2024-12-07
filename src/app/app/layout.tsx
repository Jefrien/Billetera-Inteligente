import NavDrawer from "../../components/global/NavDrawer/NavDrawer";
import NavBar from "../../components/global/NavBar/NavBar"
import {Suspense} from "react";
import Loading from "./loading";
import NewIncomeDrawer from "./ingresos/NewIncome";
import NewCategoryDrawer from "./categorias/Drawers/NewCategoryDrawer";
import DefaultsCategoriesModal from "./categorias/Modals/DefaultsCategoriesModal";

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
                <NewCategoryDrawer />

                <DefaultsCategoriesModal />
            </div>
        </div>
    )
}
