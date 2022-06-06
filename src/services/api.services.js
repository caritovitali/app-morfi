
import axios from 'axios';
const apiUrl="https://629571d563b5d108c19e1e1c.mockapi.io"

//const apiUrl = process.env.VUE_APP_API_URL
const apiServices = {

  getProductos: async () => {
    try {
      const res = await axios.get(apiUrl + '/productos');
      return res.data;
    
    } catch (err) { console.log (err) }
  },
  getUsers: async () => {
    try {
      const res = await axios.get(apiUrl + '/usuarios');
      return res.data;
    
    } catch (err) { console.log (err) }
  },
  
  saveProducto: async (product) => {
    try {
      const res = await axios.post(apiUrl + '/productos', product);
      return res.data;

    } catch (err) { console.log (err) }
  },  
  deleteProducto: async (productId) => {
    try {
        const res = await axios.delete(`${apiUrl}/productos/${productId}`);
        return res.data;
    
    } catch (err) { console.log (err) }
 },
  createUser: async (usuario) => {
    try {
      const res = await axios.post(apiUrl + '/usuarios', usuario);
      return res.data;

    } catch (err) { console.log (err) }
  },  guardarProducto: async (producto) => {
    try {
      const res = await axios.post(apiUrl + '/productos', producto);
      return res.data;

    } catch (err) { console.log (err) }
  },
 
}

export default apiServices