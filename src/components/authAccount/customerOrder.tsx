import { RefreshCcw } from "lucide-react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { customerTable } from "@/constantes/Constante";

const CustomerOrder = () => {
  return (
    <Card className="col-span-2">
      <CardTitle className="flex justify-between px-3 py-2">
        <h2>Customer order</h2>
        <RefreshCcw className="hover:-rotate-360 duration-300 ease-in-out transition-all" />
      </CardTitle>
      <CardContent className="my-5">
        <section className="w-full space-y-5">
          <div className="flex justify-around text-neutral-400 text-sm">
            <h3>Profile</h3>
            <h3>Address</h3>
            <h3>Date</h3>
            <h3>Status</h3>
            <h3>Price</h3>
          </div>
          <section className="space-y-5">
            {customerTable.map((item, index) => (
              <div
                key={index}
                className={`${item.bgColor} flex justify-around items-center rounded-full py-2`}
              >
                <div className="flex gap-2 items-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="rounded-full w-6 h-6"
                  />
                  {item.name}
                </div>
                <p>{item.address}</p>
                <p>{item.date}</p>
                <p>{item.status}</p>
                <p>{item.price}</p>
              </div>
            ))}
          </section>
        </section>
      </CardContent>
    </Card>
  );
};

export default CustomerOrder;
