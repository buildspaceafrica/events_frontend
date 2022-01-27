import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    // toast.error("An unexpected error occurred.");
  }

  if (expectedError) toast.error(error.response.data.message);

  console.log();

  // if (expectedError) console.log(error);

  return Promise.reject(error);
});

const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};

export default httpService;
