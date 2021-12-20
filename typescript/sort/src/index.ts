import { CharactersCollection } from "./CharactersCollection";
import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { LinkedList } from "./LinkedList";
const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection('acasdkdfknnnazzd')
// const sorter = new Sorter(charactersCollection)
// sorter.sort()
// console.log(charactersCollection)

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();
