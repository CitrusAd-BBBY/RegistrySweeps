let weeks = {
        week1 : {
            start : '01/24/2021 00:00:00',
            end : '02/09/2021 23:59:59'
        },
        week2 : {
            start : '02/10/2021 00:00:00',
            end : '02/16/2021 23:59:59'
        },
        week3 : {
            start : '02/17/2021 00:00:00',
            end : '02/23/2021 23:59:59'
        },
        week4 : {
            start : '02/24/2021 00:00:00',
            end : '03/02/2021 23:59:59'
        },
        week5 : {
            start : '03/03/2021 00:00:00',
            end : '03/09/2021 23:59:59'
        },
        // week6 : {
        //     start : '03/10/2021 00:00:00',
        //     end : '16/03/16 23:59:59'
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

