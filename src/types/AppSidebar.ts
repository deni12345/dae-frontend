export type MenuItem = {
  title: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  onClick?: () => void;
};

export type AppSidebarGroup = {
  title: string;
  items: MenuItem[];
};
