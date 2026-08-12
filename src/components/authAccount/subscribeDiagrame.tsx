import { Pie, PieChart } from "recharts"

import {
  ChartContainer,
  type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  {
    name: "paid",
    value: 70,
    fill: "#4175FA",
  },
  {
    name: "trial",
    value: 30,
    fill: "#81A4FE",
  }
]

const chartConfig = {
  paid: {
    label: "Progression",
    color: "#4175FA",
  },
  trial: {
    label: "Reste",
    color: "#f3e8ff",
  }
} satisfies ChartConfig

export function SubscribeDiagrame() {
  return (
    <div className="relative w-30 h-30">
      <ChartContainer
        config={chartConfig}
        className="h-full w-full"
      >
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            innerRadius={42}
            outerRadius={52}
            strokeWidth={2}
            stroke="white"
          />
        </PieChart>
      </ChartContainer>

     
    </div>
  )
}