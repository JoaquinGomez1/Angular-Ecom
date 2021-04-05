export type Product = {
  id: string;
  title: string;
  description: string;
  units: number;
  price: number;
  img?: string | undefined;
  available?: boolean;
};
