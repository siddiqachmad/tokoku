import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router';
import Form from '../components/Form'
import NavBar from '../components/NavBar'
import { storeProduct } from '../stores/actions/ProductAction';

export default function Create() {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleAction = (payload)=>{
        dispatch(storeProduct(payload));
        history.push('/');
    }
    return (
        <div>
            <NavBar/>
            <h1>Tambah Data</h1>
            <Form handleAction={handleAction}/>

        </div>
    )
}
