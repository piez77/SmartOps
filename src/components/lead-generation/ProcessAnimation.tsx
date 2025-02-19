import React from 'react';
import { TrendingUp, Users, CheckCircle } from 'lucide-react';

export function ProcessAnimation() {
  return (
    <div className="relative p-8 rounded-xl bg-gradient-to-b from-purple-900/20 to-transparent">
      <div className="flex flex-col items-center gap-8">
        {[
          { icon: TrendingUp, label: "Targeted Advertising" },
          { icon: Users, label: "Lead Nurturing" },
          { icon: CheckCircle, label: "Qualified Leads" }
        ].map((step, index) => (
          <div key={index} className="relative flex items-center gap-4 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="p-4 rounded-full bg-purple-500/10">
              <step.icon className="w-8 h-8 text-purple-400" />
            </div>
            <span className="text-lg text-gray-300">{step.label}</span>
            {index < 2 && (
              <div className="absolute -bottom-8 left-1/2 w-px h-4 bg-gradient-to-b from-purple-400 to-transparent" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}