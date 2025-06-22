"use client";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useSuccessModal } from "../store/variables";
import Button from "./ui/Button";

export default function SuccessModal() {
  const { closeModal, isModalOpen } = useSuccessModal();

  return (
    <Dialog
      open={isModalOpen}
      as="div"
      className="bg-black/30 text-black relative z-[10001] focus:outline-none "
      onClose={closeModal}
    >
      <div className="fixed top-0 left-0 right-0 bottom-0 w-screen overflow-y-auto bg-black/30 backdrop-blur-[2px]">
        <div className="flex min-h-full items-center justify-center">
          <DialogPanel className="w-full rounded-[10px] mx-auto px-7 sm:px-10 bg-white pt-8 pb-11 max-w-2xl">
            <DialogTitle as="h3" className="font-semibold text-xl text-center ">
              Registration Successful
            </DialogTitle>

            <p className="text-black my-10 text-lg max-w-lg mx-auto text-center">
              We are so glad to have you....
              <br />
              <br />
              Please kindly join the WhatsApp group of the Youth Word & Prayer
              Retreat here for more update on the Retreat
            </p>
            <div onClick={closeModal} className="w-fit mx-auto">
              <Button
                href="https://chat.whatsapp.com/K1Kw7ZSzChuKqXLM23Y1GZ"
                target="_blank"
                size="md"
                className="w-fit mx-auto"
              >
                Join now
              </Button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
