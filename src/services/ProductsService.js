import { http } from './BaseService';

export const getProducts = () => {
  return http.get('/products', {
    params: {
      _expand: 'manufacturer'
    }
  })
}

export const getProductDetail = (id) => {
  return http.get(`/products/${id}`, {
    params: {
      _expand: 'manufacturer'
    }
  })
}

export const createProduct = (productBody) => {
  return http.post('/products', productBody)
}