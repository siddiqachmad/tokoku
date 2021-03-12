import axios from "axios";

const baseURL = 'http://localhost:3000/products';

export const startFetchingData = ()=>{
    return {
        type: "START_FETCHING_DATA"
    }
}
export const fetchingDataProduct = (payload) => {
    return {
        type: "FETCHING_ALL_DATA_PRODUCT",
        payload
    }
}

export const oneDataProduct = (payload) => {
    return {
        type: "FETCHING_ONE_DATA_PRODUCT",
        payload
    }
}
export const fetchingAllDataProduct = ()=>{
    return async(dispatch)=>{
        dispatch(startFetchingData())
        const {data} = await axios.get(baseURL);

        dispatch(fetchingDataProduct(data))
    }
}

export const fetchingOneDataProduct = (id) =>{
    return async (dispatch) =>{
        try {
            dispatch(startFetchingData());
            const {data} = await axios.get(`${baseURL}/${id}`)
            dispatch(oneDataProduct(data))
        } catch (error) {
            console.log(error);
        }
    }
}

export const destroyProduct = (id)=>{
    
    return async(dispatch,getState) => {
        dispatch(startFetchingData())
        const {data} = await axios.delete(`${baseURL}/${id}`);
        const {dataProduct} = getState();

        const newProduct = dataProduct.products.filter(product => product.id !== data.id);
        dispatch(fetchingDataProduct(newProduct))

        
    }
}

export const storeProduct = (payload)=>{
    return async(dispatch,getState) =>{
        try {
            const {data} = await axios.post(baseURL,payload);
            const {dataProduct} = getState();

            const newProducts = dataProduct.products.concat(data);

            dispatch(fetchingDataProduct(newProducts))
        } catch (error) {
            console.log(error);
        }
    }
}


export const updateProduct = (payload,id)=>{
    return async(dispatch,getState) =>{
        try {
            const {data} = await axios.put(`${baseURL}/${id}`,payload);
            const {dataProduct} = getState();
            const filterProduct = dataProduct.product.filter(product=> product.id !== id);
        
            const newProducts = filterProduct.concat(data);

            dispatch(fetchingDataProduct(newProducts))
        } catch (error) {
            console.log(error);
        }
    }
}
