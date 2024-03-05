import CryptoJS from "react-native-crypto-js";

/**
 * Function to endcripts the jwt token and stores it in localStorage if rememberMe is true
 * @param {boolean} rememberMe - if tru the token will be encrypted and stored.
 * @param {string} token - The token to encrypt.
 */

const encryptToken = (rememberMe, token) => {
  if (rememberMe) {
    const cryptedToken = CryptoJS.AES.encrypt(token, "crypted key").toString();
    localStorage.setItem("Token", cryptedToken);
  }
};

export default encryptToken;
