"use client";
import { Button } from "react-bootstrap";

const Logout = () => {
  return (
    <Button className="w-1/2 bg-red-400 rounded-xl items-center hover:font-bold hover:bg-red-500 text-white h-32 text-xl text-center hover:border-black border-4">
      Log Out
    </Button>
  );
};

export default Logout;
