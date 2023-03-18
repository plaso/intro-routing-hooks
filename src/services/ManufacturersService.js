import { http } from './BaseService';

export const getManufacturer = (id) => {
  return http.get(`/manufacturers/${id}`)
}