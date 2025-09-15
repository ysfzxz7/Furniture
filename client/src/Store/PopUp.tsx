import { create } from "zustand";

type useNotificationType = {
  isvisible: boolean;
  message: string;
  togglePopUp: () => void;
};

const useNotification = create<useNotificationType>((set) => ({
  isvisible: false,
  message: "Hello",
  togglePopUp: () => {
    set(() => ({
      isvisible: false,
    }));
  },
}));

export default useNotification;
