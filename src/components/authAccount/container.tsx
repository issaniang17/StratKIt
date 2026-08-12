import type { ReactNode } from "react"

interface ContainerProps {
    children: ReactNode
}
const Container = ({children}: ContainerProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-2 col-span-2">
        {children}
    </div>
  )
}

export default Container