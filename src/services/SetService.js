export class SetService {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  async updateSet(set) {
    const response = await fetch(`${this.endpoint}sets`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(set)
    });
    console.log(response);
  }
}
