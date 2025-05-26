
export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode; // Optional: for an icon element
}

export interface PackageTier {
  id: string;
  name: string;
  priceStartingFrom: string;
  features: string[];
  highlight?: boolean;
}

export interface CalculableService {
  id: string;
  name: string;
  price: number;
  description?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
