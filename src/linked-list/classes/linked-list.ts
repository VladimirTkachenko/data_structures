import { LinkedListNode } from "./";
import { ILinkedListNode } from "../interfaces";
import { ELinkedListLengthOpearations } from "../enums";

interface ILinkedList {
    size: number;
    head: ILinkedListNode;
    isEmpty: boolean;
    add(element: any): void;
    remove(element: any): void;
    indexOf(element: any): number;
    elementAt(idx: number): any;
    addAt(idx: number, element: any): void;
    removeAt(idx: number): any;
    checkIndex(idx: number): boolean;
}

export class LinkedList implements ILinkedList {
    private _length = 0;
    private _head: ILinkedListNode = null;

    get size(): number {
        return this._length;
    }

    get head(): ILinkedListNode {
        return this._head;
    }

    get isEmpty(): boolean {
        return this.size === 0;
    }

    set head(h) {
        this._head = h;
    }

    add (element: any): void {
        let node = new LinkedListNode(element);
        if (this.head === null) {
            this.head = node; 
        } else {
            let currentNode = this.head;
            while(currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        this.changeLength("increment");
    }

    remove(element: any): void {
        let currentNode = this.head;
        let previousNode;
        if (currentNode.data === element) {
            this.head = currentNode.next;
        } else {
            while(currentNode.data !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        this.changeLength("decrement");
    }    

    private changeLength(operation: keyof typeof ELinkedListLengthOpearations): void {
        if (operation === "increment") {
            this._length++;
        } else if (operation === "decrement") {
            if (this._length > 0) {
                this._length--;
            }
        } else {
            throw new Error("operator forbidden");
        }
    }

    indexOf(element: any): number {
        let idx = 0;
        let f = false;
        let currentNode = this.head;
        while(currentNode) {
            f = currentNode.data === element;
            if (f) {
                break;
            }
            currentNode = currentNode.next;
            idx++;
        }
        return f ? idx : -1;
    }

    elementAt(idx: number): any {
        if (this.checkIndex(idx)) {
            throw new Error("index of element not available");
        }
        let currentIdx = 0;
        let currentNode = this.head;
        while(currentIdx < idx) {
            currentNode = currentNode.next;
            currentIdx++;
        } 
        return currentNode.data;
    }

    addAt(idx: number, element: any): void {
        if (this.checkIndex(idx)) {
            throw new Error("index of element not available");
        }
        let node = new LinkedListNode(element);
        let currentNode = this.head;
        let previousNode: ILinkedListNode;
        let currentIdx = 0;
        if (idx === 0) {
            node.next = currentNode;
            this.head = node;
        } else {
            while (currentIdx < idx) {
                previousNode = currentNode;
                currentNode = currentNode.next;
                currentIdx++;
            }
            node.next = currentNode;
            previousNode.next = node;
        }
        this.changeLength("increment");
    }

    removeAt(idx: number): any {
        if (this.checkIndex(idx)) {
            throw new Error("index of element not available");
        }
        let previousNode: ILinkedListNode;
        let currentIdx = 0;
        let currentNode = this.head;
        if (idx === 0) {
            this.head = currentNode.next;
        } else {
            while (currentIdx < idx) {
                previousNode = currentNode;
                currentNode = currentNode.next;
                currentIdx++;
            }
            previousNode.next = currentNode.next;
        }
        this.changeLength("decrement");
        return currentNode.data;
    }

    checkIndex(idx: number): boolean {
        return this.size - 1 <= idx; 
    }
}
