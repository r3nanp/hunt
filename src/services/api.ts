import axios from 'axios'

const api = axios.create({
  baseURL: 'https://r3nanp-huntserver.herokuapp.com',
})

export default api
