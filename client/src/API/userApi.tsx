import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetAllUsers = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryFn: async () => {
      const res = await fetch("http://localhost:7000/api/users/getAllUsers");
      if (!res.ok) throw new Error("Error getting users data");
      return await res.json();
    },
    queryKey: ["users"],
  });

  return { data, isLoading, isError, error };
};

export const useGetUsersLength = () => {
  return useQuery({
    queryFn: async () => {
      const res = await fetch(
        "http://localhost:7000/api/users/getAllUsers?count=true"
      );
      if (!res.ok) throw new Error("Field to get the count of the products");
      return await res.json();
    },
    queryKey: ["usersLength"],
  });
};

export const useGetSingleUser = (id: string) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: async () => {
      const res = await fetch(`http://localhost:7000/api/users/user/${id}`);
      if (!res.ok) console.log("error fetching");
      if (!res.ok) throw new Error("Error getting user data");
      return await res.json();
    },
    enabled: !!id,
  });
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (formData: FormData) => {
      const res = await fetch("http://localhost:7000/api/auth/register", {
        method: "POST",
        body: formData,
      });

      if (res.ok) console.log("user added successfully");
      if (!res.ok) throw new Error("There was an Error in adding the user");
      return await res.json();
    },
    onSuccess: () => {
      //  refresh users list after create
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};
export const useUpdateUser = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (formData: FormData) => {
      const res = await fetch(`http://localhost:7000/api/users/${id}`, {
        method: "PATCH",
        body: formData,
      });

      if (res.ok) console.log("user added successfully");
      if (!res.ok) throw new Error("There was an Error in adding the user");
      return await res.json();
    },
    onSuccess: () => {
      // 🔑 refresh users list after update
      queryClient.invalidateQueries({ queryKey: ["users", id] });
    },
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`http://localhost:7000/api/users/${id}`, {
        method: "DELETE",
      });

      if (res.ok) console.log("user deleted successfully" + id);
      if (!res.ok)
        throw new Error("There was an Error in deleting the user " + id);
      return await res.json();
    },
    onSuccess: () => {
      // 🔑 refresh users list after delete
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};
