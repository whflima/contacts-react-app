import axios, { AxiosInstance } from "axios";

export default class HttpService {
    baseURL: string;
    instance: AxiosInstance;
    
    static get: any;

    constructor(baseURL = 'https://jsonplaceholder.typicode.com/users') {
        this.baseURL = baseURL;
        this.instance = axios.create({ baseURL: this.baseURL });
    }

    get defaultHeaders() {
        return {
            'Content-type': 'application/json'
        };
    }

    async request(method: string, url: string, customHeaders = {}) {
        const headers = { ...this.defaultHeaders, ...customHeaders };
        const source = axios.CancelToken.source();

        const config = {
            method,
            url,
            headers,
            cancelToken: source.token
        };

        return {
            request: this.instance(config),
            cancel: source.cancel
        };
    }

    get(url: string, customHeaders = {}) {
        return this.request('get', url, customHeaders);
    }

    setBaseUrl(newUrl: string) {
        this.baseURL = newUrl;
        this.instance.defaults.baseURL = newUrl;
    }
}