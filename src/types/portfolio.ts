export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  industry: string;
  imageUrl: string;
  projectUrl: string;
  logoUrl?: string;
  featured?: boolean;
}
