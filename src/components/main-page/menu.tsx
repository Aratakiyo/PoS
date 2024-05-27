"use client";
import SearchEmployer from "./selections/search-employer";
import MiscPayments from "./selections/misc-payments";
import EmployerTransactions from "./selections/employer-transactions";
import IpPayments from "./selections/ip-payment";

const Menu = () => {
  return (
    <div className="grid grid-cols-2 gap-1 m-1 w-full items-center">
      <SearchEmployer />
      <EmployerTransactions />
      <IpPayments />
      <MiscPayments />
    </div>
  );
};

export default Menu;
