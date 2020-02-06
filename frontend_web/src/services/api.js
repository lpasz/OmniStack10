import axios from 'axios';

const isLocalHost = false;

const api = axios.create( {
    baseURL: `http://${ ( isLocalHost ) ? "localhost" : "192.168.0.111" }:3333`,
} )

export default api;