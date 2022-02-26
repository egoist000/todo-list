import { getCurrentSection, createIcon, createHeader, createInputField } from "./helper";

const ICONS_SET = ["crow", "cat", "bug", "gear", "martini-glass-citrus", "mug-saucer", "book-skull", "bomb"];
const sidebarItems = document.querySelector(".sidebar-items");
const editActions = document.querySelector(".edit-actions");

let inEditMode = false;

function selectRandomIcon() {
    const rndIndex = Math.floor(Math.random() * ICONS_SET.length);
    return ICONS_SET[rndIndex];
}

function createNewProject() {
    const projectContainer = document.createElement("div");
    projectContainer.classList.add("item", "editable");
    const projectIcon = createIcon(selectRandomIcon());
    const projectName = createHeader("An awesome project");
    const input = createInputField();
    input.classList.add("item-input");
    projectContainer.appendChild(projectIcon);
    projectContainer.appendChild(projectName);
    projectContainer.appendChild(input);
    sidebarItems.appendChild(projectContainer);
}

function createNewTag() {
    //TODO
    return;
}

function displayEditActions() {
    //TODO
    return;
}

function handleAddAction() {
    const section = getCurrentSection();
    displayEditActions();
    switch (section) {
        case "projects":
            createNewProject();
            break;
        case "tags":
            createNewTag();
            break;
        default:
            break;
    }
}

/* handle a generic action button click */
function handleAction(e) {
    if(!inEditMode) {
        switch(e.target.id) {
            case "action-add":
                handleAddAction();
                break;
            case "action-modify":
                break;
            case "action-delete":
                break;
            default:
                break;
        }
        inEditMode = true;
        editActions.classList.toggle("active");
    }
}

export default function initSidebar() {
    const addBtn = document.getElementById("action-add");

    addBtn.addEventListener("click", handleAction);
}