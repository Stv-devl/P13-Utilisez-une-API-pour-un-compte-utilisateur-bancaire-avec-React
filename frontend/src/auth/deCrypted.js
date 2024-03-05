import CryptoJS from "react-native-crypto-js";

/**
 * Function to decripts the jwt token.
 * @param {string} token - The encrypted token.
 * @returns {string|null} - The decrypted token, or null if no token is provided.
 */

const decryptedToken = (token) => {
  if (token) {
    const decryptedBytes = CryptoJS.AES.decrypt(token, "crypted key");
    const decryptedToken = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return decryptedToken;
  } else return null;
};

export default decryptedToken;
