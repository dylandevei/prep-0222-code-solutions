var person = {
  firstName: 'Dylan',
  lastName: 'De Vei',
  hobby: 'Watching Sports'
};

console.log(person);

console.log('The person\'s name is: ' + person.firstName + ' ' + person.lastName + '.');

person.job = 'pizza maker';
person.previousJob = 'student';

console.log('The person\'s current job is: ' + person.job + '.');
console.log('The person\'s previous job is: ' + person.previousJob + '.');

console.log('The complete person object:', person);
