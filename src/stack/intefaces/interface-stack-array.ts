export interface IStackA {
    isEmpty: boolean;
    size: number;
    push(element: any): void;
    pop(): any;
    peek(): any;
    clear(): void;
}
