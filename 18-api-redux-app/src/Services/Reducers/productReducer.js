const initalState = {
    products: [],
    product: null,
    isLoading: false,
    isError: "",
    isCreated: false
}


export const productReducer = (state = initalState, action) => {
    switch (action.type) {
        case "LOADING":
            return {
                ...state,
                isLoading: true
            }
        case "ADD_PRODUCT_SUC":
            return {
                ...state,
                isCreated: true
            };
        case "ADD_PRODUCT_REJ":
            return {
                ...state,
                isError: action.payload
            };

        case "GET_ALL_PRODUCTS_SUC":
            return {
                ...state,
                products: action.payload,
                isLoading: false,
                isCreated: false,
                isError: ""
            }

        case "GET_ALL_PRODUCTS_REJ":
            return {
                ...state,
                isLoading: false,
                isCreated: false,
                isError: action.payload
            }

        case "DELETE_PRODUCT":
            return {
                ...state,
                // products: alldata
            }

        case "GET_PRODUCT":
            return {
                ...state,
                // product: singleRec
            }

        case "UPDATE_PRODUCT":
            return {
                ...state,
                product: null,
                // products: updatedData
            }
        default:
            return state;
    }
}