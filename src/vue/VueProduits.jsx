import React from 'react'
import Navbar from '../scenes/global/Navbar'
import SingleProduit from '../scenes/produits/SingleProduit'
import Footer from '../scenes/footer/Footer'
import Produits from '../scenes/produits/Produits'

function VueProduits() {
  return (
    <div>
        {/* <Navbar /> */}
        <Produits />
        {/* <Footer /> */}
    </div>
  )
}

export default VueProduits