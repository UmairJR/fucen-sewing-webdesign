import axiosClient from "../helper/AxiosInstance"

export const getStoreList = async(lat, long, city) => {
    try {
        const res = await axiosClient().get(`/store-locator?lat=${lat}&lng=${long}&city=${city}`)
        const { data } = res;
        return data
    } catch (error) {
        console.log(error)
    }
}