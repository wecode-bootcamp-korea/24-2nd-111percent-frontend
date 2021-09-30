import axios from 'axios';
import URL from '../config';

class fetchData {
  constructor() {
    this.getRequestOptions = {
      method: 'GET',
    };

    this.postRequestOptions = {
      method: 'POST',
    };
  }

  async itemDetail(id) {
    const response = await axios.get(`${URL}/investments/${id}`);
    const result = response.data;
    return result;
  }

  async listView() {
    const response = await axios.get(`${URL}/investments`);
    const result = response.data;
    return result;
  }

  async logIn(email, password) {
    const response = await axios.post(`${URL}/users/signin`, {
      email: email,
      password: password,
    });
    const result = response.data;
    return result;
  }

  async kakaoLogin(authObj) {
    const HEADERS = {
      'Content-Type': 'application/json',
      Authorization: authObj.access_token,
    };

    const response = await axios.post(`${URL}/users/signin/kakao`, null, {
      headers: HEADERS,
    });
    const result = response.data;
    return result;
  }

  async signUp(refs) {
    const response = await axios.post(`${URL}/users/signup`, {
      name: refs.name,
      email: refs.email,
      password: refs.password,
      phone_number: refs.phone_number,
      bank_name: refs.bank_name,
      account_number: refs.account_number,
    });
    const result = response.data;
    return result;
  }

  async portfolioView(token) {
    const HEADERS = {
      Authorization: token,
    };
    const response = await axios.get(`${URL}/transactions/portfolio`, {
      headers: HEADERS,
    });
    const result = response.data;
    return result;
  }

  async depositView(value, token) {
    const HEADERS = {
      Authorization: token,
    };
    const response = await axios.get(`${URL}/transactions/history${value}`, {
      headers: HEADERS,
    });
    const result = response.data;
    return result;
  }

  async sendInvestRequest(token, amount, id) {
    const HEADERS = {
      Authorization: token,
    };
    const response = await axios.post(
      `${URL}/transactions/invest/${id}`,
      {
        amounts: amount,
      },
      {
        headers: HEADERS,
      }
    );
    const result = response.data;
    return result;
  }

  async sendDeposit(value, token) {
    const HEADERS = {
      Authorization: token,
    };
    const response = await axios.post(
      `${URL}/transactions/deposit`,
      { amounts: Number(value) },
      { headers: HEADERS }
    );
    const result = response.data;
    return result;
  }

  async widthDrawView(value, token) {
    const HEADERS = {
      Authorization: token,
    };
    const response = await axios.post(
      `${URL}/transactions/withdrawal`,
      { amounts: Number(value) },
      { headers: HEADERS }
    );
    const result = response.data;
    return result;
  }
}

export default fetchData;
