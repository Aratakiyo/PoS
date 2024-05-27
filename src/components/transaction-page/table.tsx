import { transaction } from "@/config/transaction";

export default function Transactions() {
    let i = 1;

  return (
    <div className="h-2/3 rounded-lg p-2 md:pt-0 overflow-auto">
      <table className="w-full h-full text-gray-900">
        <thead className="h-20 rounded-lg text-left text-sm font-normal">
          <tr className="">
            <th scope="col" className="font-medium">
              Transaction No.
            </th>
            <th scope="col" className="font-medium">
              Date
            </th>
            <th scope="col" className="font-medium">
              Transaction Type
            </th>
            <th scope="col" className="font-medium">
              Transaction SubType
            </th>
            <th scope="col" className="font-medium">
              Period
            </th>
            <th scope="col" className="font-medium">
              Amount
            </th>
            <th scope="col" className="font-medium">
              Balance
            </th>
            <th scope="col" className="font-medium">
              Adjusted Balance
            </th>
            <th scope="col" className="font-medium">
              Payment
            </th>
          </tr>
        </thead>
        <tbody className="">
          {transaction?.map((transaction) => (
            <tr className="w-full border-b odd:bg-gray-100  py-3 text-sm last-of-type:border-none">
              <td className="whitespace-nowrap p3">
                {transaction.transactionType === "Assessment"
                  ? "ASM-" + String(i++)
                  : "EMP-" + String(i++)}
              </td>
              <td className="whitespace-nowrap p3">22/12/2022</td>
              <td className="whitespace-nowrap p3">
                {transaction.transactionType}
              </td>
              <td className="whitespace-nowrap p3">-</td>
              <td className="whitespace-nowrap p3">-</td>
              <td className="whitespace-nowrap p3">${transaction.amount}</td>
              <td className="whitespace-nowrap p3">${transaction.balance}</td>
              <td className="whitespace-nowrap p3">$0.00</td>
              <td className="whitespace-nowrap p3">$0.00</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
