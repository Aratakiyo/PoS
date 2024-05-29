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
  
  const columns = [
    { name: "Transaction No.", sortKey: "transactionNo" },
    { name: "Date", sortKey: "date" },
    { name: "Transaction Type", sortKey: "transactionType" },
    { name: "Transaction SubType", sortKey: "transactionSubType" },
    { name: "Period", sortKey: "period" },
    { name: "Amount", sortKey: "amount" },
    { name: "Balance", sortKey: "balance" },
    { name: "Adjusted Balance", sortKey: "adjustedBalance" },
    { name: "Payment", sortKey: "payment" },
  ];

  return (
    <div className="h-2/3 rounded-lg p-3 md:pt-0 overflow-auto text-lg ">
      <table className="w-full h-full border-gray-300 border-2">
        <thead className="h-20 rounded-lg text-left font-bold">
          <tr>
            {columns.map((column) => (
              <th key={column.sortKey} className="border-gray-300 border-2 p-1">
                {column.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems?.map((transaction) => (
            <tr
              key={transaction.id}
              className="w-full border-b odd:bg-gray-300 py-3 last-of-type:border-none"
            >
              <td className="whitespace-nowrap p-3">{transaction.id}</td>
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
        <div className="p-3 m-1">
          Page
          <input
            type="number"
            min="1"
            max={Math.ceil(transactions.length / itemsPerPage)}
            value={currentPage}
            onChange={(e) => {
              if (e.target.value !== '') {
                const pageNumber = Number(e.target.value);
                if (
                  pageNumber >= 1 &&
                  pageNumber <= Math.ceil(transactions.length / itemsPerPage)
                ) {
                  setCurrentPage(pageNumber);
                }
              }
            }}
            className="mx-2 w-9 text-right border-black border-2 "
          />
          of {Math.ceil(transactions.length / itemsPerPage)}
        </div>
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
