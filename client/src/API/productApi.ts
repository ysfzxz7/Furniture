import type { Category, GetCategoriesResponse } from "../types/Categories";
import type { ProductType } from "../types/productType";
import { useDelay } from "../utils/delay";

export const fetchAllProducts = async () => {
  const res = await fetch("http://localhost:7000/api/product/getAllProducts");
  await useDelay(1000);
  if (!res.ok) throw new Error("Failed to fetch products");
  return await res.json();
};

/**
 * getDistinctCategories - @async fetch func to get all distinc categories
 * @returns return a list of all available categories
 */

export const getSingleProduct = async (id: string): Promise<ProductType> => {
  const res = await fetch(
    `http://localhost:7000/api/product/getSingleProduct/${id}`
  );
  if (!res.ok) throw new Error("Failed to get product");
  const json: any = await res.json();
  return json.data;
};

/**
 * get the length of the products
 */

export const getProductsCount = async () => {
  const res = await fetch(
    "http://localhost:7000/api/product/getAllProducts?count=true"
  );
  if (!res.ok) throw new Error("Field to get the count of the products");
  return await res.json();
};

/**
 * getDistinctCategories - @async fetch func to get all distinc categories
 * @returns return a list of all available categories
 */

export const getDistinctCategories = async (): Promise<Category[]> => {
  const res = await fetch(
    "http://localhost:7000/api/product/getDistinctCategories"
  );
  if (!res.ok) throw new Error("Failed to get categories");

  const json: GetCategoriesResponse = await res.json();
  return json.data;
};

/**
 * Delete - @async a func to delete a given product
 * @returns return a success message
 */

export const deleteProduct = async (id: string): Promise<string> => {
  const res = await fetch(
    `http://localhost:7000/api/product/deleteProduct/${id}`,
    {
      method: "DELETE",
    }
  );
  await useDelay(2000);
  if (!res.ok) throw new Error("Failed to delete Product");

  const json = await res.json();
  return json.data;
};

/**
 *
 * update the product data
 */
export const updateProduct = async (formData: any, id: string) => {
  const res = await fetch(
    `http://localhost:7000/api/product/updateProduct/${id}`,
    {
      method: "PATCH",
      body: formData,
    }
  );
  if (!res.ok) throw new Error("Field to update data");
  return await res.json();
};
