import { IStackA } from "../intefaces";

export class StackA implements IStackA {
    
    private _collection: Array<any>;

    constructor(inArray: Array<any> = []) {
        this._collection = inArray;
    }

    get isEmpty(): boolean {
        return this._collection.length === 0;
    }

    get size(): number {
        return this._collection.length;
    }

    push<T>(element: T): void {
        this._collection.push(element);
    }

    pop(): any {
        if (this.isEmpty) {
            throw new Error("collection id empty");
        }
        return this._collection.pop();
    }

    peek(): any {
        return this._collection[this.size - 1];
    }

    clear(): void {
        this._collection.length = 0;
    }
}