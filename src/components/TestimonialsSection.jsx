import React from 'react';
import { MessageSquare, Star, Sparkles } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-20 relative bg-[#070b14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Community Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Customer <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">Reviews</span>
          </h2>
        </div>

        {/* Clean Placeholder Framework for Real Reviews */}
        <div className="max-w-2xl mx-auto glass-card rounded-2xl p-10 text-center border border-dashed border-slate-700/80 space-y-4">
          <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mx-auto flex items-center justify-center">
            <MessageSquare className="w-6 h-6" />
          </div>
          
          <div className="flex justify-center gap-1 text-cyan-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-cyan-400 text-cyan-400" />
            ))}
          </div>

          <p className="text-slate-300 italic text-base sm:text-lg font-medium">
            "Real customer experiences will appear here."
          </p>

          <p className="text-slate-500 text-xs">
            We value your honest feedback. Share your car or bike cleaning experience with DR Car Washing on your next visit!
          </p>
        </div>

      </div>
    </section>
  );
}
