import create from 'zustand'

export const useStore = create(set => ({
    productList: [],
    setData:(data) => set(() => ({data:data})),
    setItemId: (id) => set(() => ({itemId:id})),
    addProduct: (product) => addProductList(set,product),
    removeProduct: (product) => removeProduct(set,product),
    setProductList: (productList) => set(() => ({productList:productList})),
})) 


const addProductList = (set,product) => {
    set((state) => {
        const shoppingCart = state.productList;
        const isProductRepeated = shoppingCart.find((cartItem) => product.id === cartItem.id)

        if(isProductRepeated){
            return {productList:shoppingCart.map((cartItem) => (
               cartItem.id === product.id 
               ? {...cartItem,amount:cartItem.amount + 1}
               : cartItem
            ))}
        }

        return {productList:[...state.productList,{...product,amount:1}]}
    })
}

const removeProduct = (set,product) => {
    set((state) => {
        const shoppingCart = state.productList;
        if(product.amount === 1) {
            return shoppingCart.filter((cartItem) => cartItem.id !== product.id)
        } 
        const productReturned = shoppingCart.filter((cartItem) => cartItem.id !== product.id)
        return {productList:[{...product,amount:product.amount - 1},...productReturned]}
    })
}