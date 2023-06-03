import axiosClient from "../helper/AxiosInstance"

export const getBankOffer = async(id) => {
    try {
        const res = await axiosClient().get(`/available-product-offer/${id}`)
        const { data } = res;
        console.log(data);
        return data
    } catch(err) {
        console.log(err)
    }
}