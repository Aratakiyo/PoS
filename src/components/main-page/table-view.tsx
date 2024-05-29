"use client";

import { Table } from "react-bootstrap";
import Sales from "./sales";
import PaymentSummary from "./payment-summary";
import { purchases } from "@/config/purchase";

interface Purchase {
  item: string;
  quantity: number;
  unit: string;
  total: number;
}

const Tableview = () => {
  const total = purchases.reduce((acc, purchase) => acc + purchase.total, 0);

  return (
    <div className="m-1 md:pt-0 w-full h-full">
      <div className="border-4 border-black  overflow-y-auto" style={{ maxHeight: "800px" }}>
        <Table className="min-w-full md:table h-full overflow-auto">
          <thead className="sticky top-0 z-10 ">
            <tr className="bg-gray-400 rounded-xl text-left text-lg">
              <th className="pl-4 w-3/6">Item</th>
              <th className="w-1/6">Quantity</th>
              <th className="w-2/6">Unit</th>
              <th className="w-1/6 pr-20">Total</th>
            </tr>
          </thead>
          <tbody className="bg-gray-200 text-left text-lg">
            {purchases.map((purchase: Purchase) => (
              <tr key={purchase.item} className="border-y-2 border-black odd:bg-gray-100 ">
                <td className=" whitespace-nowrap p-3 overflow-hidden max-w-1 text-ellipsis">
                  {purchase.item}
                </td>
                <td className="whitespace-nowrap p-3">{purchase.quantity}</td>
                <td className="whitespace-nowrap p-3">{purchase.unit}</td>
                <td className="whitespace-nowrap p-3">${purchase.total.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Sales total={total} />
      <PaymentSummary />
    </div>
  );
};

export default Tableview;
