import axiosClient from "../helper/AxiosInstance";

export const getHomePage = async () => {
    try {
      const res = await axiosClient().get("getBanner");
      const { data } = res;
      return data;
    } catch (error) {
      console.log(error);
    }
};

export const fetchSkus = async () => {
  try {
    const res = await axiosClient().get("fetch-skus");
    const { data } = res;
    return data;
  } catch (error) {
    console.log(error);
  }
};
  
export const getHomeOffer = async () => {
  try {
    const res = await axiosClient().get("home-page-offers");
    const { data } = res;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductCategoriesText = async() => {
  try {
    const res = await axiosClient().get("product-category-left-content")
    const { data } = res
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getHomeHeadings = async() => {
  try {
    const res = await axiosClient().get(`homepage-heading`)
    const { data } = res
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}
  