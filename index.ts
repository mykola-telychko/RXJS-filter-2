import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/filtering/filter

// Example 2: filter objects based on property

//emit ({name: 'Joe', age: 31}, {name: 'Bob', age:25})
const source = from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }]);
//filter out people with age under 30
const example = source.pipe(filter(person => person.age >= 30));
//output: "Over 30: Joe"
const subscribe = example.subscribe(val => console.log(`Over 30: ${val.name}`));