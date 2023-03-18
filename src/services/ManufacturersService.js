import { http } from './BaseService';

export const getManufacturers = () => {
  return http.get('/manufacturers')
}

export const getManufacturer = (id) => {
  return http.get(`/manufacturers/${id}`)
}