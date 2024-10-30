import Carousel from '@/islands/ui/Carousel.tsx'
import ProductsSolvRow from '@/islands/rows/products/ProductsSolvRow.tsx'
import ProductsSkeetRow from '@/islands/rows/products/ProductsSkeetRow.tsx'
import ProductsValidatorsSolutionsRow from '@/islands/rows/products/ProductsValidatorsSolutionsRow.tsx'
import ProductsErpcRow from '@/islands/rows/products/ProductsErpcRow.tsx'
import ProductsBuidlersCollectiveRow from '@/islands/rows/products/ProductsBuidlersCollectiveRow.tsx'
import ProductsEpicsDAORow from '@/islands/rows/products/ProductsEpicsDAORow.tsx'
import ProductsValidatorsDAORow from '@/islands/rows/products/ProductsValidatorsDAORow.tsx'

export default function ProductsSlideRow() {
  return (
    <>
      <div class='py-64'>
        <Carousel
          autoSlide
        >
          <ProductsSkeetRow />
          <ProductsSolvRow />
          <ProductsValidatorsSolutionsRow />
          <ProductsErpcRow />
          <ProductsBuidlersCollectiveRow />
          <ProductsEpicsDAORow />
          <ProductsValidatorsDAORow />
        </Carousel>
      </div>
    </>
  )
}
