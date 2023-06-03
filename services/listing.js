import axiosClient from "../helper/AxiosInstance";

export const getListingData = async (catId) => {
    try {
      const res = await axiosClient().get(`product-listing/${catId}`);
      const { data } = res;
      return data;
    } catch (error) {
      console.log(error);
    }
};

export const getCategoryOffers = async(catId) => {
  try {
    const res = await axiosClient().get(`available-category-offer/${catId}`)
    const { data } = res
    return data;
  } catch (error) {
    console.log(error)
  }
}

export const getListingBanner = async(catId) => {
  try {
    const res = await axiosClient().get(`plp-page-banner/${catId}`);
    const { data } = res;
    return data;
  } catch (error) {
    console.log(error)
  }
}


export const sortingList = async(skuId, sort) => {
  try {
      const res = await axiosClient().get(`product-listing/${skuId}?sortBy=${sort}`)
      const { data } = res
      return data
  } catch (error) {
      console.log(error)  
  }
}

export const filterAPI = async(catId, sort, filterPrice, filterFamily) => {
  try {
    const res = await axiosClient().get(`product-listing/${ catId }?${ typeof sort == 'string' ? `sortBy=${sort}` : "" }&${ filterFamily && filterFamily.length > 0 ? `filters[family]=${filterFamily.join() }` : ''}&${ filterPrice && filterPrice.length > 0 ? `filters[price]=${filterPrice.join()}` : '' }`)
    const { data } = res
    return data
  } catch (error) {
    console.log(error)
  }
}