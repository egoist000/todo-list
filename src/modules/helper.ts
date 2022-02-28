/**
 * 
 * @returns The string that represent current active section
 * eg. projects, tags etc..
 */

export function getCurrentSection() {
    return getCurrentActive().getAttribute("data-section");
}

/**
 * 
 * @returns The current active (highlighted) nav-icon element
 */

export function getCurrentActive() {
    return document.querySelector(".nav-icon.active");
}

/**
 * 
 * @param name name of the font awesome icon
 * @returns the icon element
 */

export function createIcon(name: string, fixedWidth = true) {
    const icon = document.createElement("i");
    if(fixedWidth) { icon.classList.add("fa-fw"); }
    icon.classList.add("fa-solid", name);
    return icon;
}
/**
 * 
 * @param text header text
 * @param level header size
 * @returns header element with the specified text and size
 */

export function createHeader(text: string, level = 4) {
    const header = document.createElement(`h${level}`);
    header.textContent = text;
    return header;
}

export function createInputField(type = "text", minLen = 1, maxLen = 32, placeholder = "An awesome project") {
    const input = document.createElement("input");
    input.type = type;
    input.minLength = minLen;
    input.maxLength = maxLen;
    input.placeholder = placeholder;
    return input;
}