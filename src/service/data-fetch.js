import axios from 'axios';

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
    const response = await axios.get(
      `http://10.58.1.49:8000/investments/${id}`
    );
    const result = response.data;
    return result;
  }

  async sendInvestRequest(token, amount, id) {
    const HEADERS = {
      Authorization: token,
    };
    const response = await axios.post(
      `http://10.58.3.237:8000/transactions/invest/${id}`,
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

  async logIn(email, password) {
    const response = await axios.post('http://10.58.1.169:8000/users/signin', {
      email: email,
      password: password,
    });
    const result = response.data;
    return result;
  }

  async kakaoLogin(authObj) {
    const response = await axios.post(
      'http://10.58.1.169:8000/users/signin/kakao',
      {
        headers: {
          Authorization: authObj.access_token,
        },
      }
    );
    const result = response.data;
    return result;
  }

  async signUp(refs) {
    const response = await axios.post('http://10.58.1.169:8000/users/signup', {
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
}

export default fetchData;