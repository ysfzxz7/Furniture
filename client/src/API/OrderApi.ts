import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDelay } from "../utils/delay";

/**
 * this is func is used to get the length of the orders
 */
export const useGetAllOrdersLength = () => {
  return useQuery({
    queryFn: async () => {
      const res = await fetch(
        "http://localhost:7000/api/orders/getAllOrders?count=true"
      );
      if (!res.ok) throw new Error("Error getting orders data");
      return await res.json();
    },
    queryKey: ["orders", "length"],
  });
};
/**
 * this is func is used to get the length of the orders
 */
export const useGetAllOrderOfUser = (id: string) => {
  return useQuery({
    queryFn: async () => {
      const res = await fetch(
        `http://127.0.0.1:7000/api/orders/getUserOrder/${id}`
      );
      if (!res.ok) throw new Error("Error getting orders data");
      return await res.json();
    },
    queryKey: ["orders", "length"],
  });
};
/**
/**
 * this is func is used to confirm the order
 */
export const ConfirmOrder = () => {
  const queryclient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(
        `http://127.0.0.1:7000/api/orders/confirm/${id}`,
        {
          method: "POST",
        }
      );
      if (!res.ok) throw new Error("Error getting orders data");
      return await res.json();
    },
    mutationKey: ["order"],
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ["orders"] });
    },
  });
};
/**
/**
 * this is func is used to reject the order
 */
export const rejectOrder = () => {
  const queryclient = useQueryClient();
  return useMutation({
    mutationFn: async (id) => {
      const res = await fetch(`http://127.0.0.1:7000/api/orders/reject/${id}`, {
        method: "POST",
      });
      if (!res.ok) throw new Error("Error getting orders data");
      return await res.json();
    },
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ["orders"] });
    },
  });
};
/**
 * this is func is used to get all orders
 */
export const useGetAllOrders = () => {
  return useQuery({
    queryFn: async () => {
      const res = await fetch("http://localhost:7000/api/orders/getAllOrders");
      if (!res.ok) throw new Error("Error getting orders data");
      await useDelay(1000);
      return await res.json();
    },
    queryKey: ["orders"],
  });
};
/**
 * this is func is used to get single order
 */
export const useGetSinglOrders = (id: string) => {
  return useQuery({
    queryKey: ["order", id],
    queryFn: async () => {
      const res = await fetch(`http://localhost:7000/api/orders/${id}`);
      if (!res.ok) throw new Error("Error getting orders data");
      await useDelay(1000);
      return await res.json();
    },
    enabled: !!id,
  });
};
