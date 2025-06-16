'use client'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const apartmentData = {
  '1': {
    name: 'apartment 1',
    area: '1200 sqft',
    unitType: 'Type A',
    rooms: 3,
    img: 'https://placehold.co/300x200?text=apartment+1+Detail',
  },
  '2': {
    name: 'apartment 2',
    area: '950 sqft',
    unitType: 'Type B',
    rooms: 2,
    img: 'https://placehold.co/300x200?text=apartment+2+Detail',
  },
  '3': {
    name: 'apartment 3',
    area: '1350 sqft',
    unitType: 'Type C',
    rooms: 4,
    img: 'https://placehold.co/300x200?text=apartment+3+Detail',
  },
};

export default function apartmentDetailPage({ params }) {
  const { tower, floor, apartment } =  React.use(params);
  const router = useRouter();
  const apartmentInfo = apartmentData[apartment];

  if (!apartmentInfo) return <div className="p-6 text-red-500">apartment not found</div>;

  return (
      <AnimatePresence mode="wait">
          <motion.div
            // key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
        <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-100 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold text-orange-800">
            {decodeURIComponent(tower)} / {decodeURIComponent(floor)} / {apartmentInfo.name}
          </h2>
          <Button onClick={() => router.back()} variant="secondary">Back</Button>
        </div>
        <div className=" ">
          <img
            src={apartmentInfo.img}
            alt={apartmentInfo.name}
            className="w-full rounded-xl shadow-lg object-contain"
          />
          <div className="p-6 space-y-2">
            <div className="text-xl font-semibold text-orange-700 capitalize">{apartmentInfo.name}</div>
            <div className="text-gray-600">Area: {apartmentInfo.area}</div>
            <div className="text-gray-600">Unit Type: {apartmentInfo.unitType}</div>
            <div className="text-gray-600">Rooms: {apartmentInfo.rooms}</div>
          </div>
        </div>
      </div>
    </div>
          </motion.div>
      </AnimatePresence>
   
  );
}
