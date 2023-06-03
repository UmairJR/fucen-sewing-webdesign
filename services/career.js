import axiosClient from "../helper/AxiosInstance"

export const getCareerListing = async() => {
    try {
        const res = await axiosClient().get(`open-position`)
        const { data } = res
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getCareerDetails = async(catId) => {
    try {
        const res = await axiosClient().get(`/open-position-detail/${catId}`)
        const { data } = res
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}