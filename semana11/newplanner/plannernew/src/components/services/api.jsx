import axios from "axios";

const api = axios.create({
    baseUrl: "https://us-central1-labenu-apis.cloudfunctions.net/generic",
});

export default api

