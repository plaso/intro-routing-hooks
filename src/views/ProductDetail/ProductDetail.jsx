import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ManufacturerAvatar from "../../components/misc/ManufacturerAvatar/ManufacturerAvatar";
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

      <div className="border p-4 rounded">
        {loading
          ? <p>Loading...</p>
          : <div className="row">
              <div className="col-4">
                <img src={product?.img} className="w-100" />
              </div>
              <div className="col-8">
                <h1>{product?.name}</h1>
                <p className="text-success fw-bold fs-5">{product.price}€</p>
                <ManufacturerAvatar {...product?.manufacturer} />
              </div>
          </div>
        }
      </div>
      

      <Link to={`/products/${Number(productId) + 1}`}>Siguiente</Link>
    </div>
  )
}

export default ProductDetail;