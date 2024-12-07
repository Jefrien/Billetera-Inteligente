import { Card, Typography, CardBody } from "../../../components/material";

export default function Categories() {
  const TABLE_HEAD = ["Titulo"];

  return (
    <div className="p-6">
      <Typography variant="h3" className="mb-4">
        Categorias
      </Typography>

      <Card className="h-full w-full">
        <CardBody className="bg-white dark:bg-big-stone-900 h-full p-0 rounded-md overflow-hidden">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 dark:bg-big-stone-900 dark:text-white dark:border-big-stone-700 p-4"
                  >
                    <Typography
                      variant="small"
                      className="font-semibold leading-none opacity-70 "
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}
