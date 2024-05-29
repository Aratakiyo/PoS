import { purchases } from "@/config/purchase";
import React from "react";

export default function PaymentSummary() {
  const subtotal = purchases.reduce(
    (total, purchase) => total + purchase.total,
    0
  );
  const itemNum = purchases.length;
  const tax = 0.1 * subtotal;
  const total = subtotal + tax;

  return (
    <div className="grid grid-cols-1 border-black border-4 px-4 py-2 my-1 rounded-xl bg-gray-100 text-lg">
      <div className="flex flex-row justify-between py-1">
        <div>Number of items</div>
        <div>{itemNum}</div>
      </div>

      <div className="flex flex-row justify-between py-1 ">
        <div>Subtotal</div>
        <div>${subtotal.toFixed(2)}</div>
      </div>

      <div className="flex flex-row justify-between py-1 ">
        <div>Tax</div>
        <div>${tax.toFixed(2)}</div>
      </div>

      <div className="font-bold flex flex-row justify-between py-1 mb-4">
        <div>Total</div>
        <div>${total.toFixed(2)}</div>
      </div>

      <div className="font-bold flex flex-row justify-between py-1">
        <div>Payment</div>
        <div>$0.00</div>
      </div>

      <div className="font-bold flex flex-row justify-between py-1">
        <div>Balance</div>
        <div>$0.00</div>
      </div>
    </div>
  );
}
