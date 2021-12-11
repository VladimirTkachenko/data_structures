import { IQueue } from "../interfaces";


export class Queue implements IQueue {
    private collection: Array<any>;

    constructor() {
        this.collection = [];    
    }

    get size(): number {
        return this.collection.length;
    }

    get isEmpty(): boolean {
        return this.collection.length === 0;
    }

    enqueue(element: any): void {
        this.collection.push(element);
    }

    dequeue(): any {
        if (this.isEmpty) {
            throw new Error('queue is empty');
        }
        return this.collection.shift();
    }

    front(): any {
        if (this.isEmpty) {
            throw new Error('queue is empty');
        }
        return this.collection[0];
    }

}