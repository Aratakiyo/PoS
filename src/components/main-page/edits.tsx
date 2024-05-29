"use client";

import EditLine from "./selections/edit-line";
import EditTransaction from "./selections/edit-transaction";


const Edits = () => {
  return (
    <div className="grid grid-cols-2 gap-1 m-1 w-full items-center">
        <EditLine />
        <EditTransaction />
    </div>
  );
};

export default Edits;