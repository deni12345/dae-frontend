export type MenuDetail = {
  menus: Menu[];
  host: string;
  store: string;
  endAt: string;
};

export type Menu = {
  category: string;
  items: MenuItem[];
};

export type MenuItem = {
  name: string;
  description: string;
  sizeOptions: SizeOption[];
  basePrice: number;
  image: string;
  category: string;
  rating: number;
  isBestseller: boolean;
  isNew: boolean;
};

export type SizeOption = {
  name: string;
  price: number;
};
