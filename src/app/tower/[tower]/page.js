'use client'
import { useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import React from 'react';

const floors = Array.from({ length: 15 }, (_, i) => `Floor ${15 - i}`);

export default function TowerPage({ params }) {
  const router = useRouter();
  const { tower } = React.use(params);

  console.log('tower', tower)
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-200 p-6 flex flex-col items-center justify-center space-y-6">
      <div className="w-full max-w-4xl">
       
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold text-purple-800">{decodeURIComponent(tower)} - Select a Floor</h2>
          <Button onClick={() => router.back()} variant="secondary">Back</Button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {floors.map((floor) => (
            <Card
              key={floor}
              onClick={() => router.push(`/tower/${tower}/floor/${floor}`)}
              className="cursor-pointer hover:shadow-lg transition-all bg-white border border-purple-200 hover:bg-purple-50 rounded-xl active:scale-95"
            >
              <CardContent className="p-6 text-center text-purple-700 font-medium">{floor}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}