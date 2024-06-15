import axios from "axios";
import { buildAuthHeaders } from "./auth";

const saveProductToDashboard = async ({
    name,
    price,
    image,
    rating,
    product_highlight,
    seller,
    seller_url,
    return_policy,
    delivery_type,
    delivery_charge,
    delivery_time,
    product_url
}: Record<string, string>) => {
    try {
        const localUser = typeof window !== "undefined" ? localStorage.getItem('main-chrome-extension-user') : null;
        if (localUser) {
            const { jwt, url } = JSON.parse(localUser);
            const headers = buildAuthHeaders(jwt);
            const response = await axios.post(
                `${url}/api/product`,
                {
                    name,
                    price,
                    image,
                    rating,
                    product_highlight,
                    seller,
                    seller_url,
                    return_policy,
                    delivery_type,
                    delivery_charge,
                    delivery_time,
                    product_url
                },
                headers
            )

            return response.status === 200 ? true : false;
        }
        return false;
    } catch (error) {
        console.log(error);
        return false;
    }
}


export { saveProductToDashboard };
