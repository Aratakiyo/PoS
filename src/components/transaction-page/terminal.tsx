import CompletePayment from "./button/complete-payment";

export default function Terminal() {
  return (
    <div className="max-w-full h-1/5 flex rounded-xl bg-sky-950 text-white text-lg">
      <div className="w-1/2 p-5 ">
        <div className="flex items-center pb-2">
          <p className="pr-12">Employer Name:</p>
          <p className="font-bold">PORGHA LTD</p>
        </div>
        <div className="flex items-center pb-2">
          <p className="pr-7">Employer Number:</p>
          <p className="font-bold">a72780</p>
        </div>
        <div className="flex items-center pb-2">
          <p className="pr-7">Employer Address:</p>
          <p className="font-bold">123, ABC Street</p>
        </div>
      </div>
      <form className="flex w-1/2 p-5 space-x-9">
        <div className="w-1/2 h-full  flex flex-col items-center ">
          <div className="flex w-full justify-between pb-4">
            <p>Current Balance:</p>
            <p>$6350.00</p>
          </div>
          <div className="flex flex-col justify-between w-full rounded-xl">
            <div className="flex justify-between pb-3">
              <p className="">Total Payment:</p>
              <input
                type="text"
                name="amount"
                id="payment_amount"
                placeholder="$0.00"
                className="flex p-1 rounded-xl text-right text-black border-2 border-gray-300 responsive-input"
              />
            </div>
            <div className="flex justify-between text-white ">
              <p>New Balance:</p>
              <p>0.00</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-center ">
          <div className="flex flex-col justify-between mb-3"></div>
          <div>
            <div className="flex items-center pb-2">
              <p className="pr-5">Unapplied Amount: </p>
              <p>$0.00</p>
            </div>
            <div className="flex items-center pb-2">
              <p className="pr-11">Applied Amount: </p>
              <p>$0.00</p>
            </div>
            <CompletePayment />
          </div>
        </div>
      </form>
    </div>
  );
}
