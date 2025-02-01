import axiosInstance from "./axiosInstance";

export const faqList = async () => {
  try {
    const response = await axiosInstance.get(`/faqs/list`);
    return response.data;
  } catch (error) {
    console.error("GET Error:", error);
    throw error;
  }
};
export const teamList = async () => {
  try {
    const response = await axiosInstance.get(`/about/team-members`);
    return response.data;
  } catch (error) {
    console.error("GET Error:", error);
    throw error;
  }
};
