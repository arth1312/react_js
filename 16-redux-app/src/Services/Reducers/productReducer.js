const initalState = {
    products: JSON.parse(localStorage.getItem("products")) || [],
    product: null,
    isLoading: false
}


export const productReducer = (state = initalState, action) => {
    switch(action.type){
        case "ADD_PRODUCT":
            let allData = JSON.parse(localStorage.getItem("products")) || [];
            allData.push(action.payload);
            localStorage.setItem("products", JSON.stringify(allData));
            return {
                ...state,
                products: [...state.products, action.payload]
            };
        
        case "GET_ALL_PRODUCTS": 
            let prods = JSON.parse(localStorage.getItem("products")) || [];
            return {
                ...state,
                products: prods
            }
        default:
            return state;
    }
}