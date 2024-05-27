"use client";

import MainMenu from "./selections/main-menu";
import OpenDrawer from "./selections/open-drawer";
import Back from "./selections/back";
import Logout from "./selections/logout";

const Actions = () => {
  return (
    <div className="grid grid-cols-3 items-center w-full">
      <MainMenu />
      <OpenDrawer />
      <div>
        <Back />
        <Logout />
      </div>
    </div>
  );
};

export default Actions;
