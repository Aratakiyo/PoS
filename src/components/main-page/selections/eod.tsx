"use client";
import { Button } from "react-bootstrap";

const EOD = () => {
  return (
    <div className="grid grid-cols-2 gap-1 m-1 w-full items-center">
      <Button className="justify-start bg-gray-400 rounded-xl items-center hover:font-bold hover:bg-gray-500 text-white h-24 text-xl hover:border-black border-4">
        EOD
      </Button>
    </div>
  );
};

export default EOD;