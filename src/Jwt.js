import * as jose from "jose";
import { convertToMilliseconds } from "./utilsFunction/convertToMilliseconds";
const SECRET = "LKJHG";
const JWT_EXPIRY = convertToMilliseconds("24h");

class Jwt {
  async generateToken(payload) {
    // eslint-disable-next-line no-useless-catch
    try {
      const secret = new TextEncoder().encode(SECRET);
      const jwt = await new jose.SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setExpirationTime(new Date().getTime() + parseInt(JWT_EXPIRY))
        .sign(secret);
      return jwt;
    } catch (error) {
      throw error;
    }
  }
  async generateTokenWithExpiry(payload, expiry) {
    // eslint-disable-next-line no-useless-catch
    try {
      const expiryInMilliseconds = convertToMilliseconds(expiry);
      const secret = new TextEncoder().encode(SECRET);
      const jwt = await new jose.SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setExpirationTime(
          new Date().getTime() + parseInt(expiryInMilliseconds)
        )
        .sign(secret);
      return jwt;
    } catch (error) {
      throw error;
    }
  }
  async generateTokenWithExpiryAndNewSecret(payload, expiry, newSecret) {
    // eslint-disable-next-line no-useless-catch
    try {
      const secret = new TextEncoder().encode(newSecret);
      const jwt = await new jose.SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setExpirationTime(new Date().getTime() + expiry)
        .sign(secret);
      return jwt;
    } catch (error) {
      throw error;
    }
  }
  async decodeToken(token) {
    // eslint-disable-next-line no-useless-catch
    try {
      const jwt = jose.decodeJwt(token);
      return jwt;
    } catch (error) {
      throw error;
    }
  }
  async verifyToken(token) {
    // eslint-disable-next-line no-useless-catch
    try {
      const secret = new TextEncoder().encode(SECRET);
      return await jose.jwtVerify(token, secret);
    } catch (error) {
      throw error;
    }
  }
}

export default new Jwt();