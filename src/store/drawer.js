//import { create } from 'zustand'

/*export const useDrawerStore = create((set) => ({
    isOpen: false,
    openDrawer: () => set((state) => ({ isOpen: true })),
    closeDrawer: () => set((state) => ({ isOpen: false })),
    toggleDrawer: () => set((state) => ({ isOpen: !state.isOpen })),
}))
*/

export const isOpen = false;
export const openDrawer = () => {
    //isOpen = true;
}

export const closeDrawer = () => {
    //isOpen = false;
}

export const toggleDrawer = () => {
    //isOpen = !isOpen;
}
