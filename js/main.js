/*bai6
 * Khối 1: Dữ liệu đang có sẵn (Input)
 * ngày tháng năm
 *
 *Khối 2:Các bước xử lý code
 * B1: Tạo biến day,month,year
 * B2: Gan giá trị cho biến
 * B3: Lập công thức tính toán
 *    - Xác định số ngày trong mỗi tháng
 *    - Dùng switch cho các tháng, nhóm các tháng cùng ngày lại với nhau
 *    - Dựa vào số ngày của tháng để tính ngài mai, ngày hôm qua
 *    - Dung function namNhuan để biết có phải năm nhuận không, từ đó
 *      tính số ngày tháng 2 (28 hoặc 29)
 *
 * B4: Thông báo kết quả ở website
 *
 *Khối 3:Kết quả (Output)
 *  function todayprev -> prevday -> ngay hom qua
 *  function todaynext -> nextday -> ngay mai
 *  prevday hiên thi kết quả txtResultbai5
 *  nextday hiên thi kết quả txtResultbai5
 */


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
    document.getElementById("txtResultbai5").innerHTML = prevngay;
}
document.getElementById("prevday").onclick = todayprev;

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
    document.getElementById("txtResultbai5").innerHTML = nextngay;
}
document.getElementById("nextday").onclick = todaynext;

/**bai6
 * Khối 1: Dữ liệu đang có sẵn (Input)
 * năm, tháng
 *
 *Khối 2:Các bước xử lý code
 * B1: Tạo biến month, year
 * B2: Gan giá trị cho biến
 * B3: Lập công thức tính toán
 *      tinhngay = "Tháng " + month + " Năm " + year + " có 31 Ngày"
 *     - Tháng 1,3,5,7,8,10,12 có 31 ngày
 *     - Tháng 2 có 28 hoặc 29 ngày
 *     - Các tháng còn lại có 30 ngày
 *     - Dùng switch theo biến month để tính số ngày
 *
 * B4: Thông báo kết quả ở website
 *
 *Khối 3:Kết quả (Output)
 *btnTinhNgay hiên thi kết quả txtResultbai6
 * 
 */
function tinhngay() {
    var month = parseInt(document.getElementById("nhapThang").value);
    var year = parseInt(document.getElementById("nhapNam").value);

    var tinhngay;

    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            tinhngay = "Tháng " + month + " Năm " + year + " có 31 Ngày";
            break;
        case 4: case 6: case 9: case 11:
            tinhngay = "Tháng " + month + " Năm " + year + " có 30 Ngày";
        case 2:
            if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 == 0)) {
                tinhngay = "Tháng " + month + " Năm " + year + " có 29 Ngày";
            }
            else {
                tinhngay = "Tháng " + month + " Năm " + year + " có 28 Ngày";
            }

        default:

            break;
    }
    document.getElementById("txtResultbai6").innerHTML = tinhngay;
}

document.getElementById("btnTinhNgay").onclick = tinhngay;


/**Bài7
 * Khối 1: Dữ liệu đang có sẵn (Input)
 * số có 3 chữ số
 *
 * Khối 2:Các bước xử lý code
 * B1: Tạo biến hangtram, hangchuc, hangdonvi
 * B2: Gan giá trị cho biến count = 0, các biến còn lại lấy từ form
 * B3: Lập công thức tính toán
 *     -  trăm = Math.floor(number / 100)
 *     -  chục =  Math.floor((number % 100) / 10)
 *     -  đơn vị =(number % 100) % 10
 *     - switch case để đọc số từng hàng
 *
 *
 * B4: Thông báo kết quả ở website
 *
 *Khối 3:Kết quả (Output)
 * btnDocSo hiên thi kết quả txtResultbai7
 * 
 */
function docso() {
    var so = Number(document.getElementById("nhapSo").value);
    hangtram = Math.floor(so / 100);
    hangchuc = Math.floor((so % 100) / 10);
    hangdonvi = (so % 100) % 10;
    var doc = '';

    switch (hangtram) {
        case 1:
            doc += 'một trăm ';
            break;
        case 2:
            doc += 'hai trăm ';
            break;
        case 3:
            doc += 'ba trăm ';
            break;
        case 4:
            doc += 'bốn trăm ';
            break;
        case 5:
            doc += 'năm trăm ';
            break;
        case 6:
            doc += 'sáu trăm ';
            break;
        case 7:
            doc += 'bảy trăm ';
            break;
        case 8:
            doc += 'tám trăm ';
            break;
        case 9:
            doc += 'chín trăm ';
            break;
        default:
            alert('chỉ nhập 3 số');
            break;
    }
    switch (hangchuc) {
        case 0:
            hangdonvi == 0 ? (doc += '') : (doc += 'lẻ ');
            break;
        case 1:
            doc += 'mười ';
            break;
        case 2:
            doc += 'hai mươi ';
            break;
        case 3:
            doc += 'ba mươi ';
            break;
        case 4:
            doc += 'bốn mươi ';
            break;
        case 5:
            doc += 'năm mươi ';
            break;
        case 6:
            doc += 'sáu mươi ';
            break;
        case 7:
            doc += 'bảy mươi ';
            break;
        case 8:
            doc += 'tám mươi ';
            break;
        case 9:
            doc += 'chín mươi ';
            break;
        default:
            alert('chỉ nhập 3 số ');
            break;
    }
    switch (hangdonvi) {
        case 0:
            doc += '';
            break;
        case 1:
            doc += 'mốt';
            break;
        case 2:
            doc += 'hai';
            break;
        case 3:
            doc += 'ba';
            break;
        case 4:
            doc += 'bốn';
            break;
        case 5:
            doc += 'năm';
            break;
        case 6:
            doc += 'sáu';
            break;
        case 7:
            doc += 'bảy';
            break;
        case 8:
            doc += 'tám';
            break;
        case 9:
            doc += 'chín';
            break;
        default:
            alert('chỉ nhập 3 số');
            break;
    }
    document.getElementById('txtResultbai7').innerHTML = doc;
}
document.getElementById("btnDocSo").onclick = docso;

/**
 * 
 */
function Toado() {
    var name1 = document.getElementById('sinhvien1').value;
    var x1 = document.getElementById('toadoX1').value;
    var y1 = document.getElementById('toadoY1').value;
    var name2 = document.getElementById('sinhvien2').value;
    var x2 = document.getElementById('toadoX2').value;
    var y2 = document.getElementById('toadoY2').value;
    var name3 = document.getElementById('sinhvien3').value;
    var x3 = document.getElementById('toadoX3').value;
    var y3 = document.getElementById('toadoY3').value;
    var x4 = document.getElementById('toadoX4').value;
    var y4 = document.getElementById('toadoY4').value;

    var khaongcach = '';

    khoangCachSv1 = Math.sqrt(Math.pow(x4 - x1, 2) + Math.pow(y4 - y1, 2));

    khoangCachSv2 = Math.sqrt(Math.pow(x4 - x2, 2) + Math.pow(y4 - y2, 2));

    khoangCachSv3 = Math.sqrt(Math.pow(x4 - x3, 2) + Math.pow(y4 - y3, 2));

    if(khoangCachSv1 > khoangCachSv2 && khoangCachSv1 > khoangCachSv3){
        khaongcach = name1;
    }else if(khoangCachSv2 > khoangCachSv1 && khoangCachSv2 > khoangCachSv3){
        khaongcach = name2;
    }else{
        khaongcach = name3;
    }
    document.getElementById('txtSearch').innerHTML = "Sinh viên xa trường nhất: " + khaongcach ;
}
document.getElementById("btnSearch").onclick = Toado;
