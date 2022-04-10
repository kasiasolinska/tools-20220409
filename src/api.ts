import { SingleEntryPlugin } from "webpack";

export class Api {
    apiUrl: string;
    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;

    }
}


const api = new Api('http://jsonplaceholder.typicode.com');

api.apiUrl