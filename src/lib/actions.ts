"use server";

import axios from "axios";

const googleScriptUrl =
  "https://script.google.com/macros/s/AKfycbw2-2FrRN9yG6AHSMsqXq7Hi_0matgqjW_5m_zI6-1f5S3CCt3qd44-EuzcfMQY4-3l/exec";

interface RegistrationData {
  fullName: string;
  gender: string;
  phoneNumber: string;
  email: string;
  location: string;
  expectations: string;
}

export const addRegistration = async (data: RegistrationData) => {
  try {
    const res = await axios.post(googleScriptUrl, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // console.log(res);
    return { successMessage: "Submitted Successfully", data: res.data };
  } catch (error) {
    console.error(error);
    return { errorMessage: "Failed to submit" };
  }
};
