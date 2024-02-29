import CryptoJS from "react-native-crypto-js";

const encryptToken = (rememberMe, token) => {
  if (rememberMe) {
    const cryptedToken = CryptoJS.AES.encrypt(token, "crypted key").toString();
    localStorage.setItem("Token", cryptedToken);
  }
};

export default encryptToken;
