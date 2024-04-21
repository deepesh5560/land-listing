"use client"

import { create } from 'zustand'
const condition = typeof window !== 'undefined';
const limit:any= condition && localStorage.getItem('Limit');
const value = parseInt(limit) || 0;
type Store = {
  count: number
  isloaded:boolean
  inc: () => void
}

const useStore = create<Store>()((set) => ({
  

  count: value,
  isloaded: false,
  inc: () => set((state) => {
    localStorage.setItem('Limit', `${state.count + 1}`)
   return { count: state.count + 1, isloaded: true}
  }),
}))

export default useStore;