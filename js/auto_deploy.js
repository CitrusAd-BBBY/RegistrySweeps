let weeks = {
        week1 : {
            start : '2021/01/24 00:00:00',
            end : '2021/02/09 23:59:59'
        },
        week2 : {
            start : '2021/02/10 00:00:00',
            end : '2021/02/16 23:59:59'
        },
        week3 : {
            start : '2021/02/17 00:00:00',
            end : '2021/02/23 23:59:59'
        },
        week4 : {
            start : '2021/02/24 00:00:00',
            end : '2021/03/02 23:59:59'
        },
        week5 : {
            start : '2021/03/03 00:00:00',
            end : '2021/03/09 23:59:59'
        },
        // week6 : {
        //     start : '2021/03/10 00:00:00',
        //     end : '2021/03/16 23:59:59'
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
// if(found !== false){
//     document.getElementById('default').remove();
// }

