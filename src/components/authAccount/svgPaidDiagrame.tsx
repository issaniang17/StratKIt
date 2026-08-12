import { Pie, PieChart } from "recharts"

import {
  ChartContainer,
  type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  {
    name: "progress",
    value: 15,
    fill: "var(--color-progress)",
  },
  {
    name: "remaining",
    value: 85,
    fill: "var(--color-remaining)",
  },
]

const chartConfig = {
  progress: {
    label: "Progression",
    color: "#c026d3",
  },
  remaining: {
    label: "Reste",
    color: "#f3e8ff",
  },
} satisfies ChartConfig

export function ProgressPaidChart() {
  return (
    <div className="relative w-18 h-18">
      <ChartContainer
        config={chartConfig}
        className="h-full w-full"
      >
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            innerRadius={22}
            outerRadius={32}
            strokeWidth={2}
            stroke="white"
          />
        </PieChart>
      </ChartContainer>

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-semibold">
          +15%
        </span>
      </div>
    </div>
  )
}