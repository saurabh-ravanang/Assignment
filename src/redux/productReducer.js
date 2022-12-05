export const productData = (data = [], action) => {
    switch (action.type) {
        // case "ProductList":
        //     console.log("productlist", action)
        //     return [action.data]

        case "SetProductList":
            console.log("SetProductList", action)
            return [...action.data]

        default:
            return data;
    }
}