"use client";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useFormik } from "formik";
import { toast } from "sonner";
import { useRegisterModal } from "../store/variables";
import Button from "./ui/Button";
import * as Yup from "yup";
import InputField from "./ui/InputField";
import TextAreaField from "./ui/TextAreaField";

export const registerValidation = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  gender: Yup.string().oneOf(["Male", "Female"], "Select a gender").required(),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .matches(/^\+?\d{10,14}$/, "Enter a valid phone number"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  location: Yup.string().required("Location is required"),
  expectations: Yup.string().max(500, "Too long"),
});

interface FormValues {
  fullName: string;
  gender: string;
  phoneNumber: string;
  email: string;
  location: string;
  expectations: string;
}

export default function RegisterModal() {
  const { closeModal, isModalOpen } = useRegisterModal();

  const formik = useFormik<FormValues>({
    initialValues: {
      fullName: "",
      gender: "",
      phoneNumber: "",
      email: "",
      location: "",
      expectations: "",
    },
    validationSchema: registerValidation,
    onSubmit: (values) => {
      console.log(values);
      toast.success("Registration successful!");
      closeModal();
      formik.resetForm();
    },
  });

  const handleCloseModal = () => {
    closeModal();
    formik.resetForm();
  };

  return (
    <Dialog
      open={!isModalOpen}
      as="div"
      className="bg-black/30 text-black relative z-[10001] focus:outline-none "
      onClose={closeModal}
    >
      <div className="fixed top-0 left-0 right-0 bottom-0 w-screen py-20 overflow-y-auto bg-black/30 backdrop-blur-[2px]">
        <div className="flex min-h-full items-end justify-center">
          <DialogPanel className="w-full rounded-[10px] myContainer bg-white pt-[18px] pb-11">
            <DialogTitle as="h3" className="font-semibold sm:text-lg ">
              Retreat Registration
            </DialogTitle>

            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-5 mt-4"
            >
              <InputField
                name="fullName"
                label="Full Name*"
                placeholder="Enter your full name"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.fullName
                    ? formik.errors.fullName || null
                    : null
                }
              />

              <div className="flex flex-col">
                <label className="label-class">Gender*</label>
                <div className="flex gap-4">
                  {["Male", "Female"].map((option) => (
                    <label key={option} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="gender"
                        value={option}
                        checked={formik.values.gender === option}
                        onChange={formik.handleChange}
                      />
                      {option}
                    </label>
                  ))}
                </div>
                {formik.touched.gender && formik.errors.gender && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.gender}
                  </p>
                )}
              </div>

              <InputField
                name="phoneNumber"
                label="Phone Number* (WhatsApp)"
                placeholder="e.g. +2348012345678"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.phoneNumber
                    ? formik.errors.phoneNumber || null
                    : null
                }
              />

              <InputField
                name="email"
                label="Email Address*"
                type="email"
                placeholder="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.email ? formik.errors.email || null : null
                }
              />

              <InputField
                name="location"
                label="Which location are you coming from?*"
                placeholder="Enter your location"
                value={formik.values.location}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.location
                    ? formik.errors.location || null
                    : null
                }
              />

              <TextAreaField
                name="expectations"
                label="Any expectations for the retreat?"
                placeholder="State below and we join faith with you that they be met."
                value={formik.values.expectations}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.expectations
                    ? formik.errors.expectations || null
                    : null
                }
              />

              <div className="mt-4 flex justify-center gap-[25px]">
                <Button theme="tetiary" size="sm" onClick={handleCloseModal}>
                  Cancel
                </Button>
                <Button type="submit" size="sm">
                  Register
                </Button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
