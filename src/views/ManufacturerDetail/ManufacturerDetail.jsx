import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getManufacturer } from "../../services/ManufacturersService";

const ManufacturerDetail = () => {
  const { manufacturerId } = useParams()

  const [loading, setLoading] = useState()
  const [manufacturer, setManufacturer] = useState(null)

  useEffect(() => {
    getManufacturer(manufacturerId)
      .then(manufacturerFromDb => {
        setLoading(false)
        setManufacturer(manufacturerFromDb)
      })
  }, [manufacturerId])

  return (
    <div className="Manufacturer">
      {loading
        ? <p>Loading...</p>
        : <h1>{manufacturer?.name}</h1>
      }
    </div>
  );
}

export default ManufacturerDetail