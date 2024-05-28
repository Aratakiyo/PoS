"use client";

import React, { useState } from "react";
import Customer from "@/components/main-page/customer";
import Menu from "@/components/main-page/menu";
import Actions from "@/components/main-page/actions";
import Edits from "@/components/main-page/edits";
import EOD from "@/components/main-page/selections/eod";
import Payments from "@/components/main-page/selections/payments";
import Tableview from "@/components/main-page/table-view";
import { CustomerContext } from "@/utils/customer-context";

interface Customer {
  name: string;
  number: number;
}

const Home = () => {
  const [customer, setCustomer] = useState<Customer | null>(null);

  return (
    <main className="flex mt-10">
      <div className="left-panel w-1/2 p-1">
        <Tableview />
      </div>
      <div className="right-panel w-1/2 pr-3 p-1">
        <CustomerContext.Provider value={{ customer, setCustomer }}>
          <Customer />
          <Menu />
          <Actions />
          <Edits />
          <EOD />
          <Payments />
        </CustomerContext.Provider>
      </div>
    </main>
  );
};

export default Home;
