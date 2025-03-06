'use client'

import { useState } from 'react'
import Image from 'next/image'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

interface MenuItem {
  id: number
  name: string
  description: string
  price: number
  category: string
  image: string
}

const menu: MenuItem[] = [
  {
    id: 1,
    name: "Grilled Sea Bass",
    description: "Fresh sea bass grilled to perfection with herbs and lemon butter sauce",
    price: 38,
    category: "Main Course",
    image: "/images/sea-bass.jpg"
  },
  {
    id: 2,
    name: "Lobster Thermidor",
    description: "Classic lobster dish with rich and creamy sauce",
    price: 45,
    category: "Main Course",
    image: "/images/lobster.jpg"
  },
  {
    id: 3,
    name: "Mediterranean Salad",
    description: "Fresh mixed greens with feta cheese, olives, and house dressing",
    price: 16,
    category: "Starters",
    image: "/images/salad.jpg"
  },
  {
    id: 4,
    name: "Chocolate Soufflé",
    description: "Warm chocolate soufflé served with vanilla ice cream",
    price: 14,
    category: "Desserts",
    image: "/images/souffle.jpg"
  }
]

export default function Restaurant() {
  const [date, setDate] = useState<Date | null>(null)
  const [time, setTime] = useState("")
  const [guests, setGuests] = useState(2)
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", ...new Set(menu.map(item => item.category))]
  
  const filteredMenu = activeCategory === "All" 
    ? menu 
    : menu.filter(item => item.category === activeCategory)

  const handleReservation = () => {
    // Here you would typically integrate with a reservation API
    console.log('Making reservation:', {
      date,
      time,
      guests
    })
    alert('Reservation functionality will be implemented with a backend service')
  }

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Ocean View Restaurant</h1>
          <p className="text-xl text-gray-600">Experience fine dining with a breathtaking view</p>
        </div>

        {/* Reservation Form */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-16">
          <h2 className="text-2xl font-bold mb-6">Make a Reservation</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                className="w-full p-2 border rounded-md"
                minDate={new Date()}
                placeholderText="Select date"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option value="">Select time</option>
                {["18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"].map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full p-2 border rounded-md"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <button
                onClick={handleReservation}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Reserve Table
              </button>
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Our Menu</h2>
          
          {/* Category Filter */}
          <div className="flex justify-center mb-8 space-x-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredMenu.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden flex">
                <div className="relative w-1/3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 w-2/3">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <span className="text-lg font-bold">${item.price}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 