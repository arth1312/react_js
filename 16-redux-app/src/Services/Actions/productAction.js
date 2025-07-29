export const addProduct = (data) => {
    return {
        type: "ADD_PRODUCT",
        payload: data
    }
}

export const getAllProducts = () => {
    return {
        type: "GET_ALL_PRODUCTS",
    }
}