import axiosClient from "../helper/AxiosInstance"

export const getSearch = async(searchParams) => {
    try {
        const res = await axiosClient().get(`global-search?${searchParams != '' ? `search=${searchParams}` : ''}`);
        const { data } = res
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getSearchListing = async(searchParams) => {
    try {
        const res = await axiosClient().get(`search-listing?search=${searchParams}`)
        const { data } = res
        return data
    } catch (error) {
        
    }
}