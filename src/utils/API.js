import axios from "axios";

function submitForm(data) {
  return axios.post("url", data);
}

const API = {
  submitForm
};

export default API;