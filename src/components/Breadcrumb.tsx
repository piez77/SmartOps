import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center gap-2 text-sm">
        <li>
          <Link
            to="/"
            className="flex items-center gap-1 text-brand-charcoal/60 hover:text-brand-purple transition-colors"
            aria-label="Torna alla home"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-brand-charcoal/40" />
            {item.href ? (
              <Link
                to={item.href}
                className="text-brand-charcoal/60 hover:text-brand-purple transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-brand-purple font-medium" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
