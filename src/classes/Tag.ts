/**
 * Class rapresenting a Tag
 */

export default class Tag {
    protected name
    protected color

    constructor(name: string, color = '#000000') {
        this.name = name
        this.color = color
    }
}
