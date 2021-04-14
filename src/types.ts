export type Product = {
  id: string;
  title: string;
  description: string;
  units: number;
  price: number;
  img?: string | undefined;
  available?: boolean;
  unitsInStock?: number;
};

export type CustomerOwner = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phoneNumber: string;
  city: string;
  zipCode: string;
};

export type Collection = {
  id: number;
  name: string;
  img: string;
  available?: boolean;
};
