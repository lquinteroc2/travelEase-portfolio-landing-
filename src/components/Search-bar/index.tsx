"use client"

import { Button } from "@/components/ui/button"
import { MapPinIcon, SearchIcon, UsersIcon } from "lucide-react"
import { useState } from "react"
import { DatePickerWithRange } from "../Data-range-picker"


export function SearchBar() {
  const [searchType, setSearchType] = useState<"destination" | "hotel" | "activity">("destination")

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2 mb-4">
        <Button
          variant={searchType === "destination" ? "default" : "outline"}
          onClick={() => setSearchType("destination")}
          className={searchType === "destination" ? "bg-orange-500 hover:bg-orange-600" : ""}
        >
          Destinations
        </Button>
        <Button
          variant={searchType === "hotel" ? "default" : "outline"}
          onClick={() => setSearchType("hotel")}
          className={searchType === "hotel" ? "bg-orange-500 hover:bg-orange-600" : ""}
        >
          Hotels
        </Button>
        <Button
          variant={searchType === "activity" ? "default" : "outline"}
          onClick={() => setSearchType("activity")}
          className={searchType === "activity" ? "bg-orange-500 hover:bg-orange-600" : ""}
        >
          Activities
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <MapPinIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Where to?"
            className="w-full h-10 pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>

        <div className="md:col-span-2">
          <DatePickerWithRange />
        </div>

        <div className="relative">
          <UsersIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <select className="w-full h-10 pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none">
            <option value="1">1 Traveler</option>
            <option value="2">2 Travelers</option>
            <option value="3">3 Travelers</option>
            <option value="4">4 Travelers</option>
            <option value="5+">5+ Travelers</option>
          </select>
        </div>
      </div>

      <Button className="w-full mt-4 bg-orange-500 hover:bg-orange-600">
        <SearchIcon className="mr-2 h-4 w-4" />
        Search
      </Button>
    </div>
  )
}
