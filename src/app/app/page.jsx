import { Card, Typography, CardBody } from "./../../components/material";
import IncomesWidget from "./components/IncomesWidget";
import MainChart from "./components/MainChart";
import CategoriesWidget from "./categorias/CategoriesWidget";

export default function App() {
  const chartValues = [
    {
      label: "Necesidades 50%",
      value: 70,
      valueAlt: 50,
      color: "bg-blue-600",
    },
    {
      label: "Deseos 30%",
      value: 20,
      valueAlt: 30,
      color: "bg-amber-700",
    },
    {
      label: "Ahorros 20%",
      value: 30,
      valueAlt: 20,
      color: "bg-red-800",
    },
  ];

  return (
    <div className="p-4 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div>
          <Card>
            <CardBody className="p-4 bg-white dark:bg-big-stone-900">
              <h3 className="text-xl mb-4 text-center font-semibold dark:text-white">
                Grafica 50/30/20
              </h3>
              <p className="mb-4 text-black dark:text-white">
                Divide tus ingresos en tres categorías.
              </p>
              <MainChart data={chartValues} />
            </CardBody>
          </Card>
        </div>

        <CategoriesWidget />

        <IncomesWidget />

        <IncomesWidget />
      </div>
    </div>
  );
}
