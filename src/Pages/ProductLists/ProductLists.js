import Navbar from "../../Components/Navbar/Navbar";
import Announcement from "../../Components/Announcement/Announcement";
import Products from "../../Components/Products/Products";
import Newsletter from "../../Components/NewLetter/Newsletter";
import Footer from "../../Components/Footer/Footer";
import './ProductLists.css'

const ProductList = () => {
  


  return (
    <div className="containerProductLists" >
      <Announcement />
      <Navbar />
      <div className="titleProductLists" style={{ marginTop: "60px" }}>Dresses</div>
      <div className="filterContainerProductLists">
        <div className="filterProductLists">
          <div className="filterTextProductLists">Filter Products:</div>
          <select className="selectProductLists" name="color" >
            <option disabled >
              Color
            </option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
          </select>
          <select className="selectProductLists" name="size">
            <option disabled >
              Size
            </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className="filterProductLists">
          <div className="filterTextProductLists">Sort Products:</div>
          <select className="selectProductLists" >
            <option value="newset">Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>
      </div>

      <div style={{ marginTop: "-400px" }}>

        <Products  />

      </div>
      <div style={{ marginTop: "-300px" }}>
        <Newsletter />
        <Footer />

      </div>
    </div>
  );
};

export default ProductList;