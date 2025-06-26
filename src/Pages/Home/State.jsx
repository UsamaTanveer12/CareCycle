import React, { useState } from 'react'

function State() {
  const [hoveredState, setHoveredState] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const stateNames = {
    'AK': 'Alaska',
    'HI': 'Hawaii',
    'CA': 'California',
    'NV': 'Nevada',
    'OR': 'Oregon',
    'WA': 'Washington',
    'ID': 'Idaho',
    'MT': 'Montana',
    'WY': 'Wyoming',
    'UT': 'Utah',
    'CO': 'Colorado',
    'AZ': 'Arizona',
    'NM': 'New Mexico',
    'ND': 'North Dakota',
    'SD': 'South Dakota',
    'NE': 'Nebraska',
    'KS': 'Kansas',
    'OK': 'Oklahoma',
    'TX': 'Texas',
    'MN': 'Minnesota',
    'IA': 'Iowa',
    'MO': 'Missouri',
    'AR': 'Arkansas',
    'LA': 'Louisiana',
    'WI': 'Wisconsin',
    'IL': 'Illinois',
    'MS': 'Mississippi',
    'AL': 'Alabama',
    'TN': 'Tennessee',
    'KY': 'Kentucky',
    'IN': 'Indiana',
    'OH': 'Ohio',
    'MI': 'Michigan',
    'WV': 'West Virginia',
    'VA': 'Virginia',
    'NC': 'North Carolina',
    'SC': 'South Carolina',
    'GA': 'Georgia',
    'FL': 'Florida',
    'PA': 'Pennsylvania',
    'NY': 'New York',
    'VT': 'Vermont',
    'NH': 'New Hampshire',
    'ME': 'Maine',
    'MA': 'Massachusetts',
    'CT': 'Connecticut',
    'RI': 'Rhode Island',
    'NJ': 'New Jersey',
    'DE': 'Delaware',
    'MD': 'Maryland',
    'DC': 'Washington D.C.'
  }

  const handleMouseEnter = (stateCode, event) => {
    setHoveredState(stateCode)
    setMousePosition({ x: event.clientX, y: event.clientY })
  }

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY })
  }

  const handleMouseLeave = () => {
    setHoveredState(null)
  }

  return (
    <>
      <div className="">
        <div className="container mx-auto px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Among The Top Medical Billing Companies in US</h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-6xl mx-auto">Whether you operate in California, Texas, Florida, New York, or beyond, our billing experts understand your local payer guidelines, Medicaid policies, and commercial insurer requirements. Being among the top medical billing companies in the US, we help providers stay ahead of state-level changes, from pre-auth requirements in Illinois to telehealth billing rules in Arizona so you can focus on patient care, not paperwork.</p>
          </div>
          <div className="flex justify-center relative">
            <div className="w-full max-w-5xl">
              <svg viewBox="0 0 1000 600" className="w-full h-auto">
                <g id="alaska" onMouseEnter={(e) => handleMouseEnter('AK', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M158 458L178 478L198 458L218 478L238 458L258 468L268 488L248 508L228 528L208 518L188 528L168 508L158 488Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="208" y="498" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">AK</text>
                </g>
                <g id="hawaii" className="cursor-pointer" onMouseEnter={(e) => handleMouseEnter('HI', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <circle cx="298" cy="458" r="8" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="hover:fill-[#579db3] transition-colors duration-200"></circle>
                  <circle cx="318" cy="468" r="6" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="hover:fill-[#579db3] transition-colors duration-200"></circle>
                  <circle cx="338" cy="478" r="5" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="hover:fill-[#579db3] transition-colors duration-200"></circle>
                  <text x="318" y="498" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">HI</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('CA', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M80 180L120 160L140 200L160 240L180 280L160 320L140 360L120 400L100 420L80 400L60 360L40 320L60 280L80 240Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="110" y="290" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">CA</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('NV', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M140 200L180 180L200 220L180 280L160 320L140 360L120 340L140 300L160 240Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="160" y="270" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">NV</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('OR', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M80 120L140 100L160 140L140 180L120 160L80 180L60 140Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="110" y="150" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">OR</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('WA', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M80 60L140 40L160 80L140 100L80 120L60 80Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="110" y="80" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">WA</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('ID', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M160 80L200 60L220 100L240 140L220 180L200 220L180 180L160 140Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="190" y="140" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">ID</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('MT', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M220 60L320 40L340 80L320 120L300 160L280 140L260 120L240 100L220 100Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="280" y="100" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">MT</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('WY', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M240 140L320 120L340 160L320 200L300 240L280 220L260 200L240 180Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="290" y="180" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">WY</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('UT', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M200 220L260 200L280 240L260 280L240 320L220 300L200 280Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="240" y="260" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">UT</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('CO', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M280 240L380 220L400 260L380 300L360 340L340 320L320 300L300 280L280 260Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="340" y="280" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">CO</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('AZ', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M220 300L280 280L300 320L280 360L260 400L240 420L220 400L200 360L200 340Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="250" y="360" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">AZ</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('NM', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M300 320L380 300L400 340L380 380L360 420L340 440L320 420L300 380Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="350" y="380" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">NM</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('ND', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M340 80L440 60L460 100L440 140L420 120L400 100L380 80Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="400" y="100" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">ND</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('SD', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M340 160L440 140L460 180L440 220L420 200L400 180L380 160Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="400" y="180" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">SD</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('NE', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M380 220L480 200L500 240L480 280L460 260L440 240L420 220Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="440" y="240" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">NE</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('KS', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M400 260L500 240L520 280L500 320L480 300L460 280L440 260Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="460" y="280" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">KS</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('OK', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M400 340L500 320L540 340L560 360L540 380L520 400L500 380L480 360L460 340Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="480" y="360" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">OK</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('TX', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M360 420L540 380L580 420L600 460L580 500L560 540L540 520L520 500L500 480L480 460L460 440L440 420Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="500" y="460" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">TX</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('MN', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M460 100L540 80L560 120L540 160L520 140L500 120L480 100Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="510" y="120" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">MN</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('IA', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M500 180L580 160L600 200L580 240L560 220L540 200L520 180Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="550" y="200" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">IA</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('MO', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M520 240L600 220L620 260L600 300L580 320L560 300L540 280L520 260Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="570" y="270" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">MO</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('AR', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M540 340L620 320L640 360L620 400L600 380L580 360L560 340Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="590" y="360" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">AR</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('LA', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M560 420L640 400L660 440L640 480L620 460L600 440L580 420Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="610" y="440" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">LA</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('WI', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M560 120L620 100L640 140L620 180L600 160L580 140Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="600" y="140" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">WI</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('IL', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M620 180L680 160L700 200L680 240L660 260L640 240L620 220Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="660" y="210" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">IL</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('MS', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M640 400L700 380L720 420L700 460L680 440L660 420Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="680" y="420" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">MS</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('AL', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M700 380L760 360L780 400L760 440L740 420L720 400Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="750" y="400" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">AL</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('TN', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M640 300L760 280L780 320L760 360L740 340L720 320L700 300Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="710" y="320" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">TN</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('KY', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M640 260L740 240L760 280L740 300L720 280L700 260Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="700" y="270" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">KY</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('IN', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M680 200L740 180L760 220L740 260L720 240L700 220Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="720" y="220" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">IN</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('OH', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M740 180L800 160L820 200L800 240L780 220L760 200Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="780" y="200" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">OH</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('MI', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M720 100L780 80L800 120L780 160L760 140L740 120Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="760" y="120" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">MI</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('WV', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M780 240L840 220L860 260L840 280L820 260L800 240Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="820" y="250" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">WV</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('VA', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M800 280L880 260L900 300L880 320L860 300L840 280Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="850" y="290" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">VA</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('NC', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M800 320L900 300L920 340L900 360L880 340L860 320Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="860" y="330" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">NC</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('SC', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M840 360L900 340L920 380L900 400L880 380L860 360Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="880" y="370" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">SC</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('GA', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M800 400L880 380L900 420L880 460L860 440L840 420Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="860" y="420" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">GA</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('FL', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M840 460L920 440L940 480L920 520L900 500L880 480Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="890" y="480" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">FL</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('PA', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M820 160L880 140L900 180L880 220L860 200L840 180Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="860" y="180" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">PA</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('NY', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M840 100L900 80L920 120L900 160L880 140L860 120Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="880" y="120" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">NY</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('VT', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M900 80L920 60L940 100L920 120L900 100Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="920" y="90" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">VT</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('NH', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M920 100L940 80L960 120L940 140L920 120Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="940" y="110" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">NH</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('ME', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M940 60L980 40L1000 80L980 120L960 100L940 80Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="970" y="80" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">ME</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('MA', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M920 140L980 120L1000 160L980 180L960 160L940 140Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="960" y="150" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">MA</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('CT', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M920 160L960 140L980 180L960 200L940 180Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="950" y="170" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">CT</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('RI', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M960 180L980 160L1000 200L980 220L960 200Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="980" y="190" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">RI</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('NJ', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M900 180L940 160L960 200L940 220L920 200Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="930" y="190" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">NJ</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('DE', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M900 220L920 200L940 240L920 260L900 240Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="920" y="230" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">DE</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('MD', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <path d="M880 220L920 200L940 240L920 260L900 240Z" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></path>
                  <text x="910" y="230" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">MD</text>
                </g>
                <g onMouseEnter={(e) => handleMouseEnter('DC', e)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <circle cx="900" cy="250" r="5" fill="#87CEEB" stroke="#ffffff" strokeWidth="1" className="cursor-pointer hover:fill-[#579db3] transition-colors duration-200"></circle>
                  <text x="900" y="275" textAnchor="middle" className="text-xs font-medium fill-gray-700 pointer-events-none">DC</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tooltip */}
      {hoveredState && (
        <div
          className="fixed z-50 bg-gray-800 text-white px-3 py-2 rounded-md shadow-lg pointer-events-none text-sm font-medium"
          style={{
            left: mousePosition.x + 10,
            top: mousePosition.y - 30,
          }}
        >
          {stateNames[hoveredState]}
        </div>
      )}
    </>
  )
}

export default State