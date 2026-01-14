interface orderBy {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}
interface products {
  _id: string;
  name: string;
  category: string;
  quantity: number;
}
export type orderType = {
  _id: string;
  orderBy: orderBy;
  products: products[];
  orderStatus: string;
  notes: string;
  createdAt: string;
  updatedAt: string;
};
export type RealOrderType = {
  _id: string;
  orderBy: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  products: {
    productId: string;
    name: string;
    category: string;
    quantity: number;
  }[];
  orderStatus: string;
  createdAt: string;
  updatedAt: string;
  notes: string;
};
