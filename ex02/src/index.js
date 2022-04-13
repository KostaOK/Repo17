const workDays = ['MON' , 'TUE' , 'WED' , 'THU' , 'FRI'];

function myWeek(days) {
    
    const week = ['SAT', 'SUN']; 
    week = [...workDays, ...week]
    return week;
}
console.log(myWeek);
module.exports = myWeek;