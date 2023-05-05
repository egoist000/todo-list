import { createHeader, createIcon, createInputField } from './helper'
import initNavbar from './navbar'
import initSidebar from './sidebar'

export function createProjectSidebarItem(
    projectName: string,
    projectIcon: string
) {
    const projectContainer = document.createElement('div')
    projectContainer.classList.add('item')
    const icon = createIcon(projectIcon)
    const name = createHeader(projectName)
    name.classList.add('item-name')
    const input = createInputField(projectName)
    projectContainer.appendChild(icon)
    projectContainer.appendChild(name)
    projectContainer.appendChild(input)
    return projectContainer
}

export default function initUi() {
    initSidebar()
    initNavbar()
}
