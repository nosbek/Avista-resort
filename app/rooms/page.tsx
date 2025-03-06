'use client'

import { useState } from 'react'
import Image from 'next/image'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

interface Room {
  id: number
  name: string
  description: string
  price: number
  capacity: number
  image: string
  amenities: string[]
}

const rooms: Room[] = [
  {
    id: 1,
    name: "Ocean View Suite",
    description: "Luxurious suite with panoramic ocean views, king-size bed, and private balcony",
    price: 450,
    capacity: 2,
    image: "/images/ocean-suite.jpg",
    amenities: ["Ocean View", "King Bed", "Private Balcony", "Mini Bar", "Room Service"]
  },
  {
    id: 2,
    name: "Family Beach Villa",
    description: "Spacious villa perfect for families, featuring two bedrooms and a living area",
    price: 650,
    capacity: 4,
    image: "/images/family-villa.jpg",
    amenities: ["Beach Access", "2 Bedrooms", "Living Room", "Kitchen", "Private Pool"]
  },
  {
    id: 3,
    name: "Deluxe Garden Room",
    description: "Comfortable room with garden views and modern amenities",
    price: 300,
    capacity: 2,
    image: "/images/garden-room.jpg",
    amenities: ["Garden View", "Queen Bed", "Work Desk", "Coffee Maker", "WiFi"]
  }
]

export default function Rooms() {
  const [checkIn, setCheckIn] = useState<Date | null>(null)
  const [checkOut, setCheckOut] = useState<Date | null>(null)
  const [guests, setGuests] = useState(1)

  const handleBooking = (roomId: number) => {
    // Here you would typically integrate with a booking API
    console.log('Booking room:', roomId, {
      checkIn,
      checkOut,
      guests
    })
    alert('Booking functionality will be implemented with a backend service')
  }

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Book Your Stay</h1>
        
        {/* Search Form */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Check-in Date</label>
              <DatePicker
                selected={checkIn}
                onChange={(date) => setCheckIn(date)}
                className="w-full p-2 border rounded-md"
                minDate={new Date()}
                placeholderText="Select check-in date"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Check-out Date</label>
              <DatePicker
                selected={checkOut}
                onChange={(date) => setCheckOut(date)}
                className="w-full p-2 border rounded-md"
                minDate={checkIn || new Date()}
                placeholderText="Select check-out date"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full p-2 border rounded-md"
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Room Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Amenities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((amenity, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold">${room.price}/night</div>
                  <button
                    onClick={() => handleBooking(room.id)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 