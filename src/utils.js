export const handleJson = response => {
    if (!response.ok) {
        throw Error(`${response.status} ${response.statusText} [${response.url}]`);
    }
    return response.json()
};