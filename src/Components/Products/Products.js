import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../../data";
import Product from "./Product";
import axios from 'axios'


const Container = styled.div`
   
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

// cat, filters and sort are coming from productLists, which are here basically for sorting, filtering products from list item and categories. 
const Products = ({cat}) => {
  
  const[products,setProducts]=useState([])
  const [filteredProducts,setFilteredProducts]=useState([]);






  
  


  return (
    <Container id="container"    style={{ height:"800px", marginTop:"400px"}} >
      {/* {filteredProducts.map((item) => ( */}
      
        {popularProducts.map((item) => (
        <Product item={item} key={item.id}  />
      ))}
    </Container>
  );  
};

export default Products;