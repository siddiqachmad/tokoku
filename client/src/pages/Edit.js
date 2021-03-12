import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router';
import Form from '../components/Form'
import NavBar from '../components/NavBar'
import { fetchingOneDataProduct, updateProduct } from '../stores/actions/ProductAction';

export default function Edit() {
    const {product} = useSelector(state=> state.dataProduct)
    const {id} = useParams();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchingOneDataProduct(id))
    }, [])
    const history = useHistory();

    const handleAction = (payload)=>{
        dispatch(updateProduct(payload,id));
        history.push('/');
    }
    return (
        <div>
            <NavBar/>
            <h1>Edit Data</h1>
            <Form handleAction={handleAction} product={product}/>

        </div>
    )
}
