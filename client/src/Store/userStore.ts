import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { userType } from "../types/userType";

type userDataType = {
  user: userType | null;
  isAuthenticated: boolean;
  setUser: (user: userType | null) => void;
  clearUser: () => void;
};

export const UserData = create<userDataType>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      setUser: (user) => set({ user, isAuthenticated: true }),
      clearUser: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: "user-storage",
    }
  )
);
