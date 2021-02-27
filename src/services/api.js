const host = "http://localhost:3000/api";
const url = path => `${host}/${path}`;

const header = {
    headers: {
        "Content-type" : "application/json"
    }
}

export const get = async path => {
    // const resp = await fetch(url(path));
    // checkError(resp.status);
    // const result = await resp.json();
    const resp = await localStorage.getItem(url(path))
    const result = await resp.json();
    return result;
}

export const post = async (path, body) => {
    const options = {...header, method: "POST", body: JSON.stringify(body) };

    // const resp = await fetch(url(path), options);
    const resp = await localStorage.setItem(url(path), options);
    checkError(resp.status);
    const result = await resp.json();

    return result;
}


export const deleteRequest = async path => {
    const options = { method: "DELETE" };

    // const resp = await fetch(url(path), options);
    const resp = await localStorage(url(path), options);
    checkError(resp.status);

    // 204 No Content is gonna return so if it works successfully then return nothing
    return;
};

const checkError = status => {
    // over 400 case -> just show "error"
    if(status >= 400) {
        throw new Error('There are errors. Please try it again later.');
    }
};