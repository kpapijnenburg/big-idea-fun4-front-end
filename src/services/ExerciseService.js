export class ExerciseService {
    constructor(endpoint){
        this.endpoint = endpoint;
    }

    async getAll(){
        const response = await fetch(`${this.endpoint}exercises`);
        return await response.json();
    }
}