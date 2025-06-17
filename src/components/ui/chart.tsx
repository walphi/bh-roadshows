"use client"

import { useEffect, useRef } from "react"
import { Chart as ChartJS, ChartData, ChartOptions, registerables } from "chart.js"

// Register all Chart.js components
ChartJS.register(...registerables)

interface ChartProps {
  type: "line" | "bar" | "radar" | "doughnut" | "pie" | "polarArea" | "bubble" | "scatter"
  data: ChartData
  options?: ChartOptions
  width?: number
  height?: number
  className?: string
}

export function Chart({
  type,
  data,
  options,
  width,
  height,
  className,
}: ChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<ChartJS | null>(null)

  useEffect(() => {
    if (!chartRef.current) return

    // Destroy existing chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    // Create new chart instance
    const ctx = chartRef.current.getContext("2d")
    if (ctx) {
      chartInstance.current = new ChartJS(ctx, {
        type,
        data,
        options: {
          responsive: true,
          maintainAspectRatio: true,
          ...options,
        },
      })
    }

    // Cleanup on unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [type, data, options])

  return (
    <canvas
      ref={chartRef}
      width={width}
      height={height}
      className={className}
    />
  )
}
