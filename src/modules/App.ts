import Project from '../classes/Project'
import User from '../classes/User'
import initUi from './UI'

let user: User = null //User in this app instance

function createNewUser() {
    user = new User() //New user if not previously created in localStorage
    saveUser()
}

function checkUser() {
    const userJson = localStorage.getItem('user')
    if (userJson == null) {
        //Not saved in localstorage
        createNewUser()
    } else {
        user = Object.assign(new User(), JSON.parse(userJson))
        const projects: Project[] = []
        user.getProjects().forEach((project) => {
            const p = Object.assign(new Project('', ''), project)
            projects.push(p)
        })
        user.setProjects(projects)
    }
    console.log(user)
}

export function getUser() {
    return user
}

export function saveUser() {
    localStorage.setItem('user', JSON.stringify(user))
}

export default function initApp() {
    checkUser()
    initUi()
}
