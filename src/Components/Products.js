import React from 'react'
import { useState, useEffect } from 'react'
import Search from './Search';
import SortButtons from './SortButtons';


export default function Products() {


    const [products, setProducts] = useState([])
    const [userInput, setUserInput] = useState("")


    //useEffect calls API and saves data to state on each refresh
    useEffect(() => {


        async function fetchData() {
            try {
                let response = await fetch('https://dummyjson.com/products')
                if (!response.ok)
                    throw new Error(response.statusText);
                let data = await response.json();

                //sort by Title
                let sortData = data.products.sort((a, b) => {
                    // remove any special characters from the title
                    const titleA = a.title.replace(/^\W+/, '');
                    const titleB = b.title.replace(/^\W+/, '');
                    // compare titles
                    return titleA.localeCompare(titleB);
                });

                //save received array to state
                setProducts([...sortData])

            } catch (err) {
                // log any errors that may occur to console
                console.log(err)
            }

        }

        fetchData();

    }, [])



    // Delete item
    const handleDelete = (id) => {
        let newArr = products.filter((product) => product.id !== id)
        setProducts(newArr)

    }


    return (
        <div>
            <h1>Products</h1>
            <div className="container search-sort">
                <Search userInput={userInput} setUserInput={setUserInput} />
                <SortButtons products={products} setProducts={setProducts} />
            </div>


            <div className="container">
                <div className="row">
                
                    {
                        //filter and map products to support dynamic search
                        products
                            .filter(item => {
                                if (!userInput) return true
                                // toLowerCase() handles searches in upper and lower case
                                if (item.title.toLowerCase().includes(userInput.toLowerCase())) {
                                    return true
                                }
                            })
                            .map(product => (
                                <div key={product.id} className="col-md-4 col-lg-3 card">
                                    <div className="card-body">
                                        <h5 className='card-title'>{product.title}</h5>
                                        <p className='prod-cat'>{product.category}</p>
                                        <p className='prod-descrip'>{product.description}</p>

                                    </div>
                                    <div className='price-stock'>
                                        <p>Price: {product.price}</p>
                                        <p>Stock: {product.stock}</p>
                                    </div>
                                    <button className="btn btn-danger" onClick={() => handleDelete(product.id)}>Delete</button>
                                </div>
                            ))}
                </div>
            </div>
        </div>
    )
}
