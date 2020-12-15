import axios from "axios";

// Mocking api with mockapi.io https://mockapi.io/projects/5fd7e27d9dd0db0017ee9d09
// ?cidade=Melliebury
export default axios.create({
  baseUrl: "https://mockapi.io/projects/5fd7e27d9dd0db0017ee9d09/api",
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
});
