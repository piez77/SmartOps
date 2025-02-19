import React from 'react';

export function ParticleBackground() {
  return (
    <>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100%,#4f46e580,transparent)] opacity-30" />
      </div>
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-purple-400/20 rounded-full animate-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 5}s`
          }}
        />
      ))}
    </>
  );
}