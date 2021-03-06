import { Person } from './Person.js';

const addPerson = config => {
  let people = getPeople();
  people.push( new Person( config ) );
  const peopleJSON = JSON.stringify( people );
  localStorage.setItem( 'people', peopleJSON );
};

const getPeople = () => {
  let people;
  let peopleDeserialized = localStorage.getItem('people');
  if (! peopleDeserialized || peopleDeserialized.length === 0) {
    people = [...defaultPeople];
  } else {
    people = JSON.parse( peopleDeserialized ).map( person => new Person( person ) );
  }

  return people;
};

const defaultPeople = [
  new Person( {
    'firstName'  : 'Jenny',
    'lastName'   : 'Sparks',
    'birthDate': '1995-01-01'
  } ),
  new Person( {
    'firstName'  : 'Lucas',
    'lastName'   : 'Trent',
    'gender'     : 'male',
    'birthDate': '1983-02-12'
  } ),
  new Person( {
    'firstName'  : 'Jack',
    'lastName'   : 'Hawksmoor',
    'gender'     : 'male',
    'birthDate': '1974-03-26'
  } ),
  new Person( {
    'firstName'  : 'Jeroen',
    'lastName'   : 'Thornedike',
    'gender'     : 'male',
    'birthDate': '1984-04-07'
  } ),
  new Person( {
    'firstName'  : 'Angela',
    'lastName'   : 'Cortez',
    'birthDate': '1979-05-15'
  } ),
  new Person( {
    'firstName'  : 'Shen',
    'lastName'   : 'Li-Min',
    'birthDate': '1990-06-30'
  } ),
  new Person( {
    'firstName'  : 'Spider',
    'lastName'   : 'Jerusalem',
    'gender'     : 'male',
    'birthDate': '1977-07-05'
  } ),
  new Person( {
    'firstName'  : 'Jakita',
    'lastName'   : 'Wagner',
    'birthDate': '1988-08-12'
  } ),
  new Person( {
    'firstName'  : 'Elijah',
    'lastName'   : 'Snow',
    'gender'     : 'male',
    'birthDate': '1968-09-19'
  } ),
  new Person( {
    'firstName'  : 'Ambrose',
    'lastName'   : 'Chase',
    'gender'     : 'male',
    'birthDate': '1993-10-22'
  } )
];

export { addPerson, getPeople };