import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Announcement from '../../Components/Announcement/Announcement';
import Slider from '../../Components/Slider/Slider'
import Categories from '../../Components/Categories/Categories';
// import Products from '../Components/Products/Products';
import Newsletter from '../../Components/NewLetter/Newsletter';
import Footer   from '../../Components/Footer/Footer';
import Products from '../../Components/Products/Products';


const Home = () => {
    return ( 

<>
<Announcement/>
<Navbar/>
<Slider/>
<Categories/>
<Products/>
<div style={{marginTop:"-320px"}}>
<Newsletter/>
</div>

<Footer/>
</>

);
}
 
export default Home;