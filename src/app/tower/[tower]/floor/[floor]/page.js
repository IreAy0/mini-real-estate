'use client'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const apartments = [
  {
    id: '1',
    name: 'apartment 1',
    area: '1200 sqft',
    unitType: 'Type A',
    rooms: 3,
    img: 'https://placehold.co/600x400?text=apartment+1',
  },
  {
    id: '2',
    name: 'apartment 2',
    area: '950 sqft',
    unitType: 'Type B',
    rooms: 2,
    img: 'https://placehold.co/600x400?text=apartment+2',
  },
  {
    id: '3',
    name: 'apartment 3',
    area: '1350 sqft',
    unitType: 'Type C',
    rooms: 4,
    img: 'https://placehold.co/600x400?text=apartment+3',
  },
];

export default function FloorPage({ params }) {
   const router = useRouter();
  const { tower, floor } = React.use(params);
 
  return (
    <AnimatePresence mode="wait">
          <motion.div
            // key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >

 <div className="min-h-screen bg-gradient-to-br from-pink-100 to-yellow-100 p-6 flex flex-col items-center justify-center space-y-6">
      <div className="w-full max-w-6xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold text-pink-800">{decodeURIComponent(tower)} - {decodeURIComponent(floor)} - Choose an apartment</h2>
          <Button onClick={() => router.back()} variant="secondary">Back</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {apartments.map((apartment) => (
            <Card
              key={apartment.id}
              onClick={() => router.push(`/tower/${tower}/floor/${floor}/apartment/${apartment.id}`)}
              className="cursor-pointer hover:shadow-xl transition-all group border border-pink-300 bgwhite hover:bg-pink-50 rounded-2xl active:scale-95"
            >
              <CardContent className="p-4 space-y-2">
                <div className="relative overflow-hidden rounded-xl bg-gray-100 group-hover:bg-pink-100 transition-all duration-300">
                  <img
                    src={apartment.img}
                    alt={apartment.name}
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="font-semibold text-pink-700">{apartment.name}</div>
                <div className="text-sm text-gray-600">Area: {apartment.area}</div>
                <div className="text-sm text-gray-600">Unit: {apartment.unitType}</div>
                <div className="text-sm text-gray-600">Rooms: {apartment.rooms}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
    </motion.div>
      </AnimatePresence>
   
  );
}
