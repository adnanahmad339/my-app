import React, { Component } from 'react';


import './Footer.css'


const Footer=() => {
return(

    <footer id='footer'>
<div className='leftFooter'>
<h4>Download Our App</h4>
<p>Download App for Android and IOS mobile phone</p>
<img src="./Assets/appStore.png" alt="playstore"/>
<img src="./Assets/playStore.png" alt="appstore"/>
</div>

<div className='midFooter'>

<h1>Presta Shop</h1>
<p>High quality is our first priority</p>

<p>Copyrights 2021 &copy; Adnan Ahmad</p>

</div>


<div className='rightFooter'> 
<h4>Follow Us</h4>
        <a href="">Instagram</a>
        <a href="">Youtube</a>
        <a href="">Facebook</a>
</div>



    </footer>

)



};


export default Footer;