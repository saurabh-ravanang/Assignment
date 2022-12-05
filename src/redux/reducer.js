export const cartData = (data=[], action)=>{
    switch (action.type) {
        case "AddToCart":
            console.log("reducers", action)
            return [action.data, ...data]
        case "RemoveToCart":
            console.log("reducers", action)
            let remainingData = data.filter((ele)=>ele.id!==action.data)
            return [...remainingData]
        case "EmptyCart":
            data = []
            return [...data]
        default:
            return data;
    }
}

