// app/page.js (TowerSim with localStorage persistence)
'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const towers = ['Tower A', 'Tower B', 'Tower C'];
const layouts = [
  {
    id: '1',
    name: 'Layout 1',
    area: '1200 sqft',
    unitType: 'Type A',
    rooms: 3,
    price: '$320,000',
    features: ['Balcony', 'City View', 'Modern Kitchen'],
    floorPlan: 'https://placehold.co/400x200/91e3ff/fff?text=Floorplan+1',
    img: 'https://placehold.co/600x400/6c63ff/fff?text=Layout+1',
  },
  {
    id: '2',
    name: 'Layout 2',
    area: '950 sqft',
    unitType: 'Type B',
    rooms: 2,
    price: '$250,000',
    features: ['Compact Design', 'Eco-friendly Fixtures'],
    floorPlan: 'https://placehold.co/400x200/91e3ff/fff?text=Floorplan+2',
    img: 'https://placehold.co/600x400/6c63ff/fff?text=Layout+2',
  },
  {
    id: '3',
    name: 'Layout 3',
    area: '1350 sqft',
    unitType: 'Type C',
    rooms: 4,
    price: '$390,000',
    features: ['Penthouse', 'Private Terrace', 'Smart Home System'],
    floorPlan: 'https://placehold.co/400x200/91e3ff/fff?text=Floorplan+3',
    img: 'https://placehold.co/600x400/6c63ff/fff?text=Layout+3',
  },
];

export default function TowerSim() {
  const [selectedTower, setSelectedTower] = useState(null);
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [selectedLayout, setSelectedLayout] = useState(null);

  // Load from localStorage on mount
  useEffect(() => {
    const storedTower = localStorage.getItem('towerSim_selectedTower');
    const storedFloor = localStorage.getItem('towerSim_selectedFloor');
    const storedLayout = localStorage.getItem('towerSim_selectedLayout');

    if (storedTower) setSelectedTower(storedTower);
    if (storedFloor) setSelectedFloor(parseInt(storedFloor));
    if (storedLayout) {
      const layoutObj = layouts.find((l) => l.id === storedLayout);
      if (layoutObj) setSelectedLayout(layoutObj);
    }
  }, []);

  // Persist to localStorage
  useEffect(() => {
    if (selectedTower !== null) {
      localStorage.setItem('towerSim_selectedTower', selectedTower);
    }
  }, [selectedTower]);

  useEffect(() => {
    if (selectedFloor !== null) {
      localStorage.setItem('towerSim_selectedFloor', selectedFloor);
    }
  }, [selectedFloor]);

  useEffect(() => {
    if (selectedLayout !== null) {
      localStorage.setItem('towerSim_selectedLayout', selectedLayout.id);
    }
  }, [selectedLayout]);

  const handleBack = () => {
    if (selectedLayout) {
      setSelectedLayout(null);
      localStorage.removeItem('towerSim_selectedLayout');
    } else if (selectedFloor) {
      setSelectedFloor(null);
      localStorage.removeItem('towerSim_selectedFloor');
    } else if (selectedTower) {
      setSelectedTower(null);
      localStorage.removeItem('towerSim_selectedTower');
    }
  };

  const handleReset = () => {
    setSelectedLayout(null);
    setSelectedFloor(null);
    setSelectedTower(null);
    localStorage.removeItem('towerSim_selectedLayout');
    localStorage.removeItem('towerSim_selectedFloor');
    localStorage.removeItem('towerSim_selectedTower');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 p-6 flex items-center justify-center">
      <div className="w-full max-w-5xl">
        <div className="flex justify-between items-center mb-4">
          {(selectedTower || selectedFloor || selectedLayout) && (
            <button
              onClick={handleBack}
              className="bg-white text-indigo-700 font-medium px-4 py-2 rounded shadow hover:bg-indigo-100 transition"
            >
              ← Back
            </button>
          )}
          <button
            onClick={handleReset}
            className="text-sm text-indigo-700 underline hover:text-indigo-900 ml-auto"
          >
            Reset Simulation
          </button>
        </div>

        <AnimatePresence mode="wait">
          {!selectedTower && (
            <motion.div
              key="tower"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center"
            >
              {towers.map((tower) => (
                <button
                  key={tower}
                  onClick={() => setSelectedTower(tower)}
                  className="bg-white rounded-xl shadow-md p-6 w-60 text-center hover:scale-105 transition-all duration-300 text-indigo-800 font-semibold"
                >
                  {tower}
                </button>
              ))}
            </motion.div>
          )}

          {selectedTower && !selectedFloor && (
            <motion.div
              key="floor"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center"
            >
              <h2 className="text-2xl font-bold mb-6 text-indigo-700">{selectedTower} - Select a Floor</h2>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
                {Array.from({ length: 15 }, (_, i) => i + 1).map((floor) => (
                  <button
                    key={floor}
                    onClick={() => setSelectedFloor(floor)}
                    className="bg-white rounded-xl shadow hover:scale-105 transition-transform duration-200 text-center p-4 text-indigo-600"
                  >
                    Floor {floor}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {selectedFloor && !selectedLayout && (
            <motion.div
              key="layouts"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center"
            >
              <h2 className="text-2xl font-bold mb-6 text-indigo-700">{selectedTower} / Floor {selectedFloor} - Layouts</h2>
              <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-6 bg-white/20 p-4 rounded-xl transition-all">
                {layouts.map((layout) => (
                  <div
                    key={layout.id}
                    onClick={() => setSelectedLayout(layout)}
                    className="relative cursor-pointer rounded-xl overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-300 z-10"></div>
                    <motion.img
                      src={layout.img}
                      alt={layout.name}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4 bg-white">
                      <div className="text-lg font-semibold text-indigo-700">{layout.name}</div>
                      <div className="text-sm text-gray-600">Area: {layout.area}</div>
                      <div className="text-sm text-gray-600">Type: {layout.unitType}</div>
                      <div className="text-sm text-gray-600">Rooms: {layout.rooms}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {selectedLayout && (
            <motion.div
              key="details"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="px-4 py-8"
            >
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                <div>
                  <img
                    src={selectedLayout.img}
                    alt={selectedLayout.name}
                    className="w-full rounded-xl shadow-lg object-contain"
                  />
                </div>
                <div className="text-left">
                  <h2 className="text-3xl font-bold text-indigo-800 mb-4">{selectedLayout.name}</h2>
                  <p className="text-lg text-gray-700 mb-2"><strong>Area:</strong> {selectedLayout.area}</p>
                  <p className="text-lg text-gray-700 mb-2"><strong>Type:</strong> {selectedLayout.unitType}</p>
                  <p className="text-lg text-gray-700 mb-2"><strong>Rooms:</strong> {selectedLayout.rooms}</p>
                  <p className="text-lg text-indigo-700 font-semibold mb-4"><strong>Price:</strong> {selectedLayout.price}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-md text-indigo-800 mb-1">Features:</h4>
                    <ul className="list-disc list-inside text-gray-700">
                      {selectedLayout.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold text-md text-indigo-800 mb-1">Floor Plan</h4>
                    <img src={selectedLayout.floorPlan} alt="Floor Plan" className="w-full rounded-lg border shadow-sm" />
                  </div>

                  <div className="flex flex-wrap gap-4 mt-6">
                    <button
                      onClick={handleBack}
                      className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition"
                    >
                      ← Back to Layouts
                    </button>
                    
                    
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
