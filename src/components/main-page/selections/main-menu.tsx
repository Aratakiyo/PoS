"use client";
import { Button, Image } from "react-bootstrap";

const MainMenu = () => {
  return (
    <Button className="w-full bg-gray-400 rounded-xl items-center hover:font-bold hover:bg-gray-500 text-white h-32 text-xl text-center hover:border-black border-4">
      <Image />
      Main Menu
    </Button>
  );
};

export default MainMenu;
