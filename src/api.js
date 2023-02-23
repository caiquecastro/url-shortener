import Axios from "axios";

export default Axios.create({
  baseURL: import.meta.env.VUE_APP_API_URL
});
