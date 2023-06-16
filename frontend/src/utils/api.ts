const headers: HeadersInit = {
    "Content-Type": "application/json",
    Accept: "application/json",
};

class Api {
    private readonly _baseUrl: string;
    private readonly _headers: HeadersInit;

    constructor({
        baseUrl,
        headers,
    }: {
        baseUrl: string;
        headers: HeadersInit;
    }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    protected _checkResponse = (
        url: string,
        options: RequestInit
    ): Promise<any> => {
        return fetch(url, options).then((res) =>
            res.ok ? res.json() : Promise.reject(res.status)
        );
    };

    submitRequest(query: string) {
        return this._checkResponse(this._baseUrl, {
            headers: this._headers,
            method: "POST",
            body: JSON.stringify({ query: query }),
        });
    }
}

export const api = new Api({
    baseUrl: "localhost:3000",
    headers: headers,
});
