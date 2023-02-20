const CryptoJS = require("crypto-js");

export default class Auth {
  static getToken(encryptedToken: string): string {
    return CryptoJS.AES.decrypt(encryptedToken, "zensurance2023").toString(
      CryptoJS.enc.Utf8
    );
  }
}
