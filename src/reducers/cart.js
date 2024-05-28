export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            // console.log(state);
            const product = state.cartProducts.find(item => item.id === action.payload.id)
            // console.log(product?.quantity);
            return {
                ...state,
                cartProducts: product ? state.cartProducts.map(item => {
                    if (item.id === product.id) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        }
                    }
                    return item
                }) : [...state.cartProducts, { ...action.payload, quantity: 1 }]
            }
        }
        case "REMOVE_PRODUCT_FROM_CART": {
            return {
                ...state,
                cartProducts: state.cartProducts.filter(product => product.id !== action.payload)
            }
        }
        case "MODIFY_CART_PRODUCT_QUANTITY": {
            console.log(action.payload.quantity);
            return {
                ...state,
                cartProducts: state.cartProducts.map(product => {
                    if (product.id === action.payload.id) {
                        return {
                            ...product,
                            quantity: action.payload.quantity
                        }

                    }
                    return product
                })
            }
        }
        case "CLEAR_CART": {
            return {
                ...state,
                cartProducts: []
            }
        }
        default: {
            return state
        }
    }
}