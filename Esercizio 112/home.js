const values = ['a', 'b', 'c'];

const set= values.filter (function(item) {
    console.log('item: ', item);
    return item > 'b';
});

console.log( set) ;