import { ILinkedListNode } from "../interfaces";

export class LinkedListNode implements ILinkedListNode {
    private _next: ILinkedListNode = null;
    constructor(private _data) {}

    get data() {
        return this._data;
    }

    get next(): ILinkedListNode {
        return this._next
    }

    set next(node: ILinkedListNode) {
        this._next = node;
    }
}