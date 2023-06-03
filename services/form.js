import axiosClient from "../helper/AxiosInstance"

const headers = {
    "Content-Type": "multipart/form-data"
}

export const retailerForm = async (payload) => {
    try {
        const res = await axiosClient().post('add-become-a-reatiler', payload, { headers })
        const { data } = res;
        return data

    } catch (error) {
        console.log(error)
    }
}

export const contactForm = async (payload) => {
    try {
        console.log(payload)
        const res = await axiosClient().post('contactus', payload, { headers })
        const { data } = res;
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const addNewsLetter = async(payload) => {
    try {
        const res = await axiosClient().post(`subscribe-newslatter`, payload, { headers })
        const { data } = res;
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const careerForm = async(payload) => {
    try {
        const res = await axiosClient().post(`submit-open-position-lead`, payload, { headers })
        const { data } = res;
        console.log(data)
        return data;
    } catch (error) {
        
    }
}