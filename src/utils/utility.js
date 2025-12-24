import CryptoJS from "crypto-js";

const SECRET_KEY = CryptoJS.enc.Utf8.parse(import.meta.env.VITE_SECRET_KEY);
const IV = CryptoJS.enc.Utf8.parse(import.meta.env.VITE_IV);

export function _Encrypt(data) {
  const text = typeof data === "string" ? data : JSON.stringify(data);
  const encrypted = CryptoJS.AES.encrypt(text, SECRET_KEY, {
    iv: IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.toString();
}

export function _Decrypt(cipherText) {
  const decrypted = CryptoJS.AES.decrypt(cipherText, SECRET_KEY, {
    iv: IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  const text = decrypted.toString(CryptoJS.enc.Utf8);
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}
