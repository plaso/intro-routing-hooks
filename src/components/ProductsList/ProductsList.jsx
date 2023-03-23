import ProductItem from "./ProductItem"

const ProductsList = ({ products }) => {
  return (
    <div className="row row-cols-2 row-cols-md-4 g-4">
      {products.map(product => (
        <div key={product.id} className="column">
          <ProductItem {...product} />
        </div>
      ))}
    </div>
  )
}

export default ProductsList;