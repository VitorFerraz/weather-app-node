console.log('Starting app');

setTimeout(()=>{
console.log('inside of callback');
},3);

setTimeout(()=>{
console.log('call back novo');
},0);

console.log('Finishing up');