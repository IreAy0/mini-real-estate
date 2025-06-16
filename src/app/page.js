'use client'
import { useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
// import { Breadcrumb } from '@/components/Breadcrumb';

const towers = ['Tower A', 'Tower B', 'Tower C'];

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-6 flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl">
        {/* <Breadcrumb /> */}
        <h2 className="text-4xl font-bold mb-6 text-center text-purple-700">Select a Tower</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {towers.map((tower) => (
            <Card
              key={tower}
              onClick={() => router.push(`/tower/${encodeURIComponent(tower)}`)}
              className="cursor-pointer hover:shadow-xl transition-all border border-purple-300 bg-white hover:bg-purple-50 rounded-2xl active:scale-95"
            >
              <CardContent className="p-8 text-center text-xl font-semibold text-purple-700">
                {tower}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}