import { create } from 'zustand'

export const useThemeStore = create((set) => ({
    currentTheme: 'light',
    setTheme: (theme) => set((state) => ({ currentTheme: theme })),
}))
