import React, { useEffect, useState } from 'react'


export default function Form({handleAction,product}) {
    const [inputProduct,setInputProduct] = useState({
        name:'',
        price:'',
        stock:'',
        image_url:'',
        description:''
    });
    useEffect(()=>{
        if(product){
            setInputProduct({
                name:product.name,
                price:product.price,
                stock:product.stock,
                image_url:product.image_url,
                description:product.description
            })
        }
    },[product])
    const handleChange = (e) =>{
        const {name,value} = e.target
        setInputProduct({
            ...inputProduct,
            [name]:value
        })
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        handleAction(inputProduct)
    }
    return (
        <div className="continer">
            <form onSubmit={(e)=>handleSubmit(e)}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Nama Product</label>
                <input type="text" className="form-control" onChange={(e)=>handleChange(e)} value={inputProduct.name} id="name" name="name"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Price</label>
                <input type="number" className="form-control" onChange={(e)=>handleChange(e)} value={inputProduct.price} id="price" name="price"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Stok</label>
                <input type="number" className="form-control" onChange={(e)=>handleChange(e)} value={inputProduct.stock} id="stock" name="stock"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Image URL</label>
                <input type="text" className="form-control" onChange={(e)=>handleChange(e)} value={inputProduct.image_url} id="image_url" name="image_url"/>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
                <textarea className="form-control" onChange={(e)=>handleChange(e)} value={inputProduct.description} id="description" name="description"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    )
}
