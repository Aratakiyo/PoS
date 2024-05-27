import { Table } from "react-bootstrap";
import Terminal from "@/components/transaction-page/terminal";
import TransTable from "@/components/transaction-page/table";

export default function transactions() {
  return (
    <main className="h-full w-full">
       <div className="">
          <Terminal />
          <TransTable />
       </div>
    </main>
  );
}
