import axios from "axios";

const API_BASE_URL = 'http://localhost:8080/';

interface RequestOptions {
    method: string;
    headers?: HeadersInit;
    body?: string;
}

async function apiRequest(endpoint: string, method: string, body: any) {


    const url = `${API_BASE_URL}${endpoint}`;
    let response;
    try {
        response = await axios({
            method: 'post',
            url: url,
            data: body
          });
        // response = await fetch(url, options);

    }
    catch (e){
        throw new Error(e);
    }
    console.log("apiRequest response ", response);

    return response.json();
}


export { API_BASE_URL, apiRequest };
