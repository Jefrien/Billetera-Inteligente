import { create } from 'zustand'

export const useLoaderStore = create((set) => ({
    show: false,
    showLoader: () => set((state) => ({ show: true })),
    hideLoader: () => set((state) => ({ show: false })),
}))
