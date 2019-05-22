export class WorkOutService {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  async getByUserId(id) {
    const workouts = await fetch(`${this.endpoint}/workouts/getByUserId/${id}`);
    return await workouts.json();
  }

  async getById(id) {
    const workout = await fetch(`${this.endpoint}/workouts/${id}`);
    return await workout.json();
  }
}
