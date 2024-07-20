import { create } from "zustand";

export const useNameStore = create<{
    name: string
    setName: (name: string) => void
}>((set) => ({
    name: '',
    setName: (name: string) => set({ name })
}))

