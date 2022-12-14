import { Api } from './api';

class Auth extends Api {
  register(user) {
    return fetch(`${this._baseUrl}/signup`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    })
      .then(this._checkResponse)
      .catch((error) => {
        console.error(error);
      });
  }

  authenticate(user) {
    return fetch(`${this._baseUrl}/signin`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    })
      .then(this._checkResponse)
      .catch((error) => {
        console.error(error);
      });
  }

  validateToken(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: { ...this._headers, Authorization: `Bearer ${token}` },
      method: 'GET',
    })
      .then(this._checkResponse)
      .catch((error) => {
        console.error(error);
      });
  }
}

const auth = new Auth({
  baseUrl: 'https://register.nomoreparties.co',
  headers: { 'Content-Type': 'application/json' },
});

export default auth;
