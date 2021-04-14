const initialArray = [
    {name: 'Adam', age: 35 },
    {name: 'John', age: 35},
    {name: 'Gabriel', age: 42},
    {name: 'Andrea', age: 25},
    {name: 'Carol', age: 25}
]

const groupedMap = initialArray.reduce(
    (entryMap, e) => entryMap.set(e.age, [...entryMap.get(e.age)||[], e]),
    new Map()
);

const countingMap = initialArray.reduce(
    (entryMap, e) => entryMap.set(e.age, (entryMap.get(e.age)||0)+1),
    new Map()
);

console.log([...groupedMap.entries()].sort());
console.log([...countingMap.entries()].sort());
