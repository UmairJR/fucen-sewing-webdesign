import axiosClient from "../helper/AxiosInstance"

export const getBecomeRetailerCard = async() => {
    try {
        const res = await axiosClient().get(`become-retailer-card-content`)
        const { data } = res;
        console.log(data);
        return data;
    } catch (error) {
        console.log(error)
    }
}