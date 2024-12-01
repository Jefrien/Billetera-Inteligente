import NavDrawer from "../../components/global/NavDrawer/NavDrawer";
import NavBar from "../../components/global/NavBar/NavBar";

export default function AppLayout({children}) {
    return (
        <div>
            <NavDrawer/>
            <div className="lg:pl-64">
                <NavBar />
                {children}
            </div>
        </div>
    )
}
