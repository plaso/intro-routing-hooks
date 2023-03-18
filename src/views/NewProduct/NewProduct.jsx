import { useNavigate } from "react-router-dom"

const NewProduct = () => {
  const navigate = useNavigate()

  return (
    <div className="NewProduct">
      <h1>New Product</h1>
      <button onClick={() => navigate('/products')} >Navigate</button>
    </div>
  )
}

export default NewProduct