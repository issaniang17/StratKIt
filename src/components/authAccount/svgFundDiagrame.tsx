import { Pie, PieChart } from "recharts"

import {
  ChartContainer,
  type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  {
    name: "progress",
    value: 59,
    fill: "var(--color-progress)",
  },
  {
    name: "remaining",
    value: 41,
    fill: "var(--color-remaining)",
  },
]

const chartConfig = {
  progress: {
    label: "Progression",
    color: "#4DA13F",
  },
  remaining: {
    label: "Reste",
    color: "#BCD7B6",
  },
} satisfies ChartConfig

export function ProgressFundChart() {
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
          +59%
        </span>
      </div>
    </div>
  )
}