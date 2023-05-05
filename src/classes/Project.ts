import Task from './Task'

/**
 * Class representing a Project
 */

export default class Project {
    protected name: string
    protected iconName: string
    protected tasks: Task[]

    constructor(name: string, iconName: string, tasks: Task[] = []) {
        this.name = name
        this.iconName = iconName
        this.tasks = tasks
    }

    public getName(): string {
        return this.name
    }

    public getIconName(): string {
        return this.iconName
    }
}
