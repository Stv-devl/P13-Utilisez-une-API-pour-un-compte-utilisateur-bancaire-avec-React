import CryptoJS from "react-native-crypto-js";

const decryptedToken = () => {
  const cryptedTokenFromStorage = localStorage.getItem("crypted token");

  if (cryptedTokenFromStorage) {
    const decryptedBytes = CryptoJS.AES.decrypt(
      cryptedTokenFromStorage,
      "crypted key"
    );
    const decryptedToken = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return decryptedToken;
  } else return null;
};

export default decryptedToken;
