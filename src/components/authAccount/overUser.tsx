import { Card, CardContent, CardTitle } from "../ui/card";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ChartContainer, type ChartConfig } from "../ui/chart";

const items = [
  { label: "2021", value: null },
  { label: "2022", value: "2022" },
  { label: "2023", value: "2023" },
  { label: "2024", value: "2024" },
  { label: "2025", value: "2025" },
  
];

const chartData = [
  { month: "January", price: 200, money:400},
  { month: "February", price: 150 , money:350},
  { month: "March", price: 210 , money:300},
  { month: "April", price: 200 , money:250},
  { month: "May", price: 300 , money:200},
  { month: "June", price: 205 , money:150},
  { month: "July", price: 200, money:100},
  { month: "August", price: 90 , money:50},
  { month: "September", price: 208 , money:40},
  { month: "October", price: 250 , money:30},
  { month: "November", price: 280 , money:20},
  { month: "December", price: 350 , money:0},
]
const chartConfig = {
  price: {
    label: "Price",
    color: "var(--chart-7)",
  }
} satisfies ChartConfig

const OverUser = () => {
  return (
    <Card className="col-span-2">
      <CardTitle className="flex justify-around">
        <h2>Over All User Activity</h2>
        <Select items={items}>
          <SelectTrigger className="w-full max-w-25">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              
              {items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </CardTitle>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-50 w-full">
      <LineChart accessibilityLayer data={chartData} margin={{
        left:12,
        right:12
      }} >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
        dataKey='money'
        tickLine={false}
        tickMargin={10}
        axisLine={false}
        
        />
        <Line dataKey="price" type='natural' strokeWidth={2} stroke="var(--color-price)" dot={false}  />
        
      </LineChart>
    </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default OverUser;
