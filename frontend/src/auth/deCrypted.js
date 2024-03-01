import CryptoJS from "react-native-crypto-js";

const decryptedToken = (token) => {
  if (token) {
    const decryptedBytes = CryptoJS.AES.decrypt(token, "crypted key");
    const decryptedToken = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return decryptedToken;
  } else return null;
};

export default decryptedToken;
