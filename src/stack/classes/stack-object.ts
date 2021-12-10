import { IStackO } from "../intefaces";

export class StackO implements IStackO {
    
    private _collection: {[key:number]: any};
    private _counter: number;

    constructor(inArray: Array<any> = []) {
        this._counter = 0 
        this._collection = {};
        if (inArray.length) {
            inArray.forEach(el => {
                this._collection[this._counter] = el;
                this._counter++;
            });
        }
    }

    get isEmpty(): boolean {
        return this._counter === 0;
    }

    get size(): number {
        return this._counter;
    }

    push<T>(element: T): void {
        this._collection[this._counter] = element;
        this._counter++;
    }

    pop(): any {
        if (this.isEmpty) {
            throw new Error("collection id empty");
        }
        const removedData = this._collection[this._counter - 1];
        this._counter--;
        return removedData;
    }

    peek(): any {
        return this._collection[this._counter - 1];
    }

    clear(): void {
        this._counter = 0;
        this._collection = {};
    }
}