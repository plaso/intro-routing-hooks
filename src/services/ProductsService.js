import { http } from './BaseService';

const SORT_BY_NAME_PARAMS = {
  _sort: 'name',
  _order: 'asc'
}

export const getProducts = (search, sortByName) => {
  return http.get('/products', {
    params: {
      _expand: 'manufacturer',
      q: search,
      _sort: sortByName ? 'name' : undefined,
      _order: sortByName ? 'asc' : undefined
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