const findTheOldest = function(people) {
  // Calculate age
  // Find greatest age
  // Return name

  const ages = people.map(person => {
    if (person.yearOfDeath) return person.yearOfDeath - person.yearOfBirth;
    else return 2024 - person.yearOfBirth;
  });
  let max = Math.max(...ages);
  let index = ages.indexOf(max);
  return people[index];
};

// Do not edit below this line
module.exports = findTheOldest;
