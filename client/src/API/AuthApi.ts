/** here you can add the auth api */
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface loginType {
  email: string;
  password: string;
}

export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: loginType) => {
      const res = await fetch("http://localhost:7000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Error during loggin");
      return await res.json();
    },
    onSuccess: () => {
      // 🔑 refresh users list after update
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      console.log("error", error);
    },
  });
};
