import React from 'react';
import { Code2, Server, Workflow, Database, Network, Cpu } from 'lucide-react';

const elements = [
  { Icon: Code2, className: "top-20 left-[10%] w-16 h-16" },
  { Icon: Database, className: "top-40 right-[15%] w-12 h-12" },
  { Icon: Network, className: "bottom-32 left-[20%] w-14 h-14" },
  { Icon: Server, className: "top-1/3 left-[80%] w-10 h-10" },
  { Icon: Workflow, className: "bottom-20 right-[25%] w-16 h-16" }
];

export function FloatingElements() {
  return (
    <>
      {elements.map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.className} opacity-20 transition-all duration-1000 hover:opacity-40 hover:scale-110`}
          style={{
            animation: `float ${8 + index * 2}s ease-in-out infinite`,
            animationDelay: `${index * 0.5}s`
          }}
        >
          <div className="relative">
            <element.Icon className="text-purple-400" />
            <div className="absolute inset-0 bg-purple-400/20 blur-xl -z-10"></div>
          </div>
        </div>
      ))}
      
      {/* Tech grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-[0.1]"></div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none"></div>
    </>
  );
}