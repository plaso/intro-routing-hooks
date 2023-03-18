import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import FormControl from "../../components/misc/FormControl/FormControl"
import Input from "../../components/misc/Input/Input"
import Select from "../../components/misc/Select/Select"
import { getManufacturers } from "../../services/ManufacturersService"
import { createProduct } from "../../services/ProductsService"

const INITIAL_VALUES = {
  name: '',
  price: 0,
  manufacturerId: '',
  img: ''
}

const NewProduct = () => {
  const navigate = useNavigate()

  const [values, setValues] = useState(INITIAL_VALUES)
  const [errors, setErrors] = useState({})
  const [manufacturers, setManufacturers] = useState([])

  useEffect(() => {
    getManufacturers()
      .then(manufacturersFromDb => {
        setManufacturers(manufacturersFromDb)
      })
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()

    createProduct(values)
      .then((createdProduct) => {
        navigate(`/products/${createdProduct.id}`)
      })
  }

  const onChange = (event) => {
    const { value, name, type } = event.target;

    setValues({
      ...values,
      [name]: type === 'number' ? Number(value) : value
    })
  }

  const mappedOptions = manufacturers.map((manufacturer) => {
    return {
      label: manufacturer.name,
      value: manufacturer.id
    }
  })

  return (
    <div className="border p-4 rounded bg-white">
      <h1>New Product</h1>

      <form onSubmit={onSubmit}>
        <FormControl htmlFor="name" text="Name">
          <Input
            id="name" name="name" placeholder="Name of the new product"
            value={values.name} onChange={onChange}
          />
        </FormControl>

        <FormControl htmlFor="price" text="Price">
          <Input
            id="price" name="price"
            value={values.price} onChange={onChange} type="number" min={0}
          />
        </FormControl>

        <FormControl htmlFor="manufacturer" text="Manufacturer">
          <Select
            id="manufacturer" name="manufacturerId" value={values.manufacturerId}
            options={mappedOptions} onChange={onChange}
          />
        </FormControl>

        <FormControl htmlFor="img" text="Image">
          <Input
            id="img" name="img"
            value={values.img} onChange={onChange} type="url"
          />
        </FormControl>

        <button className="btn btn-primary">Create</button>
      </form>
    </div>
  )
}

export default NewProduct