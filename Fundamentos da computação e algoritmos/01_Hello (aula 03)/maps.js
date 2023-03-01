const contacts = new Map();

contacts.set('Jessie', {phone: '236716372', address: '123 N 1st Ave'});
console.log(contacts.has('Jessie'));
contacts.set('Hilary', {phone: '873871112', address: '321 S 2nd St'});
console.log(contacts.get('Jessie'));
//contacts.delete('Jessie');
console.log(contacts.size);

for(const [key, value] of contacts) {
    console.log(key + ' = ' + value);
}

for(const key of contacts.keys()) {
    console.log(key);
}

for(const value of contacts.values()) {
    console.log(value);
}

for(const [key, value] of contacts.entries()) {
    console.log(key + ' = ' + value)
}