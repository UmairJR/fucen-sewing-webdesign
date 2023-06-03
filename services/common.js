import axiosClient from "../helper/AxiosInstance";

export const getHeaderFooter = async () => {
    try {
      const res = await axiosClient().get("header-footer-content");
      const { data } = res;
      return data;
    } catch (error) {
      console.log(error);
    }
};

export const getStaticPage = async (catId) => {
  try {
    const res = await axiosClient().get(`static-page${catId}`);
    const { data } = res;
    return data;
  } catch (error) {
    console.log(error);
  }
};

