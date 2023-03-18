import { Link } from "react-router-dom"

const ManufacturerAvatar = ({ id, name, img }) => {
  return (
    <div className="d-flex align-items-center">
      <Link to={`/manufacturers/${id}`}>
        <div className="rounded-circle overflow-hidden me-1 d-flex align-items-center justify-content-center" style={{width: 20, height: 20}}>
          <img className="w-100" src={img} />
        </div>
      </Link>
      <div>{name}</div>
    </div>
  )
}

export default ManufacturerAvatar