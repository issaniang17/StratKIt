import type { JSX } from "react/jsx-runtime";
import { Card, CardContent } from "../ui/card";

export type cardUserProps = {
  title: string;
  total: string;
  description: string;
  diagram: JSX.Element;
  percentag1: string;
  percentag2: string;
  percentag3?: string;
  percentag1Color: string;
  percentag2Color: string;
  percentag3Color?: string;
};

const UserSubCard = ({
  title,
  total,
  description,
  diagram,
  percentag1,
  percentag2,
  percentag3,
  percentag1Color,
  percentag2Color,
  percentag3Color,
}: cardUserProps) => {
  return (
    <Card>
      <CardContent>
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="font-semibold text-2xl">{total}</p>
          <p className="opacity-60 text-sm">{description}</p>
        </div>
        <div className="flex justify-around mt-3 items-center">
          <div className="space-y-2">
            <p className="text-[10px] items-center flex gap-2">
              <span
                className={`w-6 h-4 inline-block rounded-full`}
                style={{backgroundColor: `${percentag1Color}`}}
              ></span>{" "}
              {percentag1}
            </p>
            <p className="text-[10px]  items-center flex gap-2">
              <span
                className={`w-6 h-4 inline-block rounded-full  bg-[${percentag2Color}]`}
                style={{backgroundColor: `${percentag2Color}`}}
              ></span>{" "}
              {percentag2}
            </p>
            <p className="text-[10px]  items-center flex gap-2">
              {" "}
              <span
                className={`w-6 h-4 rounded-full   bg-[${percentag3Color}]`}
                style={{backgroundColor: `${percentag3Color}`}}
              ></span>{" "}
              {percentag3}
            </p>
          </div>
          <div>{diagram}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserSubCard;
