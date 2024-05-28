"use client";

import { transactions } from "@/config/transaction";
import React, { useState } from "react";

export default function Transactions() {
  let i = 1;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = transactions.slice(indexOfFirstItem, indexOfLastItem);

  const pages = [];
  for (let i = 1; i <= Math.ceil(transactions.length / itemsPerPage); i++) {
    pages.push(i);
  }


  

  return (
    <div className="h-2/3 rounded-lg p-3 md:pt-0 overflow-auto text-lg ">
      <table className="w-full h-full border-gray-300 border-2">
        <thead className="h-20 rounded-lg text-left font-bold">
          <tr className="">
            <th className="border-gray-300 border-2 p-1">Transaction No.</th>
            <th className="border-gray-300 border-2 p-1">Date</th>
            <th className="border-gray-300 border-2 p-1">Transaction Type</th>
            <th className="border-gray-300 border-2 p-1">
              Transaction SubType
            </th>
            <th className="border-gray-300 border-2 p-1">Period</th>
            <th className="border-gray-300 border-2 p-1">Amount</th>
            <th className="border-gray-300 border-2 p-1">Balance</th>
            <th className="border-gray-300 border-2 p-1">Adjusted Balance</th>
            <th className="border-gray-300 border-2 p-1">Payment</th>
          </tr>
        </thead>
        <tbody className="">
          {currentItems?.map((transaction) => (
            <tr className="w-full border-b odd:bg-gray-300 py-3 last-of-type:border-none">
              <td className="whitespace-nowrap p-3">
                {transaction.id}
              </td>
              <td className="whitespace-nowrap p-3">22/12/24</td>
              <td className="whitespace-nowrap p-3">
                {transaction.transactionType}
              </td>
              <td className="whitespace-nowrap p-3">-</td>
              <td className="whitespace-nowrap p-3">-</td>
              <td className="whitespace-nowrap p-3">${transaction.amount}</td>
              <td className="whitespace-nowrap p-3">${transaction.balance}</td>
              <td className="whitespace-nowrap p-3">$0.00</td>
              <td className="whitespace-nowrap p-3">$0.00</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-3">
        <button
          onClick={() =>
            setCurrentPage((currentPage) => Math.max(currentPage - 1, 1))
          }
          className="p-3 m-1 bg-gray-300 rounded-xl hover:font-bold hover:bg-gray-400 text-m hover:border-black border-4"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage((currentPage) => currentPage + 1)}
          className="p-3 m-1 bg-gray-300 rounded-xl hover:font-bold hover:bg-gray-400 text-m hover:border-black border-4"
          disabled={
            currentPage === Math.ceil(transactions.length / itemsPerPage)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}
