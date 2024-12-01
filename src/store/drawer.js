import { create } from 'zustand'

export const useDrawerStore = create((set) => ({
    isOpen: false,
    openDrawer: () => set((state) => ({ isOpen: true })),
    closeDrawer: () => set((state) => ({ isOpen: false })),
    toggleDrawer: () => set((state) => ({ isOpen: !state.isOpen })),
}))
