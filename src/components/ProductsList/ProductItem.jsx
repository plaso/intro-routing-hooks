import { Link } from "react-router-dom";
import ManufacturerAvatar from "../misc/ManufacturerAvatar/ManufacturerAvatar";

const ProductItem = ({ id, name, img, manufacturer }) => {
  return (
    <div className="card h-100 p-2">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title text-dark">{name}</h5>
        <ManufacturerAvatar {...manufacturer} />
        <Link className="btn btn-primary mt-2" to={`/products/${id}`}>Ver mas detalles</Link>
      </div>
    </div>
  )
}

export default ProductItem;