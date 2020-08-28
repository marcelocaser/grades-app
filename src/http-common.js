import axios from 'axios';


console.log('Aqui!' + JSON.stringify(process.env));

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: `http://${process.env.REACT_APP_HOST_API}:${process.env.REACT_APP_PORT_API}/`,
  headers: {
    'Content-type': 'application/json',
  },
});
