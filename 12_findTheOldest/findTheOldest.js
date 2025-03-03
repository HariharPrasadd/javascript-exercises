const findTheOldest = function(people) {
    const date = new Date();
    const currentYear = date.getFullYear();
    let peopleAges = people.map((person) => {
        return {name: person.name, age: (person.yearOfDeath ? person.yearOfDeath : currentYear) - person.yearOfBirth}
    }
    )
    peopleAges.sort((firstPerson, secondPerson) => firstPerson.age > secondPerson.age ? 1 : -1);
    return peopleAges[peopleAges.length-1];
};
// Do not edit below this line
module.exports = findTheOldest;
