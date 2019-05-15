export class UserService {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  async getByCredentials(credentials) {
    return await fetch(this.endpoint + "users/getByCredentials", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    }).then(function(response) {
      return response.json();
    });
  }

  async create(user) {
    return await fetch(this.endpoint + "users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    }).then(function(response) {
      return response;
    });
  }
}
