/*
 * @Author       : Mx
 * @Date         : 2023-06-02 09:44:09
 * @Description  :
 */
const TOKEN_KEY = 'token';

const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
};

const setToken = (token: string) => {
    localStorage.setItem(TOKEN_KEY, token);
};

const clearToken = () => {
    localStorage.removeItem(TOKEN_KEY);
};

export { getToken, setToken, clearToken };
