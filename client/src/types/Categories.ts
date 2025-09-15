export type Category = string;

export interface GetCategoriesResponse {
  success: boolean;
  data: Category[];
  message?: string;
}
