import React, { createContext, Dispatch, SetStateAction } from "react";

interface Customer {
  name: string;
  number: number;
}

interface CustomerContextProps {
  customer: Customer | null;
  setCustomer: Dispatch<SetStateAction<Customer | null>>;
}

export const CustomerContext = createContext<CustomerContextProps | undefined>(
  undefined
);
