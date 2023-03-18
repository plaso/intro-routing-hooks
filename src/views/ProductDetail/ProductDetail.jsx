import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProductDetail } from '../../services/ProductsService'

const ProductDetail = () => {
  const { productId } = useParams()
  const navigate = useNavigate()

  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductDetail(productId)
      .then(productFromDb => {
        setLoading(false);
        setProduct(productFromDb)
      })
      .catch(err => {
        if (err.response.status === 404) {
          navigate('/not-found')
        }
      })
  }, [productId, navigate])

  return (
    <div>
      <h1>Product Detail</h1>

      {loading
        ? <p>Loading...</p>
        : <>
            <h2>{product?.name}</h2>

            <img src={product?.img} />
        </>
      }

      <Link to={`/products/${Number(productId) + 1}`}>Siguiente</Link>
    </div>
  )
}

export default ProductDetail;