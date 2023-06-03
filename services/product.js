import axiosClient from "../helper/AxiosInstance";

export const getProductDetailsAPI = async (skuId) => {
    try {
        const res = await axiosClient().get(`product-details/${skuId}`);
        const { data } = res;
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getProductFaq = async(skuId) => {
    try {
        const res = await axiosClient().get(`faq-and-legal-info/${skuId}`)
        const { data } = res
        return data
    } catch (error) {
        console.log(error)  
    }
}

