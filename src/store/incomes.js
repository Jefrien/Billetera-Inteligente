import { create } from 'zustand'

export const useNewIncomeStore = create((set) => ({
    isNewIncomeOpen: false,
    openDrawer: () => set((state) => ({ isNewIncomeOpen: true })),
    closeDrawer: () => set((state) => ({ isNewIncomeOpen: false })),
    toggleDrawer: () => set((state) => ({ isNewIncomeOpen: !state.isNewIncomeOpen })),
}))
