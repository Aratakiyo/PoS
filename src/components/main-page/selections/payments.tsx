"use client";
import { Button } from "react-bootstrap";

const Payments = () => {
  return (
    <div className="grid grid-cols-2 gap-1 m-1 w-full items-center">
      <Button className="justify-start bg-green-400 rounded-xl items-center hover:font-bold hover:bg-green-500 hover:border-black border-4 text-white h-36 text-xl">
        Payments
      </Button>
    </div>
  );
};

export default Payments;
