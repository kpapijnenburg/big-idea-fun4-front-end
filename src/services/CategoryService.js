export class CategoryService {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  async getAll() {
    const response = await fetch(`${this.endpoint}categories`);
    return await response.json();
  }
}
