import type { JSX } from "react/jsx-runtime";
import { Card, CardContent } from "../ui/card";
export type paidFundProps = {
  icon: JSX.Element;
  diagram: JSX.Element;
  title: string;
  total: string;
  description: string;
};
const PaidFundCard = ({
  description,
  diagram,
  icon,
  title,
  total,
}: paidFundProps) => {
  return (
    <Card className="h-50">
      <CardContent>
        <div className="flex justify-between items-center">
          <div>{icon}</div>
          <div>{diagram}</div>
        </div>
        <div className="leading-loose">
          <h2 className="opacity-60 text-sm">{title}</h2>
          <p className="text-2xl">{total}</p>
          <p className="opacity-60 text-sm">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaidFundCard;
