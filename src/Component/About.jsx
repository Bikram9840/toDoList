import React, { useState } from 'react'

function About() {
  let [ list, useList] = useState("")
  let [product, useProduct] = useState(['bikram','hari'])
  function Updateitem(event){
    useList(event.target.value)
  }
  function UpdateProduct(){
    useProduct([...product, list]);
  } 

  function Productdelet(index){
     let DeleteItems = product.filter((_,i)=> i !==index);
     useProduct(DeleteItems);
  }
  return (
    <>
    <input type="text" placeholder='here' onChange={Updateitem}/>
    <button onClick={UpdateProduct}>click</button>
    <ul>
      {product.map((item,index)=>
      <div key={index}>
        <li  >{item}</li>
        <button onClick={()=> Productdelet(index)}>delete</button>
      </div>)}
    </ul>
    </>
  )
}

export default About