function getDayOfTheWeek(dateString) {
    let [day, month, year] = dateString.split('/').map(Number);
    let date = new Date(year, month - 1, day);
    let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[date.getDay()];
}

// Example usage:
console.log(getDayOfTheWeek('10/11/1997')); // Monday
console.log(getDayOfTheWeek('11/10/2020')); // Sunday