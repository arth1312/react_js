import axios from 'axios';

export const loading = () => {
    return {
        type: "LOADING"
    }
}


export const addProductSUC = () => {
    return {
        type: "ADD_PRODUCT_SUC",
    }
}

export const addProductRej = (err) => {
    return {
        type: "ADD_PRODUCT_REJ",
        payload: err
    }
}



export const getAllProducts = (data) => {
    return {
        type: "GET_ALL_PRODUCTS_SUC",
        payload: data
    }
}
export const getProductsRej = (err) => {
    return {
        type: "GET_ALL_PRODUCTS_REJ",
        payload: err
    }
}

export const deleteProduct = (id) => {
    return {
        type: "DELETE_PRODUCT",
        payload: id
    }
}

export const getProduct = (id) => {
    return {
        type: "GET_PRODUCT",
        payload: id
    }
}

export const updateProduct = (data) => {
    return {
        type: "UPDATE_PRODUCT",
        payload: data
    }
}


// async action
export const getAllProductAsync = () => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            let res = await axios.get('http://localhost:3000/products')
            // console.log(res.data);
            dispatch(getAllProducts(res.data));
        } catch (error) {
            console.log(error);
            dispatch(getProductsRej(error.message))
        }

    }
}

export const addProductAsync = (data) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            let res = await axios.post('http://localhost:3000/products', data)
            // console.log(res);
            dispatch(addProductSUC());
        } catch (error) {
            console.log(error);
            dispatch(addProductRej(error.message))
        }
    }
}