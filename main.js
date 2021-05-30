var input = prompt("Wpisz pierwsza date (YYYY-MM-DD):")
var date1 = new Date(input)
input = prompt("Wpisz druga date (YYYY-MM-DD):")
var date2 = new Date(input)

function workingDays(date1, date2){
    var differenceInTime = date2.getTime() - date1.getTime();
  
    var differenceInDays = differenceInTime / (1000 * 60 * 60 * 24);

    var currentDay = date1.getDay()

    var counter = 0
    for (let i = 0; i <= differenceInDays; i++) {
        if (currentDay != 0 && currentDay != 6) {
            counter++
        }
        if (currentDay == 6) {
            currentDay = 0
        } else {
            currentDay++
        }
    }

   return counter
}
console.log("Ilosc dni pracujacych miedzy datami to: " + workingDays(date1, date2))