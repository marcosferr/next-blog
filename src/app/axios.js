import axios from "axios";
require("dotenv").config();

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export default axios;
