import { create } from 'zustand'

export const useNewCategoryStore = create((set) => ({
    isNewCategoryOpen: false,
    openDrawer: () => set((state) => ({ isNewCategoryOpen: true })),
    closeDrawer: () => set((state) => ({ isNewCategoryOpen: false })),
    toggleDrawer: () => set((state) => ({ isNewCategoryOpen: !state.isNewCategoryOpen })),
}))
