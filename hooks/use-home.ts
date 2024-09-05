import { create } from "zustand";

interface HomeState {
  nav: boolean;
  openNav(): void;
  closeNav(): void;
}

export const useHome = create<HomeState>((set) => ({
  nav: false,
  openNav: () => set({ nav: true }),
  closeNav: () => set({ nav: false }),
}));
