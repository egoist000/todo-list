import Project from '../classes/Project'
import { getUser, saveUser } from './App'
import {
    getCurrentSection,
    createIcon,
    createHeader,
    createInputField,
} from './helper'
import { createProjectSidebarItem } from './UI'

const ICONS_SET = [
    'fa-crow',
    'fa-cat',
    'fa-bug',
    'fa-gear',
    'fa-martini-glass-citrus',
    'fa-mug-saucer',
    'fa-book-skull',
    'fa-bomb',
]

const sidebarItems = document.querySelector('.sidebar-items')
const editActions = document.querySelector('.edit-actions')

let inEditMode = false

function saveProject(project: Element, userLoggedIn = false) {
    const itemInputField = (
        project.querySelector('.item-input') as HTMLInputElement
    ).value
    const itemIcon = project.querySelector('i').classList[2]
    //save a new project
    const newProject = new Project(itemInputField, itemIcon)
    project.querySelector('h4').textContent = itemInputField
    project.classList.remove('editable')
    project.querySelector('i').removeEventListener('click', changeIcon)
    project.addEventListener('click', selectSidebarItem)
    if (userLoggedIn) {
        //TODO: save to the cloud
    } else {
        //TODO: save to localStorage
        getUser().getProjects().push(newProject)
        saveUser()
        console.log(getUser().getProjects())
    }
}

function unselectItem() {
    const selected = sidebarItems.querySelector('.item.selected')
    if (selected != null) {
        selected.classList.remove('selected')
    }
}

function selectRandomIcon() {
    const rndIndex = Math.floor(Math.random() * ICONS_SET.length)
    return ICONS_SET[rndIndex]
}

function changeIcon(e: Event & { target: HTMLButtonElement }) {
    if (e.target.parentElement.classList.contains('editable')) {
        const name = e.target.classList[2]
        e.target.classList.remove(name)
        const currentIndex = ICONS_SET.indexOf(name)
        currentIndex >= ICONS_SET.length - 1
            ? e.target.classList.add(ICONS_SET[0])
            : e.target.classList.add(ICONS_SET[currentIndex + 1])
    }
}

function editNewProject() {
    const projectContainer = document.createElement('div')
    projectContainer.classList.add('item', 'editable')
    const projectIcon = createIcon(selectRandomIcon())
    projectIcon.addEventListener('click', changeIcon)
    const projectName = createHeader('An awesome project')
    const input = createInputField()
    input.classList.add('item-input')
    projectContainer.append(projectIcon, projectName, input)
    sidebarItems.prepend(projectContainer)
    input.focus()
}

function editTags() {
    //TODO
    return
}

function toggleEditActions() {
    editActions.classList.toggle('active')
    unselectItem()
    inEditMode = !inEditMode
}

function handleAddAction() {
    const section = getCurrentSection()
    switch (section) {
        case 'projects':
            editNewProject()
            break
        case 'tags':
            editTags()
            break
        default:
            break
    }
}

/* handle a generic action button click */
function handleAction(e: Event & { target: HTMLButtonElement }) {
    if (!inEditMode) {
        switch (e.target.id) {
            case 'action-add':
                handleAddAction()
                break
            case 'action-modify':
                break
            case 'action-delete':
                break
            default:
                break
        }
        toggleEditActions()
    }
}

function getSelectedItem() {
    return document.querySelector('.item.selected')
}

function selectSidebarItem(e: Event & { currentTarget: HTMLButtonElement }) {
    const currSelectedItem = getSelectedItem()
    if (currSelectedItem !== e.currentTarget && currSelectedItem !== null) {
        currSelectedItem.classList.remove('selected')
    }
    if (!e.currentTarget.classList.contains('editable')) {
        //An item in edit mode is not selectable
        e.currentTarget.classList.toggle('selected')
    }
}

function saveCurrentEdit() {
    console.log('save edit..')
    const currentEditedItem = document.querySelector('.item.editable')
    if (getCurrentSection() == 'projects') {
        saveProject(currentEditedItem)
    } else if (getCurrentSection() == 'tags') {
        //save a new tag
    }
    toggleEditActions()
}

function cancelCurrentEdit() {
    console.log('cancel edit..')
    const currentEditedItem = document.querySelector('.item.editable')
    currentEditedItem.parentNode.removeChild(currentEditedItem)
    toggleEditActions()
}

function populateWithProjects() {
    sidebarItems.innerHTML = ''
    const projects = getUser().getProjects()
    console.log(projects)
    projects.forEach((project) => {
        const item = createProjectSidebarItem(
            project.getName(),
            project.getIconName()
        )
        item.addEventListener('click', selectSidebarItem)
        sidebarItems.prepend(item)
    })
}

export function populateSidebar(section: string) {
    switch (section) {
        case 'projects':
            //populate sidebar with user projects
            console.log('populating sidebar with projects')
            populateWithProjects()
            break
        case 'tags':
            console.log('populating sidebar with project tags')
            break
        default:
            // Account sidebar information
            console.log('user info')
            break
    }
}

export default function initSidebar() {
    const addBtn = document.getElementById('action-add')
    const items = document.querySelectorAll('.item')
    const save = document.getElementById('action-save')
    const cancel = document.getElementById('action-cancel')

    //Init Event listeners

    save.addEventListener('click', saveCurrentEdit)
    cancel.addEventListener('click', cancelCurrentEdit)

    addBtn.addEventListener('click', handleAction)

    items.forEach((item) => {
        item.addEventListener('click', selectSidebarItem)
    })
}
