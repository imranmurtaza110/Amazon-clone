import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-clone-d7879.cloudfunctions.net/api'
    // 'http://localhost:5001/clone-d7879/us-central1/api'
});

export default instance; 