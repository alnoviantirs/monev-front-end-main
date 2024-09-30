import { create } from "zustand";

export const useAuthStore = create((set) => ({
  auth: null,
  setAuth: (authData) => set({ auth: authData }),
}));
