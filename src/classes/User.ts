import Project from './Project'

/**
 * Class representing a User in the web app
 */

export default class User {
    protected username: string
    protected avatar: string
    protected projects: Project[]

    constructor(username = 'user', avatar = '', projects: Project[] = []) {
        this.username = username
        this.avatar = avatar
        this.projects = projects
    }

    public getUsername(): string {
        return this.username
    }

    public setUsername(v: string) {
        this.username = v
    }

    public getValue(): string {
        return this.avatar
    }

    public setAvatar(v: string) {
        this.avatar = v
    }

    public getProjects(): Project[] {
        return this.projects
    }

    public setProjects(v: Project[]) {
        this.projects = v
    }
}
