/**bai1
 * 
 */
const today = new Date();
const tomorrow = new Date();
 
function todayprev() {
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
    var prevngay;
   
    if (day < 0) {
        prevngay = "Không xác định được";
    }
    else {
        switch (month) {
            case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                if (day > 31) {
                    prevngay = "Không xác định được";
                }
                else if (day == 1) {
                    prevngay = 31 + "/" + 12 + "/" + --year;
                }
                else {
                    prevngay = --day + "/" + month + "/" + year;
                }
                break;
            case 4: case 6: case 9: case 11: 
                if (day > 30) {
                    prevngay = "Không xác định được";
                }
                else if (day == 1) {
                    prevngay = 30 + "/" + --month + "/" + year;
                }
                else {
                    prevngay = --day + "/" + month + "/" + year;
                }
                break; 
            case 2:
                if (day > 28) {
                    prevngay = "Không xác định được";
                }
                else if (day == 1) {
                    prevngay = 28 + "/" + --month + "/" + year;
                }
                else {
                    prevngay = --day + "/" + month + "/" + year;
                }

                break;
                
            default:
                prevngay = "Không hợp lệ";
                break;
        }
    }
    document.getElementById("txtResultbai1").innerHTML = prevngay;
}
document.getElementById("prev").onclick = todayprev;

function todaynext() {
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
  
    var nextngay;
    if (day < 0) {
        nextngay = "Không xác định được";
    }
    else {
        switch (month) {
            case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                if (day > 31) {
                    nextngay = "Không xác định được";
                }
                else if (day == 1) {
                    nextngay = 31 + "/" + 12 + "/" + ++year;
                }
                else {
                    nextngay = ++day + "/" + month + "/" + year;
                }
                break;
            case 4: case 6: case 9: case 11: 
                if (day > 30) {
                    nextngay = "Không xác định được";
                }
                else if (day == 1) {
                    nextngay = 30 + "/" + ++month + "/" + year;
                }
                else {
                    nextngay = ++day + "/" + month + "/" + year;
                }
                break; 
            case 2:
                if (day > 28) {
                    nextngay = "Không xác định được";
                }
                else if (day == 1) {
                    nextngay = 28 + "/" + ++month + "/" + year;
                }
                else {
                    nextngay = ++day + "/" + month + "/" + year;
                }

                break;
                
            default:
                nextngay = "Không hợp lệ";
                break;
        }
    }
    document.getElementById("txtResultbai1").innerHTML = nextngay;
}
document.getElementById("next").onclick = todaynext;
