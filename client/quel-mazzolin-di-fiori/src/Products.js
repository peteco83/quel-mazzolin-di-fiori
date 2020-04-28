import React, {useState, useEffect} from 'react'
// import {Route, Link} from 'react-router-dom'

const Products = (props) => {
    const [products, setProducts] = useState([])
    const [input, setInput] = useState("")
    console.log(props);

    const getData = () => {
        fetch("http://localhost:4000/products")
        .then(res => res.json())
        .then(product => {
            setProducts(product.products)
            console.log(product);
        })
    }

    useEffect(() => {
        getData()
    },[])

    return (
        <div>  
            <div className="container-products">
                <ul>
                    {products.length > 0 ? products.map((product, i) => (
                        <div key ={i}>
                            <img src={product.img} alt={product.name} width="300" height = "200"/>
                            <li>{product.type}</li>
                            <li>{product.name}</li>
                            <li>{product.price}€</li>

                        </div>
                    )):null}
                </ul>
            </div>
        </div>
    )
}

export default Products