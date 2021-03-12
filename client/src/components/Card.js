import React from 'react'

export default function Card({product,handleDelete,handleEdit}) {
    return (
        <div key={product.id} className="card" style={{width: "18rem"}}>
                <img src={product.image_url} class="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <a onClick={(e)=>handleEdit(e,product.id)} className="btn btn-primary">Ubah</a>
                    
                </div>
                <div className="card-footer">
                <a onClick={(e)=>handleDelete(e,product.id)} className="btn btn-danger">Hapus</a>
                </div>
            </div>
    )
}

