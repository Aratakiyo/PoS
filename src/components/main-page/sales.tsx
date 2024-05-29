interface SalesProps {
  total: number;
}

export default function Sales({ total }: SalesProps) {
  return (
    <div className="flex w-full border-black border-4 font-bold px-4 py-2 text-lg rounded-xl bg-gray-300 justify-between mt-1">
      <div>Sale</div>
      <div className="pr-7">${total.toFixed(2)}</div>
    </div>
  );
}