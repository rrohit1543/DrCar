import React from 'react';
import { Car, Bike, Sparkles, ArrowUpRight } from 'lucide-react';

export default function VehicleCategories({ onSelectCategory }) {
  const categories = [
    {
      title: "Hatchbacks",
      startingPrice: "₹249",
      type: "Car",
      image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800",
      description: "Swift, i20, WagonR, Tiago & similar compact cars"
    },
    {
      title: "Sedans",
      startingPrice: "₹299",
      type: "Car",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800",
      description: "City, Verna, Dzire, Slavia & executive sedans"
    },
    {
      title: "SUV / XUV",
      startingPrice: "₹349",
      type: "Car",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
      description: "Creta, Thar, Harrier, Fortuner & crossovers"
    },
    {
      title: "Premium Cars",
      startingPrice: "₹449",
      type: "Car",
      image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800",
      description: "BMW, Mercedes-Benz, Audi, Jaguar luxury vehicles"
    },
    {
      title: "Bikes",
      startingPrice: "₹80",
      type: "Bike",
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800",
      description: "Standard motorcycles & scooters"
    },
    {
      title: "Premium Bikes",
      startingPrice: "₹120",
      type: "Bike",
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=800",
      description: "Royal Enfield, Duke, Ninja & cruiser bikes"
    }
  ];

  return (
    <section className="py-24 relative bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Vehicle Lineup</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            We Wash All <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Vehicle Types</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            From daily commuters to luxury cars and high-capacity motorcycles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const isCar = cat.type === 'Car';
            return (
              <div
                key={idx}
                onClick={() => onSelectCategory(cat.title)}
                className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 shadow-xl"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#090d16]/60 to-transparent"></div>

                <div className="absolute top-4 right-4">
                  <span className="w-8 h-8 rounded-full bg-slate-900/80 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:text-cyan-400 group-hover:border-cyan-500 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {isCar ? <Car className="w-5 h-5 text-cyan-400" /> : <Bike className="w-5 h-5 text-cyan-400" />}
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {cat.title}
                      </h3>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                      From {cat.startingPrice}
                    </span>
                  </div>
                  <p className="text-slate-300 text-xs line-clamp-2">
                    {cat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
