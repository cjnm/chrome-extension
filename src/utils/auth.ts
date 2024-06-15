import axios from "axios";

const checkAuthStatus = async ({ jwt, url }: any) => {
    try {
        if (jwt && url) {
            const headers = buildAuthHeaders(jwt);
            const response = await axios.get(
                `${url}/api/auth`,
                headers
            )
            return response.status === 200 ? true : false;
        } else {
            const localUser = typeof window !== "undefined" ? localStorage.getItem('main-chrome-extension-user') : null;
            if (localUser) {
                const { jwt, url } = JSON.parse(localUser);
                const headers = buildAuthHeaders(jwt);
                const response = await axios.get(
                    `${url}/api/auth`,
                    headers
                )
                return response.status === 200 ? true : false;
            } else {
                return false;
            }
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}

const buildAuthHeaders = (jwt?: string) => {
    if (jwt) {
        return {
            headers: {
                Authorization: jwt
            }
        }
    }

    const localUser = typeof window !== "undefined" ? localStorage.getItem('main-chrome-extension-user') : null;
    if (localUser) {
        const { jwt } = JSON.parse(localUser);
        return {
            headers: {
                Authorization: jwt
            }
        }
    }

    return {
        headers: {}
    };
}

const sessionExist = () => {
    if (typeof window !== "undefined" && localStorage.getItem('main-chrome-extension-user')) {
        return true;
    } else {
        return false;
    }
}

const logout = () => {
    if (typeof window !== "undefined") {
        localStorage.removeItem('main-chrome-extension-user');
    }
}

export { checkAuthStatus, buildAuthHeaders, logout, sessionExist };
