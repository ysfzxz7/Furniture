export interface ProductType {
  _id: string; // Unique product ID
  image: string;
  name: string; // Product name
  category: string; // Product category
  quantity: number; // Available stock
  minLevel: number;
  supplier: string; // Supplier name
  status: string; // Could be: "In Stock", "Low Stock", "Out of Stock"
  dateAdded: Date; // Date the product was added
  lastUpdated: Date; // Last update date
  addedBy: string;
  description: string;
}
export interface updateFormType {
  name: string;
  categorie: string;
  quantity: number;
  minLevel: number;
  supplier: string;
  status: string;
  description: string;
  dateAdded: string;
  lastUpdated: string;
  addedBy: string;
  image: FileList;
}
