import React from 'react';

const stats = [
  { value: "1,000+", label: "Businesses Trust Us" },
  { value: "10x", label: "Average ROI" },
  { value: "$0", label: "Spent on Ads" }
];

export function Stats() {
  return (
    <div className="py-12 px-6 rounded-2xl bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20">
      <div className="flex flex-wrap justify-center gap-12">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
              {stat.value}
            </div>
            <div className="text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}