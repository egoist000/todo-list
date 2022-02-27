import Project from "./Project";

export default class User {
    
    #username: string;
    #avatar: string;
    #projects: Project[];

    constructor(username: string, avatar: string, projects: Project[]) {
        this.#username = username;
        this.#avatar = avatar;
        this.#projects = projects;
    }

    public get username() : string {
        return this.#username;
    }
    
    public set username(v : string) {
        this.username = v;
    }
    
    public get value() : string {
        return this.#avatar;
    }
    
    public set avatar(v : string) {
        this.avatar = v;
    }
    
    public get projects() : Project[] {
        return this.#projects;
    }
    
    public set projects(v : Project[]) {
        this.projects = v;
    }
        
}