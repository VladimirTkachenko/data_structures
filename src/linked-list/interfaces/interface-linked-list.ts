import { ILinkedListNode } from "./interface-linked-list-node";

export interface ILinkedList {
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