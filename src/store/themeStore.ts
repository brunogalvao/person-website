import { create } from "zustand";

type ThemeMode = "light" | "dark" | "system";

interface ThemeState {
  currentTheme: ThemeMode;
  setCurrentTheme: (theme: ThemeMode) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  currentTheme: "system",
  setCurrentTheme: (theme) => set({ currentTheme: theme }),
}));
