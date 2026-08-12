import { Pie, PieChart } from "recharts"

import {
  ChartContainer,
  type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  {
    name: "new",
    value: 62,
    fill: "#f59e0b",
  },
  {
    name: "returning",
    value: 26,
    fill: "#fde68a",
  },
  {
    name: "inactive",
    value: 12,
    fill: "#fef3c7",
  },
]

const chartConfig = {
  new: {
    label: "Progression",
    color: "#FDBF0D",
  },
  returning: {
    label: "Arret",
    color: "#f3e8ff",
  },
   inactive: {
    label: "Reste",
    color: "#f3e8ff",
  }
} satisfies ChartConfig

export function UserDiagrame() {
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