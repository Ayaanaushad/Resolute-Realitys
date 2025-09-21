
export enum PackageType {
  SocialMedia = 'Social Media',
  LeadGen = 'Lead Generation',
}

export interface Package {
  title: string;
  price: number;
  priceUnit: string;
  features: string[];
  highlight?: boolean;
  addOn?: {
    price: number;

    description: string;
  };
}
