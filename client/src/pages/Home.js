import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Card from '../components/Card';
import NavBar from '../components/NavBar';
import { destroyProduct, fetchingAllDataProduct } from '../stores/actions/ProductAction';

export default function Home() {
    const {products, isLoading} = useSelector(state => state.dataProduct);
    const [dataProducts, setDataProducts] = useState([])
    const dispatch = useDispatch();

    //untuk pindah halaman harus pakai
    const history = useHistory();
    useEffect(() => {
        dispatch(fetchingAllDataProduct())
    }, [])

    useEffect(() => {
        setDataProducts(products)
    }, [products])
    console.log(products);


    const handleDelete = (e,id) =>{
        e.preventDefault()
        Swal.fire({
            title: 'Apakah Anda Ingin Hapus?',
            text: "Kamu Tidak bisa mengembalikan data ini lagi!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(destroyProduct(id))
              Swal.fire(
                'Deleted!',
                'Data kamu telah terhapus.',
                'success'
              )
            }
          })
        
    }

    // const handleAdd = (e)=>{
    //     e.preventDefault()
    //     history.push('/add');
    // }

    const handleEdit=(e,id)=>{
        e.preventDefault();
        history.push(`/product/${id}`)
    }
    if(isLoading) return <h3 style={{display:'flex', justifyContent:'center',marginTop:'20%'}}>Loading...</h3>
    return (
        
        <>
            <NavBar/>
            <h1 className="my-3">Data Product</h1>
            {/* <a className="btn btn-primary" onClick={(e)=>handleAdd(e)}>Tambah</a> */}
            <div style={{display:'flex', flexDirection:"row"}}>
            {
                dataProducts.map(product => <Card product={product} handleDelete={handleDelete} handleEdit={handleEdit}/>)}
                </div>
        </>
    )
}
