"use client";
import Link from "next/link";
import { Button } from "react-bootstrap";

const EmployerTransactions = () => {
  return (
    <Link href="/transactions">
      <Button className="w-full bg-gray-200 p-3 rounded-xl items-center space-x-1 hover:font-bold hover:bg-gray-300 h-32 text-xl text-center hover:border-black border-4">
        Employer Transactions
      </Button>
    </Link>
  );
};

export default EmployerTransactions;
