import { useState, useEffect, useCallback } from 'react'
import ProductsList from '../../components/ProductsList/ProductsList';
import useInterval from '../../hooks/useInterval';
import { getProducts } from '../../services/ProductsService';

const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchProducts = useCallback(() => {
    getProducts()
      .then(productsFromDb => {
        setLoading(false)
        setProducts(productsFromDb)
      })
  }, [])

  useInterval(fetchProducts, 1000)

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  const renderProducts = () => {
    if (loading) {
      return <p>Loading...</p>
    } else if (products.length === 0) {
      return <p>No products yet</p>
    }
    return <ProductsList products={products} />
  }

  return (
    <div className="Products">
      <h1>Products</h1>

      {renderProducts()}
    </div>
    
  )
}

export default Products;