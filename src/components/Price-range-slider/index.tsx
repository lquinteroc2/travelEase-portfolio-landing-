"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

export function PriceRangeSlider() {
  const [value, setValue] = React.useState([100, 500])

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <span className="text-sm text-muted-foreground">${value[0]}</span>
        <span className="text-sm text-muted-foreground">${value[1]}</span>
      </div>
      <SliderPrimitive.Root
        className="relative flex w-full touch-none select-none items-center"
        value={value}
        onValueChange={setValue}
        max={1000}
        min={0}
        step={10}
      >
        <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
          <SliderPrimitive.Range className="absolute h-full bg-orange-500" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
        <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
      </SliderPrimitive.Root>
    </div>
  )
}
