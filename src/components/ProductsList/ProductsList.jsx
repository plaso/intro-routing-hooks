import ProductItem from "./ProductItem"

const ProductsList = ({ products }) => {
  return (
    <div class="row row-cols-2 row-cols-md-4 g-4">
      {products.map(product => (
        <div className="column">
          <ProductItem {...product} />
        </div>
      ))}
    </div>
  )
}

export default ProductsList;