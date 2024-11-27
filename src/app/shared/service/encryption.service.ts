import { Injectable } from "@angular/core";
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: "root",
})
export class EncryptionService {

  private key = CryptoJS.enc.Utf8.parse('Iopw83vz1XH9pdNYWOaZ9DNbFxrUtY1a');
  private iv = CryptoJS.enc.Utf8.parse('MAKV2SPBNI99212A');

  encryptionAES(plainText: string): string {
    const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(plainText), this.key, {
      keySize: 256 / 8,
      iv: this.iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
  }

  decryptionAES(cipherText: string): string {
    const decrypted = CryptoJS.AES.decrypt(cipherText.replace(' ', '+'), this.key, {
      keySize: 256 / 8,
      iv: this.iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return CryptoJS.enc.Utf8.stringify(decrypted).toString();
  }
}