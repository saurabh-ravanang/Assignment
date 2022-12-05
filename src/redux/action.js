export const addCart = (data)=>{
    console.log("action ", data);
    return{
        type: "AddToCart",
        data
    }
}
export const removeCart = (data)=>{
    console.log("action ", data);
    return{
        type: "RemoveToCart",
        data
    }
}
export const emptyCart = ()=>{
    return{
        type: "EmptyCart"
    }
}