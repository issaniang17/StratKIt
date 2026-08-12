import { cardItem, paidFund, userSubcribe } from "../../constantes/Constante";
import CardAccount from "../../components/authAccount/card";
import UserSubCard from "@/components/authAccount/userSubCard";
import PaidFundCard from "@/components/authAccount/paidFundCard";
import Container from "@/components/authAccount/container";
import SaleDynamic from "@/components/authAccount/saleDynamic";
import OverUser from "@/components/authAccount/overUser";
import CustomerOrder from "@/components/authAccount/customerOrder";

const Analytics = () => {
  return (
    <div className="my-4 grid md:grid-cols-4 md:auto-rows-auto px-3 gap-2">
      <Container>
        {cardItem.map((item, index) => (
          <div key={index}>
            {
              <CardAccount
                chevron={item.chevron}
                chevronColor={item.chevronColor}
                icon={item.icon}
                percentage={item.percentage}
                title={item.title}
                total={item.total}
              />
            }
          </div>
        ))}
      </Container>
      <Container>
        {userSubcribe.map((item, index) => (
          <UserSubCard key={index} {...item} />
        ))}
      </Container>
      <Container>
        <SaleDynamic/>
      </Container>

      <Container>
        {paidFund.map((item, index) => (
          <PaidFundCard key={index} {...item} />
        ))}
      </Container>
      <Container>
        <OverUser/>
      </Container>
      <Container>
        <CustomerOrder/>
      </Container>
    </div>
  );
};

export default Analytics;
