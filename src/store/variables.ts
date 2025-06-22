import gsap from "gsap";
import { create } from "zustand";

interface NavStore {
  isNavOpen: boolean;
  openNav: () => void;
  closeNav: () => void;
  toggleNav: () => void;
}

export const useNavStore = create<NavStore>((set) => ({
  isNavOpen: false,

  openNav: () => {set({ isNavOpen: true });  gsap.fromTo(
    ".mobile",
    { opacity: 0, x: -100 },
    {
      opacity: 1,
      duration: 1,
      x: 0,
      ease: "elastic.out(1, 0.7)",
      stagger: 0.1,
    }
  );
  },
  closeNav: () => set({ isNavOpen: false }),

  toggleNav: () => set((state) => ({ isNavOpen: !state.isNavOpen })),
}));

interface ModalStore {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  toggleModal: () => void;
  resetState: () => void;
}

const createModalStore = () =>
  create<ModalStore>((set) => ({
    isModalOpen: false,
    openModal: () => set({ isModalOpen: true }),
    closeModal: () => set({ isModalOpen: false }),
    toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
    resetState: () => set({ isModalOpen: false }),
  }));

export const useRegisterModal = createModalStore();