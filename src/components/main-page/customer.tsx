
import React from "react";
import { CustomerContext } from "@/utils/customer-context";

const Customer = () => {
  const context = React.useContext(CustomerContext);

  if (!context) {
    throw new Error('Customer must be used within a CustomerProvider');
  }

  const { customer } = context;

  const renderCustomerInfo = () => (
    <div className="text-lg font-bold">
      <p>Customer Name: {customer?.name}</p>
      <p>Customer Number: {customer?.number}</p>
    </div>
  );

  const renderBalanceInfo = () => (
    <div className="text-lg mx-auto flex h-15 max-w-6xl items-center justify-between space-x-4 px-4 sm:space-x-20">
      <div>
        <p> Amount Presently Due </p>
        <p> Current Payment Plan Balance </p>
        <p className="font-bold"> Total Outstanding Balance </p>
      </div>
      <div>
        <p> $0.00 </p>
        <p> $0.00 </p>
        <p className="font-bold"> $0.00 </p>
      </div>
    </div>
  );

  return (
    <div className="border-black border-4 bg-gray-100 p-8 rounded-xl w-full ">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between space-x-2 px-4 sm:space-x-20">
        {renderCustomerInfo()}
      </div>
      <br />
      {renderBalanceInfo()}
    </div>
  );
};

export default Customer;