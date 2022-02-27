export default class Task {
    
    #name: string;
    
    constructor(name: string) {
        this.#name = name
    }
    
    public get name() : string {
        return this.#name;
    }

    public set name(v : string) {
        this.#name = v;
    }

}