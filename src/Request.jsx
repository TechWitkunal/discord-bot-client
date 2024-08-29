import axios from "axios";
import { serverPath } from "./constant/app";
import PropTypes from 'prop-types';
import jwtEncode from 'jwt-encode';

// Constants
const SECRET_KEY = "som@^%$%#Rfve_deve@#$%^&lopmen@#$%^t_secret";

// Function to generate a token
const generateToken = (payload) => {
    if (!SECRET_KEY) {
        throw new Error("Missing Secret Key for JWT generation");
    }
    return jwtEncode(payload, SECRET_KEY);
};

// Function to get formatted current time
const getCurrentTimeFormatted = () => {
    const now = new Date();
    return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}:${now.getMilliseconds().toString().padStart(3, '0')}`;
};

// Function to convert an object to a query string
const toQueryString = (params) => {
    return Object.entries(params)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
};

// Main request function
export const Request = async ({ apiPath, body = {}, method = 'GET', authToken = '', title = '' }) => {
    // Create payload for JWT token
    const payload = {
        time: getCurrentTimeFormatted(),
        requestTitle: title,
    };

    // Generate token
    const requestToken = generateToken(payload);

    // Set up axios request configuration
    const config = {
        url: `${serverPath}${apiPath}`,
        method: method.toLowerCase(),
        headers: {
            'Content-Type': 'application/json',
            'requestToken': requestToken,
            'Authorization': `Bearer ${authToken}`,
        },
        withCredentials: true, // Include credentials (cookies)
    };

    // If method is GET, add parameters to URL
    if (method.toLowerCase() === 'get') {
        const queryString = toQueryString(body);
        config.url += `?${queryString}`;
    } else {
        // For other methods (POST, PUT, PATCH), add body to the request data
        config.data = { ...body, timestamp: getCurrentTimeFormatted() };
    }

    try {
        const response = await axios(config);
        const responseData = response.data;

        return {
            success: responseData.success ? responseData.statusCode : 500,
            message: responseData.message || "Internal Server Error",
            data: responseData.success ? responseData.data : null,
        };
    } catch (error) {
        console.error("Error in request", error);
        return {
            success: 500,
            message: "Internal Server Error",
            data: null,
        };
    }
};

// PropTypes validation
Request.propTypes = {
    apiPath: PropTypes.string.isRequired,
    body: PropTypes.object,
    method: PropTypes.string.isRequired,
    title: PropTypes.string,
    authToken: PropTypes.string,
};

Request.defaultProps = {
    body: {},
    method: 'GET',
    title: '',
    authToken: '',
};
