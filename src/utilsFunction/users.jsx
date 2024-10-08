/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector } from 'react-redux';
// import { serverPath } from "@/constant/app';
import { requestTitleCode } from '@/constant/app';
import authSlice from '@/redux/slice/authSlice';
import { Request } from '@/Request';

export function useAuthToken() {
  // Get the token from the Redux store
  const tokenFromStore = useSelector(state => state.authSlice.token);

  // Get the token from localStorage
  const tokenFromLocalStorage = localStorage.getItem("token");

  // Return the tokens
  return { tokenFromStore, tokenFromLocalStorage };
}

export const getUserName = () => {
  const authSlice = useSelector(state => state.authSlice);
  return authSlice.user?.name || ""; // Return the username
};

export async function getUserDetails(tokenFromLocalStorage) {
  try {
    // const response = await axios.post("https://chat-app-server-ojsr.onrender.com/api/user/getUserInfo", {}, {
    //   const response = await axios.post(`${serverPath}/api/user/getUserInfo`, {}, {
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Authorization": `Bearer ${tokenFromLocalStorage}`,
    //   },
    // });
    // le response = await Request({ "apiPath": "/api/user/getUserInfo", "title": requestTitleCode.getUserInfo, "authSlice": authSlice })
    let response = await Request({ "apiPath": "/api/user/getUserInfo", "authToken": tokenFromLocalStorage, "title": requestTitleCode.getUserInfo, "authSlice": authSlice })
    response = response.data



    const responseData = response.data;
    // console.log(responseData.data

    if (responseData.success === true) {
      return responseData.data // Return user details
    } else {
      return null;// Return user details

      // throw new Error(responseData.message); // Throw an error for failed login
    }
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error; // Rethrow the error for the caller to handle
  }
}