import {
    StackA,
    StackO
} from "../";

try {
    const INIT_DATA = ['1', '2'];

    const stackA = new StackA(INIT_DATA);
    const stackO = new StackO(INIT_DATA);

    stackA.push('3');
    stackA.push('4');
    stackA.push('testA');
    console.log(stackA.peek());
    console.log(stackA.pop());
    console.log(stackA.peek());
    console.log(stackA.isEmpty);
    console.log(stackA.size);
    console.log(stackA.clear());
    console.log(stackA.isEmpty);
    console.log(stackA.size);

    stackO.push('o3');
    stackO.push('o4');
    stackO.push('testO');
    console.log(stackO);
    console.log(stackO.peek());
    console.log(stackO.pop());
    console.log(stackO.peek());
    console.log(stackO.isEmpty);
    console.log(stackO.size);
    console.log(stackO.clear());
    console.log(stackO.isEmpty);
    console.log(stackO.size);

} catch (e) {
    console.error(e);
}