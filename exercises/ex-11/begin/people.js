import { personFactory } from './Person.js';

const people = [
  personFactory( {
    'firstName'  : 'Jenny',
    'lastName'   : 'Sparks',
    'birthDate': '1995-01-01'
  } ),
  personFactory( {
    'firstName'  : 'Lucas',
    'lastName'   : 'Trent',
    'gender'     : 'male',
    'birthDate': '1983-02-12'
  } ),
  personFactory( {
    'firstName'  : 'Jack',
    'lastName'   : 'Hawksmoor',
    'gender'     : 'male',
    'birthDate': '1974-03-26'
  } ),
  personFactory( {
    'firstName'  : 'Jeroen',
    'lastName'   : 'Thornedike',
    'gender'     : 'male',
    'birthDate': '1984-04-07'
  } ),
  personFactory( {
    'firstName'  : 'Angela',
    'lastName'   : 'Cortez',
    'birthDate': '1979-05-15'
  } ),
  personFactory( {
    'firstName'  : 'Shen',
    'lastName'   : 'Li-Min',
    'birthDate': '1990-06-30'
  } ),
  personFactory( {
    'firstName'  : 'Spider',
    'lastName'   : 'Jerusalem',
    'gender'     : 'male',
    'birthDate': '1977-07-05'
  } ),
  personFactory( {
    'firstName'  : 'Jakita',
    'lastName'   : 'Wagner',
    'birthDate': '1988-08-12'
  } ),
  personFactory( {
    'firstName'  : 'Elijah',
    'lastName'   : 'Snow',
    'gender'     : 'male',
    'birthDate': '1968-09-19'
  } ),
  personFactory( {
    'firstName'  : 'Ambrose',
    'lastName'   : 'Chase',
    'gender'     : 'male',
    'birthDate': '1993-10-22'
  } )
];

export { personFactory, people };