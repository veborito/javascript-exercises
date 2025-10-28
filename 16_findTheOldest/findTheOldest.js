const findTheOldest = function(people) {
  return people.reduce((oldest, curr) => {
    let ageOldest;
    let ageCurr;
    let currYear = new Date().getFullYear();

    if (oldest.yearOfBirth === undefined)
      return curr;

    if (oldest.yearOfDeath !== undefined)
      ageOldest = oldest.yearOfDeath - oldest.yearOfBirth;
    else
      ageOldest = currYear - oldest.yearOfBirth;

    if (curr.yearOfDeath !== undefined)
      ageCurr = curr.yearOfDeath - curr.yearOfBirth;
    else
      ageCurr = currYear - curr.yearOfBirth;

  
    //console.log(`ageCurr: ${ageCurr}, ageOldest: ${ageOldest}`);
    if (ageCurr > ageOldest)
      return curr;
    else
      return oldest;
  } , {})
};

const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
