import { create } from 'zustand'

export const useNewCategoryStore = create((set) => ({
    isNewCategoryOpen: false,
    isDefaultCategoriesOpen: false,
    openDrawer: () => set((state) => ({ isNewCategoryOpen: true })),
    closeDrawer: () => set((state) => ({ isNewCategoryOpen: false })),
    toggleDrawer: () => set((state) => ({ isNewCategoryOpen: !state.isNewCategoryOpen })),
    openDefaultCategories: () => set((state) => ({ isDefaultCategoriesOpen: true })),
    closeDefaultCategories: () => set((state) => ({ isDefaultCategoriesOpen: false })),
    toggleDefaultCategories: () => set((state) => ({ isDefaultCategoriesOpen: !state.isDefaultCategoriesOpen })),
}))
