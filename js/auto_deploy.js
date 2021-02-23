let weeks = {
        week1 : {
            start : '24/01/2021 00:00:00',
            end : '09/02/2021 23:59:59'
        },
        week2 : {
            start : '10/02/2021 00:00:00',
            end : '16/02/2021 23:59:59'
        },
        week3 : {
            start : '17/02/2021 00:00:00',
            end : '23/02/2021 23:59:59'
        },
        week4 : {
            start : '24/02/2021 00:00:00',
            end : '02/03/2021 23:59:59'
        },
        week5 : {
            start : '03/03/2021 00:00:00',
            end : '09/03/2021 23:59:59'
        },
        // week6 : {
        //     start : '2021/03/10 00:00:00',
        //     end : '2021/03/16 23:59:59'
        // }
}

let currentDate = new Date();

let utc_offset = currentDate.getTimezoneOffset();
currentDate.setMinutes(currentDate.getMinutes() + utc_offset);
let usa_offset = 5*60;
currentDate.setMinutes(currentDate.getMinutes() - usa_offset);

if(location.search){
    currentDate = new Date(location.search.replace('?currentDate=', ''));
}
console.log(currentDate);
let found = false;

for (const week in weeks) {
    let weekStart = new Date(weeks[week]['start']);
    let weekEnd = new Date(weeks[week]['end']);
    if(weekStart <= currentDate && currentDate <= weekEnd){
        found = true;
    }else{
        document.getElementById(week).remove();
    } 
}
// if(found !== false){
//     document.getElementById('default').remove();
// }

