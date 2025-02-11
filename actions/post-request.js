import axiosInstance from "./axiosInstance";

export const contactFormService = async (data) => {
  try {
    const response = await axiosInstance.post("/contact/submit", data);
    return response.data;
  } catch (error) {
    console.error("POST Error:", error);
    throw error;
  }
};
