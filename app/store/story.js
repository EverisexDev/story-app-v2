import { create } from 'zustand';

const useStore = create((set) => ({
  imgSize: null,
  setImgSize: (e) =>
    set(() => ({
      imgSize: e,
    })),
}));

export default useStore;
