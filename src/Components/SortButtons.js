import React from 'react'



export default function SortButtons({products, setProducts}) {

     // SORT BY FUNCTIONS // 

     // SORT BY STOCK

     const handleStock = () => {
        let sortedByStock = products.sort((a, b) => a.stock - b.stock);
        setProducts([...sortedByStock])

    }

    //SORT BY CATEGORY

    const handleCategory = () => {
        let sortedByCategory = products.sort((a, b) => a.category.localeCompare(b.category))
        setProducts([...sortedByCategory])
    }

    // SORT BY TITLE

    const handleTitle = () => {
        let sortedByTitle = products.sort((a, b) => {
            // remove any special characters from the title
            const titleA = a.title.replace(/^\W+/, '');
            const titleB = b.title.replace(/^\W+/, '');
            // compare titles
            return titleA.localeCompare(titleB);
        });
        setProducts([...sortedByTitle])
    }

     // SORT BY PRICE


    const handlePrice = () => {
        let sortedByPrice = products.sort((a, b) => a.price - b.price)
        setProducts([...sortedByPrice])
    }

    // SORT BY DESCRIPTION

    const handleDescription = () => {
        let sortedByDescrip = products.sort((a, b) => {
            // remove any special characters from the title
            const descripA = a.description.replace(/^\W+/, '');
            const descripB = b.description.replace(/^\W+/, '');
            // compare titles
            return descripA.localeCompare(descripB);
        });
        setProducts([...sortedByDescrip])
    }





  return (
    <div style={{marginTop: 20}}>

         <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Sort by:
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenu2">

  <button className="btn btn-light" onClick={() => handleStock()}>Stock (low-high)</button>
            <button className="btn btn-light" onClick={() => handleCategory()}>Category</button>
            <button className="btn btn-light" onClick={() => handleTitle()}>Title (A-Z)</button>
            <button className="btn btn-light" onClick={() => handlePrice()}>Price (low-high)</button>
            <button className="btn btn-light" onClick={() => handleDescription()}>Description (A-Z)</button>




  </div>
</div>




         
    </div>
  )
}
