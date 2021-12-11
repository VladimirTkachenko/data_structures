export interface IQueue {
    size: number;
    isEmpty: boolean;
    enqueue(element: any): void;
    dequeue(): any;
    front(): any;
}
