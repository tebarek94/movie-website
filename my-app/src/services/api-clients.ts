
import axios from "axios";
const apiClient=axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key: "3e223dad65af4a528fbc574c89377ca9",
    },
});
export default apiClient;