import axiosClient from "../helper/AxiosInstance"

export const getCompareList = async() => {
    try {
        const res = await axiosClient().get(`compare-product-details`);
        const { data } = res;
        return data
    } catch (error) {
        console.log(error)
    }
}