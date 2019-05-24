export class SetService {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  async update(set, id) {
    const response = await fetch(`${this.endpoint}sets/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Acces-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(set)
    });

    return response.status == 202;
  }

  async delete(id) {
    const response = await fetch(`${this.endpoint}sets/${id}`, {
      method: "DELETE"
    });
    return response == 202;
  }
}
