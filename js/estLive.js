let weeks = {
        week1 : {
            start : '2021-01-18',
            end : '2021-01-21'
        },
        week2 : {
            start : '2021-01-22',
            end : '2021-02-01'
        }
        // week3 : {
        //     start : '2021-02-02',
        //     end : '2021-02-05'
        // },
        // week4 : {
        //     start : '2021-02-06',
        //     end : '2021-02-10'
        // },
        // week5 : {
        //     start : '2021-02-11',
        //     end : '2021-02-15'
        // },
        // week6 : {
        //     start : '2021-02-16',
        //     end : '2021-02-22'
        // }
}

let currentDate = new Date()
let utc_offset = currentDate.getTimezoneOffset();
currentDate.setMinutes(currentDate.getMinutes() + utc_offset);
let usa_offset = 5*60;
currentDate.setMinutes(currentDate.getMinutes() - usa_offset);
console.log(currentDate);
let found = false;

for (const week in weeks) {
    let weekStart = new Date(weeks[week]['start']);
    let weekEnd = new Date(weeks[week]['end']);
    if(weekStart < currentDate && currentDate <= weekEnd){
        found = true;
    }else{
        document.getElementById(week).remove();
    } 
}
if(found !== false){
    document.getElementById('default').remove();
}

