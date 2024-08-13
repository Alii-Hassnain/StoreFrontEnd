import React from 'react'
import SectionTitle from './SectionTitle'
import ProductsGrid from './ProductsGrid'

const FeaturedProducts = () => {
  return (
    <div>
        <SectionTitle text = "Featured Products"/>
        <div>
            <ProductsGrid/>
        </div>
    </div>
  )
}

export default FeaturedProducts
