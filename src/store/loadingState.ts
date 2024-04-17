import create from 'zustand';

const useStore = create((set) => ({
    load: false,
    setLoad: (val:any) => set(() => ({ count: val })),
  }))

export default useStore;