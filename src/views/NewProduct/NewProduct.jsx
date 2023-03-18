import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import FormControl from "../../components/misc/FormControl/FormControl"
import Input from "../../components/misc/Input/Input"
import Select from "../../components/misc/Select/Select"
import { getManufacturers } from "../../services/ManufacturersService"
import { createProduct } from "../../services/ProductsService"

const REQUIRED_MSG = 'Complete this field'
const URL_REGEX = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/


const INITIAL_VALUES = {
  name: '',
  price: 0,
  manufacturerId: '',
  img: ''
}

const formSchema = {
  name: (value) => {
    if (!value) {
      return REQUIRED_MSG
    }
  },
  price: (value) => {
    if (value === undefined || value === null) {
      return REQUIRED_MSG
    }
    if (value <= 0) {
      return 'Price must be greater than 0'
    }
  },
  manufacturerId: (value) => {
    if (!value) {
      return REQUIRED_MSG
    }
  },
  img: (value) => {
    if (!URL_REGEX.test(value)) {
      return 'Enter a valid URL'
    }
  }
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
    // ['name', 'img']

    const obj = { hola: 'pepe' }

    const newErrorsObj = {}

    /*
    newErrorsObj = {
      name: 'Complete this field' Si hay errores esto es lo que iriamos montando
    }*/

    Object.keys(formSchema).forEach(key => {
      const validator = formSchema[key]
      const value = values[key]

      const error = validator(value)

      if (error) {
        newErrorsObj[key] = error
      }
    })

    if (Object.keys(newErrorsObj).length === 0) {
      createProduct(values)
        .then((createdProduct) => {
          navigate(`/products/${createdProduct.id}`)
        })
    } else {
      setErrors(newErrorsObj)
    }
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
        <FormControl htmlFor="name" text="Name" error={errors.name}>
          <Input
            id="name" name="name" placeholder="Name of the new product"
            value={values.name} onChange={onChange} error={errors.name}
          />
        </FormControl>

        <FormControl htmlFor="price" text="Price" error={errors.price}>
          <Input
            id="price" name="price" error={errors.price}
            value={values.price} onChange={onChange} type="number" min={0}
          />
        </FormControl>

        <FormControl htmlFor="manufacturer" text="Manufacturer" error={errors.manufacturerId}>
          <Select
            id="manufacturer" name="manufacturerId" value={values.manufacturerId}
            options={mappedOptions} onChange={onChange} error={errors.manufacturerId}
          />
        </FormControl>

        <FormControl htmlFor="img" text="Image" error={errors.img}>
          <Input
            id="img" name="img" error={errors.img}
            value={values.img} onChange={onChange} type="url"
          />
        </FormControl>

        <button className="btn btn-primary">Create</button>
      </form>
    </div>
  )
}

export default NewProduct