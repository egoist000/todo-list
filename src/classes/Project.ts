import Task from "./Task";

export default class Project {

    #name: string;
    #iconName: string;
    #tasks: Task[];

    constructor(name: string, iconName: string, tasks: Task[] = []) {
        this.#name = name;
        this.#iconName = iconName;
        this.#tasks = tasks;
    }

    public get name() : string {
        return this.#name;
    }

    public set name(v : string) {
        this.name= v;
    }
    
    public get iconName() : string {
        return this.#iconName;
    }
    
    public set iconName(v : string) {
        this.iconName = v;
    }
    
    public get tasks() : Task[] {
        return this.#tasks;
    }
    
    public set tasks(v : Task[]) {
        this.tasks = v;
    }
    
}