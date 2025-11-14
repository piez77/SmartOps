import React, { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { PortfolioItem } from '../../types/portfolio';

interface PortfolioCardProps extends PortfolioItem {
  index: number;
}

export function PortfolioCard({
  title,
  description,
  industry,
  imageUrl,
  projectUrl,
  index
}: PortfolioCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (window.innerWidth < 768) {
      if (!isExpanded) {
        e.preventDefault();
        setIsExpanded(true);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      window.open(projectUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <article
      className="group relative rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-brand-purple focus-within:ring-offset-2"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
      }}
    >
      <a
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className="block relative aspect-video overflow-hidden focus:outline-none"
        aria-label={`View ${title} website, opens in new window`}
      >
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}

        <img
          src={imageUrl}
          alt={`${title} - ${industry} project`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div
          className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent transition-all duration-300 ${
            isExpanded
              ? 'h-full opacity-100'
              : 'h-0 opacity-0 group-hover:h-full group-hover:opacity-100 md:h-20 md:opacity-100'
          }`}
        >
          <div
            className={`absolute inset-0 flex flex-col justify-end p-6 transition-all duration-300 ${
              isExpanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`}
          >
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-purple-100 text-brand-purple text-xs font-semibold rounded-full mb-3">
                {industry}
              </span>

              <h3 className="text-xl md:text-2xl font-serif-display font-semibold text-white mb-2">
                {title}
              </h3>

              <p
                className={`text-sm text-gray-200 leading-relaxed transition-all duration-300 ${
                  isExpanded
                    ? 'opacity-100 max-h-20'
                    : 'opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20'
                }`}
              >
                {description}
              </p>
            </div>

            <button
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-purple via-purple-600 to-brand-purple bg-size-200 bg-pos-0 hover:bg-pos-100 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-brand-purple/40 hover:scale-102 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-purple"
              onClick={(e) => {
                e.stopPropagation();
                window.open(projectUrl, '_blank', 'noopener,noreferrer');
              }}
            >
              <span>View Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              <ExternalLink className="w-3 h-3 opacity-70" />
            </button>
          </div>

          <div className="md:hidden absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-serif-display font-semibold text-white truncate flex-1">
                {title}
              </h3>
              <button
                className="ml-3 px-4 py-2 bg-brand-purple text-white text-sm rounded-lg font-semibold flex items-center gap-1 hover:bg-purple-600 transition-colors"
                onClick={(e) => {
                  if (!isExpanded) {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsExpanded(true);
                  }
                }}
              >
                <span>View</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </a>

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: title,
          description: description,
          image: imageUrl,
          url: projectUrl,
          genre: industry
        })}
      </script>
    </article>
  );
}
