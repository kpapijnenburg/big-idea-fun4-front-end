export class UserService {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  async getByCredentials(credentials) {
    const response = await fetch(this.endpoint + "users/getByCredentials", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    });

    if (response.status != 200) {
      return false;
    } else {
      return await response.json();
    }
  }

  async create(user) {
    const response = await fetch(`${this.endpoint}users`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    });

    return response.status == 201;
  }

  async getById(id) {
    const user = await fetch(`${this.endpoint}users/${id}`);
    return await user.json();
  }
}
