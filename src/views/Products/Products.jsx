import { useState, useEffect, useCallback } from 'react'
import ProductsList from '../../components/ProductsList/ProductsList';
import useInterval from '../../hooks/useInterval';
import { getProducts } from '../../services/ProductsService';
import Input from '../../components/misc/Input/Input';
import useDebounce from '../../hooks/useDebounce';
import useLocale from '../../hooks/useLocale';

const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('')
  const [isSortedByName, setIsSortedByName] = useState(false);
  const debouncedSearchTerm = useDebounce(filter, 1000);

  const { t } = useLocale()

  const onFilter = (event) => {
    setFilter(event.target.value)
  }

  const fetchProducts = useCallback(() => {
    setLoading(true);
    
    getProducts(debouncedSearchTerm, isSortedByName)
      .then(productsFromDb => {
        setLoading(false)
        setProducts(productsFromDb)
      })
  }, [debouncedSearchTerm, isSortedByName])

  // useInterval(fetchProducts, 15000)

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
      <h1>{t('products')}</h1>
      <div className="my-3">
        <Input onChange={onFilter} value={filter} />
        <button
          className={`btn btn-${isSortedByName ? 'success' : 'secondary'}`}
          onClick={() => setIsSortedByName(!isSortedByName)}
        >
          Sort by name
        </button>
      </div>

      {renderProducts()}
    </div>
    
  )
}

export default Products;