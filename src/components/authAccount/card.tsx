import type { JSX } from "react/jsx-runtime";

export type cardProps = {
  title: string;
  total: number;
  percentage: string;
  chevron: JSX.Element;
  icon: JSX.Element;
  chevronColor: string;
};
const CardAccount = ({
  chevron,
  icon,
  percentage,
  title,
  total,
  chevronColor,
}: cardProps) => {
  return (
    <div className="flex px-4 py-5 gap-2 rounded-2xl bg-white justify-around text-black">
      <div className="space-y-1">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-2xl font-semibold">{total}</p>
        <p className={`${chevronColor} flex items-center gap-1`}>
          <span>{chevron}</span>
          <span>{percentage}</span>
          <span className="opacity-60 text-xs text-black">
            since last month
          </span>
        </p>
      </div>
      <div>{icon}</div>
    </div>
  );
};

export default CardAccount;
