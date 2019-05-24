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

  async update(workout, id) {
    const response = await fetch(`${this.endpoint}workouts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Acces-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(workout)
    });

    return response.status == 202;
  }

  async create(workout) {
    const response = await fetch(`${this.endpoint}workouts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(workout)
    });

    return response.status == 201;
  }
}
