import React from 'react';
import { MapPin, Navigation, Hotel, Building2, Train, Star, CheckCircle } from 'lucide-react';

const HotelSainaMap = () => {
  const hotelInfo = {
    name: "Hotel Saina International",
    fullName: "Hotel Saina International - Near Connaught Place & New Delhi Railway Station",
    address: "2324, Chuna Mandi, Paharganj, Near Imperial Cinema",
    postalCode: "Central Delhi, Delhi - 110055",
    rating: "⭐⭐⭐⭐ (4.1/5)",
    reviews: "Rated 8.2 by Booking.com guests",
    distance: {
      railway: "500 meters (5-7 min walk)",
      connaught: "1.6 km (1 mile)",
      embassy: "9-10 km"
    }
  };

  const destinations = [
    {
      name: "New Delhi Railway Station",
      icon: Train,
      color: "purple",
      distance: "500 meters",
      time: "5-7 min walk",
      details: "Walking distance from hotel",
      mapsLink: "https://www.google.com/maps/dir/Hotel+Saina+International,+2324,+Chuna+Mandi,+Paharganj,+Delhi,+110055/New+Delhi+Railway+Station,+New+Delhi"
    },
    {
      name: "Shivaji Stadium Metro Station",
      address: "Baba Kharak Singh Marg, Connaught Place",
      postalCode: "New Delhi - 110001",
      icon: MapPin,
      color: "green",
      distance: "1.6 km (1 mile)",
      time: "8-12 min by car / 20 min walk",
      details: "Connaught Place area",
      mapsLink: "https://www.google.com/maps/dir/Hotel+Saina+International,+2324,+Chuna+Mandi,+Paharganj,+Delhi,+110055/Shivaji+Stadium+Metro+Station,+Baba+Kharak+Singh+Marg,+Connaught+Place,+New+Delhi,+110001"
    },
    {
      name: "U.S. Embassy",
      address: "Shantipath, Chanakyapuri",
      postalCode: "New Delhi - 110021",
      icon: Building2,
      color: "blue",
      distance: "9-10 km",
      time: "18-25 min by car",
      details: "Diplomatic enclave area",
      mapsLink: "https://www.google.com/maps/dir/Hotel+Saina+International,+2324,+Chuna+Mandi,+Paharganj,+Delhi,+110055/U.S.+Embassy,+Shantipath,+Chanakyapuri,+New+Delhi,+110021"
    }
  ];

  const features = [
    "Free WiFi & Parking",
    "24-Hour Room Service",
    "Free Airport Shuttle",
    "Family Rooms Available",
    "Restaurant & Cafe",
    "Tour Desk",
    "Currency Exchange",
    "Terrace"
  ];

  const nearbyAttractions = [
    { 
      name: "Connaught Place", 
      distance: "1.6 km",
      category: "Shopping & Dining",
      description: "Central Delhi's iconic shopping and business hub",
      time: "8-10 min",
      mapsLink: "https://www.google.com/maps/dir/Hotel+Saina+International,+Paharganj,+Delhi/Connaught+Place,+New+Delhi"
    },
    { 
      name: "Gurudwara Bangla Sahib", 
      distance: "1.9 km",
      category: "Religious",
      description: "Beautiful Sikh temple with golden dome, near Connaught Place",
      time: "10-12 min",
      mapsLink: "https://www.google.com/maps/dir/Hotel+Saina+International,+Paharganj,+Delhi/Gurudwara+Bangla+Sahib,+New+Delhi"
    },
    { 
      name: "Jantar Mantar", 
      distance: "3.3 km",
      category: "Historical",
      description: "Ancient astronomical observatory from 1724",
      time: "12-15 min",
      mapsLink: "https://www.google.com/maps/dir/Hotel+Saina+International,+Paharganj,+Delhi/Jantar+Mantar,+New+Delhi"
    },
    { 
      name: "India Gate", 
      distance: "4.5 km",
      category: "Monument",
      description: "Iconic war memorial and landmark of Delhi",
      time: "15-20 min",
      mapsLink: "https://www.google.com/maps/dir/Hotel+Saina+International,+Paharganj,+Delhi/India+Gate,+New+Delhi"
    },
    { 
      name: "Red Fort (Lal Qila)", 
      distance: "3.5 km",
      category: "UNESCO Heritage",
      description: "Massive Mughal fort with stunning red sandstone architecture",
      time: "12-15 min",
      mapsLink: "https://www.google.com/maps/dir/Hotel+Saina+International,+Paharganj,+Delhi/Red+Fort,+Chandni+Chowk,+New+Delhi"
    },
    { 
      name: "Jama Masjid", 
      distance: "3.2 km",
      category: "Religious/UNESCO",
      description: "India's largest mosque, Shah Jahan's masterpiece",
      time: "12-15 min",
      mapsLink: "https://www.google.com/maps/dir/Hotel+Saina+International,+Paharganj,+Delhi/Jama+Masjid,+Chandni+Chowk,+New+Delhi"
    },
    { 
      name: "Chandni Chowk", 
      distance: "3.5 km",
      category: "Market/Food",
      description: "Historic Old Delhi market, famous for street food",
      time: "12-15 min",
      mapsLink: "https://www.google.com/maps/dir/Hotel+Saina+International,+Paharganj,+Delhi/Chandni+Chowk,+New+Delhi"
    },
    { 
      name: "Humayun's Tomb", 
      distance: "8 km",
      category: "UNESCO Heritage",
      description: "Beautiful garden tomb, prototype of Taj Mahal",
      time: "20-25 min",
      mapsLink: "https://www.google.com/maps/dir/Hotel+Saina+International,+Paharganj,+Delhi/Humayun+Tomb,+New+Delhi"
    },
    { 
      name: "Qutub Minar", 
      distance: "16 km",
      category: "UNESCO Heritage",
      description: "World's tallest brick minaret at 73 meters",
      time: "35-40 min",
      mapsLink: "https://www.google.com/maps/dir/Hotel+Saina+International,+Paharganj,+Delhi/Qutub+Minar,+Mehrauli,+New+Delhi"
    },
    { 
      name: "Lotus Temple", 
      distance: "15 km",
      category: "Religious/Architecture",
      description: "Stunning lotus-shaped Bahá'í House of Worship",
      time: "30-35 min",
      mapsLink: "https://www.google.com/maps/dir/Hotel+Saina+International,+Paharganj,+Delhi/Lotus+Temple,+New+Delhi"
    },
    { 
      name: "Akshardham Temple", 
      distance: "10.5 km",
      category: "Religious/Cultural",
      description: "Grand Hindu temple complex with cultural exhibits",
      time: "25-30 min",
      mapsLink: "https://www.google.com/maps/dir/Hotel+Saina+International,+Paharganj,+Delhi/Akshardham+Temple,+New+Delhi"
    },
    { 
      name: "Lodhi Gardens", 
      distance: "7 km",
      category: "Park/Historical",
      description: "Beautiful garden with 15th century tombs and monuments",
      time: "18-22 min",
      mapsLink: "https://www.google.com/maps/dir/Hotel+Saina+International,+Paharganj,+Delhi/Lodhi+Garden,+New+Delhi"
    },
    { 
      name: "Rashtrapati Bhavan", 
      distance: "5 km",
      category: "Government/Architecture",
      description: "President's residence, stunning colonial architecture",
      time: "15-18 min",
      mapsLink: "https://www.google.com/maps/dir/Hotel+Saina+International,+Paharganj,+Delhi/Rashtrapati+Bhavan,+New+Delhi"
    },
    { 
      name: "Karol Bagh Market", 
      distance: "1.9 km",
      category: "Shopping",
      description: "Popular shopping area for clothes and accessories",
      time: "10-12 min",
      mapsLink: "https://www.google.com/maps/dir/Hotel+Saina+International,+Paharganj,+Delhi/Karol+Bagh,+New+Delhi"
    },
    { 
      name: "Hazrat Nizamuddin Dargah", 
      distance: "8.5 km",
      category: "Religious/Cultural",
      description: "Famous Sufi shrine with qawwali performances",
      time: "20-25 min",
      mapsLink: "https://www.google.com/maps/dir/Hotel+Saina+International,+Paharganj,+Delhi/Hazrat+Nizamuddin+Dargah,+New+Delhi"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Hotel Header */}
      <div className="bg-white rounded-xl shadow-2xl p-8 mb-6">
        <div className="flex items-start gap-6">
          <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-4 rounded-xl shadow-lg">
            <Hotel className="text-white" size={48} />
          </div>
          
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-1">
                  {hotelInfo.name}
                </h1>
                <p className="text-sm text-gray-600 mb-2">{hotelInfo.fullName}</p>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-lg text-yellow-500">{hotelInfo.rating}</span>
                  <span className="text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full font-semibold">
                    ✅ BOOKED
                  </span>
                </div>
                <p className="text-sm text-gray-600">{hotelInfo.reviews}</p>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-start gap-2">
                <MapPin className="text-purple-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-gray-800 font-medium">{hotelInfo.address}</p>
                  <p className="text-sm text-gray-600">{hotelInfo.postalCode}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h3 className="font-bold text-gray-800 mb-3">Hotel Features:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-gray-700 bg-purple-50 px-3 py-2 rounded-lg">
                <CheckCircle className="text-purple-600 flex-shrink-0" size={16} />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Distance Information */}
      <div className="bg-white rounded-xl shadow-xl p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Navigation className="text-indigo-600" size={28} />
          Distance to Your Destinations
        </h2>
        
        <div className="space-y-4">
          {destinations.map((dest, index) => {
            const Icon = dest.icon;
            return (
              <div key={index} className={`bg-${dest.color}-50 border-2 border-${dest.color}-200 rounded-xl p-5 hover:shadow-lg transition-shadow`}>
                <div className="flex items-start gap-4">
                  <div className={`bg-${dest.color}-100 p-3 rounded-lg`}>
                    <Icon className={`text-${dest.color}-600`} size={32} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold text-${dest.color}-900 mb-1`}>
                      {dest.name}
                    </h3>
                    {dest.address && (
                      <p className="text-sm text-gray-600 mb-1">{dest.address}</p>
                    )}
                    {dest.postalCode && (
                      <p className="text-xs text-gray-500 mb-2">{dest.postalCode}</p>
                    )}
                    
                    <div className="grid md:grid-cols-2 gap-3 mt-3">
                      <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <p className="text-xs text-gray-600 mb-1">Distance:</p>
                        <p className="font-bold text-gray-800 text-lg">{dest.distance}</p>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <p className="text-xs text-gray-600 mb-1">Travel Time:</p>
                        <p className="font-bold text-gray-800 text-lg">{dest.time}</p>
                      </div>
                    </div>
                    
                    <div className="mt-3 flex items-center justify-between">
                      <p className="text-sm text-gray-600 italic">{dest.details}</p>
                      <a
                        href={dest.mapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 bg-${dest.color}-600 text-white px-4 py-2 rounded-lg hover:bg-${dest.color}-700 transition-colors font-semibold text-sm`}
                      >
                        <MapPin size={16} />
                        View Route on Maps
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Summary */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <Train size={32} className="mb-2" />
          <h3 className="font-bold text-lg mb-1">Railway Station</h3>
          <p className="text-2xl font-bold">500m</p>
          <p className="text-sm opacity-90">5-7 min walk</p>
        </div>
        
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg">
          <MapPin size={32} className="mb-2" />
          <h3 className="font-bold text-lg mb-1">Shivaji Stadium</h3>
          <p className="text-2xl font-bold">1.6 km</p>
          <p className="text-sm opacity-90">8-12 min drive</p>
          <a
            href="https://www.google.com/maps/dir/Hotel+Saina+International,+2324,+Chuna+Mandi,+Paharganj,+Delhi,+110055/Shivaji+Stadium+Metro+Station,+Baba+Kharak+Singh+Marg,+Connaught+Place,+New+Delhi,+110001"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-3 bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-3 py-1.5 rounded-lg transition-colors text-xs font-semibold"
          >
            <Navigation size={12} />
            View Route
          </a>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
          <Building2 size={32} className="mb-2" />
          <h3 className="font-bold text-lg mb-1">U.S. Embassy</h3>
          <p className="text-2xl font-bold">9-10 km</p>
          <p className="text-sm opacity-90">18-25 min drive</p>
          <a
            href="https://www.google.com/maps/dir/Hotel+Saina+International,+2324,+Chuna+Mandi,+Paharganj,+Delhi,+110055/U.S.+Embassy,+Shantipath,+Chanakyapuri,+New+Delhi,+110021"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-3 bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-3 py-1.5 rounded-lg transition-colors text-xs font-semibold"
          >
            <Navigation size={12} />
            View Route
          </a>
        </div>
      </div>

      {/* City Attractions */}
      <div className="bg-white rounded-xl shadow-xl p-6 mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Star className="text-yellow-500" size={28} />
          Must-Visit Delhi Attractions
        </h3>
        
        {/* Category Tabs */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">UNESCO Sites (3)</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">Religious (5)</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">Shopping (3)</span>
            <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">Historical (6)</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {nearbyAttractions.map((attraction, idx) => (
            <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 border-2 border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all">
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 mb-1">{attraction.name}</h4>
                  <span className="inline-block px-2 py-0.5 bg-indigo-100 text-indigo-700 text-xs rounded-full font-semibold mb-2">
                    {attraction.category}
                  </span>
                  <p className="text-xs text-gray-600 mb-2">{attraction.description}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-2 border-t border-gray-300">
                <div className="flex items-center gap-3">
                  <div>
                    <p className="text-xs text-gray-500">Distance</p>
                    <p className="font-bold text-indigo-600">{attraction.distance}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Time</p>
                    <p className="font-bold text-gray-700">{attraction.time}</p>
                  </div>
                </div>
                <a
                  href={attraction.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-indigo-600 text-white px-3 py-1.5 rounded-lg hover:bg-indigo-700 transition-colors text-xs font-semibold"
                >
                  <Navigation size={12} />
                  Route
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* UNESCO Heritage Sites Highlight */}
        <div className="mt-6 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-lg p-4">
          <h4 className="font-bold text-purple-900 mb-2 flex items-center gap-2">
            <Star className="text-yellow-500" size={20} />
            UNESCO World Heritage Sites (Must Visit!)
          </h4>
          <div className="grid md:grid-cols-3 gap-3 text-sm">
            <div className="bg-white rounded p-3">
              <p className="font-semibold text-purple-800">🏛️ Red Fort</p>
              <p className="text-xs text-gray-600">Mughal architecture masterpiece</p>
            </div>
            <div className="bg-white rounded p-3">
              <p className="font-semibold text-purple-800">🕌 Humayun's Tomb</p>
              <p className="text-xs text-gray-600">Inspiration for Taj Mahal</p>
            </div>
            <div className="bg-white rounded p-3">
              <p className="font-semibold text-purple-800">🗼 Qutub Minar</p>
              <p className="text-xs text-gray-600">World's tallest brick minaret</p>
            </div>
          </div>
        </div>
      </div>

      {/* Suggested Itineraries */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-xl p-6 mb-6">
        <h3 className="font-bold text-blue-900 mb-4 text-lg">🗓️ Suggested Day-Wise Itineraries:</h3>
        
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
            <h4 className="font-bold text-green-800 mb-2">Day 1: Old Delhi Heritage Tour</h4>
            <div className="text-sm text-gray-700 space-y-1">
              <p>🕐 Morning: <strong>Red Fort</strong> (3.5 km) → <strong>Jama Masjid</strong> (3.2 km)</p>
              <p>🕐 Afternoon: <strong>Chandni Chowk Market</strong> & Lunch at Paranthe Wali Gali</p>
              <p>🕐 Evening: <strong>India Gate</strong> (4.5 km) → Light & Sound show</p>
              <p className="text-xs text-green-700 mt-2">⏱️ Total Time: Full day | All sites within 5 km</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
            <h4 className="font-bold text-purple-800 mb-2">Day 2: New Delhi & UNESCO Sites</h4>
            <div className="text-sm text-gray-700 space-y-1">
              <p>🕐 Morning: <strong>Humayun's Tomb</strong> (8 km) UNESCO Site</p>
              <p>🕐 Afternoon: <strong>Qutub Minar</strong> (16 km) UNESCO Site + Lunch</p>
              <p>🕐 Evening: <strong>Lodhi Gardens</strong> (7 km) → Relaxation</p>
              <p className="text-xs text-purple-700 mt-2">⏱️ Total Time: Full day | Book car/taxi for convenience</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
            <h4 className="font-bold text-orange-800 mb-2">Day 3: Spiritual & Modern Delhi</h4>
            <div className="text-sm text-gray-700 space-y-1">
              <p>🕐 Morning: <strong>Akshardham Temple</strong> (10.5 km) - Arrive by 9 AM</p>
              <p>🕐 Afternoon: <strong>Lotus Temple</strong> (15 km) + <strong>Gurudwara Bangla Sahib</strong> (1.9 km)</p>
              <p>🕐 Evening: <strong>Connaught Place</strong> (1.6 km) → Shopping & Dinner</p>
              <p className="text-xs text-orange-700 mt-2">⏱️ Total Time: Full day | Use metro for quick travel</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-800 mb-2">Half Day: Quick Delhi Tour (4-5 hours)</h4>
            <div className="text-sm text-gray-700 space-y-1">
              <p>🕐 <strong>India Gate</strong> (4.5 km) → <strong>Rashtrapati Bhavan</strong> (5 km) → <strong>Connaught Place</strong> (1.6 km)</p>
              <p className="text-xs text-blue-700 mt-2">⏱️ Perfect for short layovers or limited time</p>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-yellow-50 border border-yellow-300 rounded-lg p-3">
          <p className="text-sm text-gray-700">
            <strong>💡 Pro Tips:</strong> Start early (8 AM), avoid peak hours, book HOHO bus for convenient sightseeing, 
            carry water & sunscreen, dress modestly for religious sites
          </p>
        </div>
      </div>

      {/* Travel Tips */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-300 rounded-xl p-6 mb-6">
        <h3 className="font-bold text-amber-900 mb-4 text-lg">🚗 Travel Tips & Transportation:</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">🚶</span>
              <span><strong>To Railway Station:</strong> Just walk! Only 500 meters away</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">🚕</span>
              <span><strong>To Connaught Place:</strong> Quick 8-12 min drive or 20 min walk</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">🚗</span>
              <span><strong>To Embassy:</strong> Book Uber/Ola (18-25 min)</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">🕐</span>
              <span><strong>Peak Hours:</strong> 8-10 AM & 5-8 PM (add 10-15 min)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">🚇</span>
              <span><strong>Metro Access:</strong> Ramakrishna Ashram Marg Metro (200m away)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">✈️</span>
              <span><strong>Airport:</strong> Free shuttle service available (15 km away)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Food & Shopping Recommendations */}
      <div className="bg-gradient-to-r from-pink-50 to-rose-50 border-2 border-pink-300 rounded-xl p-6 mb-6">
        <h3 className="font-bold text-pink-900 mb-4 text-lg">🍽️ Must-Try Food & Shopping Spots:</h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold text-pink-800 mb-3 flex items-center gap-2">
              🍜 Famous Food Spots
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-gray-700"><strong>Paranthe Wali Gali</strong> (Old Delhi)</span>
                <span className="text-pink-600 text-xs">3.5 km</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-gray-700"><strong>Karim's</strong> (Near Jama Masjid)</span>
                <span className="text-pink-600 text-xs">3.2 km</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-gray-700"><strong>Haldiram's</strong> (Connaught Place)</span>
                <span className="text-pink-600 text-xs">1.6 km</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-gray-700"><strong>Kuremal Mohan Lal</strong> (Stuffed Kulfi)</span>
                <span className="text-pink-600 text-xs">3 km</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700"><strong>Main Bazaar</strong> (Street Food)</span>
                <span className="text-pink-600 text-xs">200m</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold text-pink-800 mb-3 flex items-center gap-2">
              🛍️ Best Shopping Areas
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-gray-700"><strong>Connaught Place</strong> (Brands)</span>
                <span className="text-pink-600 text-xs">1.6 km</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-gray-700"><strong>Chandni Chowk</strong> (Traditional)</span>
                <span className="text-pink-600 text-xs">3.5 km</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-gray-700"><strong>Karol Bagh</strong> (Wholesale)</span>
                <span className="text-pink-600 text-xs">1.9 km</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-gray-700"><strong>Paharganj Market</strong> (Budget)</span>
                <span className="text-pink-600 text-xs">100m</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700"><strong>Dilli Haat</strong> (Handicrafts)</span>
                <span className="text-pink-600 text-xs">4 km</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-rose-50 rounded-lg p-3 border border-rose-200">
          <p className="text-sm text-gray-700">
            <strong>🌶️ Food Tip:</strong> Try Delhi's famous chaat, butter chicken, kebabs, and parathas. 
            Don't miss the street food in Old Delhi (ensure it's from busy, hygienic stalls).
          </p>
        </div>
      </div>

      {/* Why This Hotel */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-6">
        <h3 className="font-bold text-green-900 mb-3 text-lg">🏆 Why Hotel Saina International is Perfect for Exploring Delhi:</h3>
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <div className="bg-white rounded-lg p-3 border-l-4 border-green-500">
            <p className="font-semibold text-green-800 mb-1">✓ Unbeatable Railway Access</p>
            <p className="text-gray-700">Only 500m walk - perfect for arrivals/departures</p>
          </div>
          <div className="bg-white rounded-lg p-3 border-l-4 border-green-500">
            <p className="font-semibold text-green-800 mb-1">✓ Central Location</p>
            <p className="text-gray-700">Close to Connaught Place (1.6 km) - shopping & dining hub</p>
          </div>
          <div className="bg-white rounded-lg p-3 border-l-4 border-green-500">
            <p className="font-semibold text-green-800 mb-1">✓ Great Connectivity</p>
            <p className="text-gray-700">Easy access to all major Delhi attractions</p>
          </div>
          <div className="bg-white rounded-lg p-3 border-l-4 border-green-500">
            <p className="font-semibold text-green-800 mb-1">✓ Family Friendly</p>
            <p className="text-gray-700">Family rooms, safe area, 24-hour services</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelSainaMap;
