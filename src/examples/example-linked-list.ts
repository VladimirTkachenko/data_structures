import { LinkedList } from "../linked-list";
console.log(1);
try {
    const linkedList = new LinkedList();
    linkedList.add('one');
    linkedList.add('three');
    linkedList.add('two');
    linkedList.add('five');
    linkedList.add('ten');
    linkedList.add('hight');
    linkedList.add('end');
    console.log(linkedList.size)
    console.log(linkedList.removeAt(3));
    console.log(linkedList.removeAt(3));
    console.log(linkedList.indexOf('end'));
    console.log(linkedList.indexOf('test'));
    console.log(linkedList.size);
} catch (e) {
    console.error(e);
}