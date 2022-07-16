/**Dự đoán thời gian
 * 
 * Khối 1: Input 
 *              inputDate, inputMonth, inputYear
 * 
 * Khối 2: Các bước xử lý
 * B1: Khai báo nhanNgayNhap, nhanThangNhap, nhanNamNhap
 * B2: Tạo sub function tangGiaTri, giamGiaTri
 * B3: Khởi tạo biến nhận giá trị trả về của 2 sub function trong main function
 * 
 * Khối 3: Output
 *              inNgayMai
 *              inHomQua
 */

// Main function
function doanThoiGian() {
    // Input
    var nhanNgayNhap = Number(document.getElementById('inputDate').value);
    var nhanThangNhap = Number(document.getElementById('inputMonth').value);
    var nhanNamNhap = Number(document.getElementById('inputYear').value);

    // Process
    // var ktTrong = checkTrong(nhanNgayNhap, nhanThangNhap, nhanNamNhap);
    var congThoiGian = fncCong(nhanNgayNhap, nhanThangNhap, nhanNamNhap);
    var checkNam = dauHoacCuoiNam(nhanNgayNhap, nhanThangNhap, nhanNamNhap);
    var truThoiGian = fncTru(nhanNgayNhap, nhanThangNhap, nhanNamNhap);


    if (nhanNgayNhap == 1 && nhanThangNhap == 1) {
        document.querySelector('#inHomQua').innerHTML = 'Ngày hôm qua là ' + checkNam;
        document.querySelector('#inNgayMai').innerHTML = 'Ngày mai là ' + congThoiGian;
    } else if (nhanNgayNhap == 31 & nhanThangNhap == 12) {
        document.querySelector('#inHomQua').innerHTML = 'Ngày hôm qua là ' + truThoiGian;
        document.querySelector('#inNgayMai').innerHTML = 'Ngày mai là ' + checkNam;
    } else {
        document.querySelector('#inHomQua').innerHTML = 'Ngày hôm qua là ' + truThoiGian;
        document.querySelector('#inNgayMai').innerHTML = 'Ngày mai là ' + congThoiGian;
    }

}

// Function kiểm tra input trống
function checkTrong(nhapNgay, nhapThang, nhapNam) {
    if (nhapNgay == '' || nhapThang == '' || nhapNam == '') {
        alert('Nhập thiếu dữ liệu kia người anh em, nhập lại cho đầy đủ đê -_- !');
        document.querySelector('#inHomQua').innerHTML = '';
        document.querySelector('#inNgayMai').innerHTML = '';
    } 
    return true;
}

// Function kiểm tra đầu/ cuối năm
function dauHoacCuoiNam(nhapNgay, nhapThang, nhapNam) {
    var ketQua = '';
    if (nhapNgay == 1 & nhapThang == 1) {
        nhapNgay = 31;
        nhapThang = 12;
        nhapNam--;
    } else if (nhapNgay == 31 && nhapThang == 12) {
        nhapNgay = 1;
        nhapThang = 1;
        nhapNam++;
    }
    ketQua = nhapNgay + '/' + nhapThang + '/' + nhapNam;
    return ketQua;
}

// Function cộng thời gian
function fncCong(nhapNgay, nhapThang, nhapNam) {
    var ketQua = '';
    switch (nhapThang) {
        case 2:
            if (nhapNgay == 28) {
                nhapNgay = 1;
                nhapThang++;
            } else {
                nhapNgay++;
            }
            break;

        case 4:
        case 6:
        case 9:
        case 11:
            if (nhapNgay == 30) {
                nhapNgay = 1;
                nhapThang += 1;
            } else {
                nhapNgay += 1;
            }
            break;

        default:
            if (nhapNgay == 31) {
                nhapNgay = 1;
                nhapThang++;
            } else {
                nhapNgay++;
            }
            break;
    }
    ketQua = nhapNgay + '/' + nhapThang + '/' + nhapNam;
    return ketQua;
}

// Function trừ thời gian
function fncTru(nhapNgay, nhapThang, nhapNam) {

    var ketQua = '';
    switch (nhapThang) {
        case 1:
            if (nhapNgay > 31 && nhapNgay <= 0) {
                alert('Error !');
            } else {
                nhapNgay--;
            }
            break;

        case 3:
            if (nhapNgay == 1) {
                nhapNgay = 28;
                nhapThang--;
            } else {
                nhapNgay--;
            }
            break;

        case 2:
        case 4:
        case 6:
        case 9:
        case 11:
            if (nhapNgay == 1) {
                nhapNgay = 31;
                nhapThang--;
            } else {
                nhapNgay--;
            }
            break;

        default:
            if (nhapNgay == 1) {
                nhapNgay = 30;
                nhapThang--;
            } else {
                nhapNgay--;
            }
            break;
    }
    ketQua = nhapNgay + '/' + nhapThang + '/' + nhapNam;
    return ketQua;

}




/**Đếm số ngày của tháng
 * 
 * Khối 1: Input 
 *              inputMonth_2, inputYear_2
 * 
 * Khối 2: Các bước phân tích
 * B1: Kiểm tra dữ liệu nhập vào
 *          - Thiếu: cảnh báo lỗi
 *          - Đủ: Kiểm tra tính hợp lệ của tháng nhập vào
 *                  + Sai: Thông báo lỗi
 *                  + Đúng: Tiến hành xử lý
 *                if inputYear_2 % 4 == 0
 *                  switch inputMonth_2:
 *                      case '2':
 *                           'Tháng có 29 ngày !'
 *                            br
 *                      case '4', '6', '9', '11':
 *                          'Tháng có 30 ngày !'
 *                            br
 *                      default:    
 *                          'Tháng có 31 ngày !'
 *                            br
 *                  else 
 *                   switch inputMonth_2:
 *                      case '2':
 *                          'Tháng có 27 hoặc 28 ngày !'
 *                            br
 *                      case '4', '6', '9', '11':
 *                           'Tháng có 30 ngày !'
 *                            br
 *                      default
 *                           'Tháng có 31 ngày !'
 *                            br
 * B2: Tối ưu code 
 * 
 * Khối 3: Output
 *             inSoNgay 
 * 
 */

// Main function
function demSoNgay() {
    // Input
    var inputMonth_2 = Number(document.getElementById('inputMonth_2').value);
    var inputYear_2 = Number(document.getElementById('inputYear_2').value);
    var khungKetQua = document.getElementById('khungKetQua');
    var inSoNgay = document.getElementById('inSoNgay');

    // Process
    if (inputMonth_2 == '' || inputYear_2 == '') {
        inSoNgay.innerHTML = 'Điền thiếu thông tin thì làm sao tui đoán được (❁´◡`❁) ...';
    } else {
        if (inputMonth_2 <= 0 || inputMonth_2 > 12) {
            inSoNgay.innerHTML = 'Phải nhập tháng cho nó đúng chứ ...';
        } else {
            if (inputYear_2 % 4 == 0) {
                var kqNhuan = namNhuan(inputMonth_2);
                inSoNgay.innerHTML = kqNhuan;
            } else {
                var kqKoNhuan = namKoNhuan(inputMonth_2);
                inSoNgay.innerHTML = kqKoNhuan;
            }
        }
    }

}

// Function kiểm tra năm nhuận
function namNhuan(nhapThang) {
    // Input
    var inKetQua = '';

    // Process
    switch (nhapThang) {
        case 2:
            inKetQua += 'Tháng này có 29 ngày';
            break;

        case 4:
        case 6:
        case 9:
        case 11:
            inKetQua += 'Tháng này có 30 ngày';
            break;

        default:
            inKetQua += 'Tháng này có 31 ngày';
            break;
    }

    // Output
    return inKetQua;
}

// Function kiểm tra năm không nhuận
function namKoNhuan(nhapThang) {
    // Input
    var inKetQua = '';

    // Process
    switch (nhapThang) {
        case 2:
            inKetQua += 'Tháng này có 27 hoặc 28 ngày';
            break;

        case 4: 
        case 6: 
        case 9: 
        case 11:
            inKetQua += 'Tháng này có 30 ngày';
            break;

        default:
            inKetQua += 'Tháng này có 31 ngày';
            break;
    }

    // Output
    return inKetQua;
}



/**Đọc số nguyên 3 chữ số
 * 
 * Khối 1: Input
 *              inputSoNguyen
 * 
 * Khối 2: Các bước xử lý
 * B1: Khai báo nhanSoNguyen, soHangTram, soHangChuc, soDonVi
 * B2: soHangTram = Math.trunc(nhanSoNguyen / 100)
 *     soHangChuc = math.trunc((nhanSoNguyen / 10) % 10)
 *     soDonVi = nhanSoNguyen % 10
 * B3: Dùng switch case để đọc các số thành chữ
 * B4: Nối chỗi hoàn chỉnh
 * 
 * Khối 3: Output
 *              docBaSo
 * 
 */

// Main function
function docSoNguyen() {
    // Input
    var nhanSoNguyen = Number(document.getElementById('inputSoNguyen').value);
    var docBaSo = document.getElementById('docBaSo');

    // Process
    var xuLySo = tachSo(nhanSoNguyen);

    // Output
    docBaSo.innerHTML = xuLySo;
}

// Separate number function
function tachSo(soNhapVao) {
    var soHangTram = Math.trunc(soNhapVao / 100);
    var soHangChuc = Math.trunc((soNhapVao / 10) % 10);
    var soDonVi = soNhapVao % 10;

    var docCaSo = '';
    var docraTram = '';

    switch (soHangTram) {
        case 1:
            docraTram += 'Một trăm ';
            break;
        case 2:
            docraTram += 'Hai trăm ';
            break;
        case 3:
            docraTram += 'Ba trăm ';
            break;
        case 4:
            docraTram += 'Bốn trăm ';
            break;
        case 5:
            docraTram += 'Năm trăm ';
            break;
        case 6:
            docraTram += 'Sáu trăm ';
            break;
        case 7:
            docraTram += 'Bảy trăm ';
            break;
        case 8:
            docraTram += 'Tám trăm ';
            break;
        case 9:
            docraTram += 'Chín trăm ';
            break;

        default:
            alert('Số hàng trăm không xác định được !');
            break;
    }

    var docRaChuc = '';
    switch (soHangChuc) {
        case 1:
            docRaChuc += ' mười ';
            break;
        case 2:
            docRaChuc += ' hai mươi ';
            break;
        case 3:
            docRaChuc += ' ba mươi ';
            break;
        case 4:
            docRaChuc += ' bốn mươi ';
            break;
        case 5:
            docRaChuc += ' năm mươi ';
            break;
        case 6:
            docRaChuc += ' sáu mươi ';
            break;
        case 7:
            docRaChuc += ' bảy mươi ';
            break;
        case 8:
            docRaChuc += ' tám mươi ';
            break;
        case 9:
            docRaChuc += ' chín mươi ';
            break;

        default:
            alert('Số hàng chục không xác định được !');
            break;
    }

    var docDonVi = '';
    switch (soDonVi) {
        case 1:
            docDonVi += ' một ';
            break;
        case 2:
            docDonVi += ' hai ';
            break;
        case 3:
            docDonVi += ' ba ';
            break;
        case 4:
            docDonVi += ' bốn ';
            break;
        case 5:
            docDonVi += ' năm ';
            break;
        case 6:
            docDonVi += ' sáu ';
            break;
        case 7:
            docDonVi += ' bảy  ';
            break;
        case 8:
            docDonVi += ' tám ';
            break;
        case 9:
            docDonVi += ' chín ';
            break;

        default:
            alert('Số hàng đơn vị không xác định được !');
            break;
    }

    docCaSo = docraTram + docRaChuc + docDonVi;

    return docCaSo;
}




/**Tính toán tọa độ
 * 
 * Khối 1: Input
 *          xSinhVien1, ySinhVien1, xSinhVien2, ySinhVien2, xSinhVien3, ySinhVien3, xTruongX, yTruongX
 * 
 * Khối 2: Các bước xử lý
 * B1: Khai báo biến nhận giá trị từ các input
 * B2: Lập công thức tính toán tọa độ
 * B3: Kiểm tra dữ liệu nhập vào
 *          - Nhập thiếu: Báo lỗi
 *          - Nhập đầy đủ: Tiến hành tính toán, so sánh các kết quả vừa tính được, kết quả nào lớn nhất
 *              => In tên sinh viên có tọa độ xa trường nhất
 * 
 * Khối 3: Output
 *          ketQua
 * 
 */

// Function chính
function xuLyThongTin() {
    // Input
    var tenSV1 = document.getElementById('tenSV1').value;
    var xSinhVien1 = Number(document.getElementById('xSinhVien1').value);
    var ySinhVien1 = Number(document.getElementById('ySinhVien1').value);

    var tenSV2 = document.getElementById('tenSV2').value;
    var xSinhVien2 = Number(document.getElementById('xSinhVien2').value);
    var ySinhVien2 = Number(document.getElementById('ySinhVien2').value);

    var tenSV3 = document.getElementById('tenSV3').value;
    var xSinhVien3 = Number(document.getElementById('xSinhVien3').value);
    var ySinhVien3 = Number(document.getElementById('ySinhVien3').value);

    var xTruongX = Number(document.getElementById('xTruongX').value);
    var yTruongX = Number(document.getElementById('yTruongX').value);

    var inKetQua = document.getElementById('ketQua');

    // Gọi function kiểm tra dữ liệu nhập vào
    var checkThongBao1 = checkEmpty(tenSV1, xSinhVien1, ySinhVien1);
    var checkThongBao2 = checkEmpty(tenSV2, xSinhVien2, ySinhVien2);
    var checkThongBao3 = checkEmpty(tenSV3, xSinhVien2, ySinhVien2);
    var checkThongBao4 = checkEmpty(xTruongX, yTruongX);

    // Gọi hàm tính quãng đường
    var tinhDuongSV1 = tinhQuangDuong(xSinhVien1, ySinhVien1, xTruongX, yTruongX);
    var tinhDuongSV2 = tinhQuangDuong(xSinhVien2, ySinhVien2, xTruongX, yTruongX);
    var tinhDuongSV3 = tinhQuangDuong(xSinhVien3, ySinhVien3, xTruongX, yTruongX);

    // Process
    if (checkThongBao1 || checkThongBao2 || checkThongBao3 || checkThongBao4) {
        inKetQua.innerHTML = 'Còn sót trường chưa nhập kìa !';
    } else {
        if (tinhDuongSV1 > tinhDuongSV2) {
            if (tinhDuongSV2 > tinhDuongSV3) {
                inKetQua.innerHTML = 'Sinh viên xa trường nhất là ' + tenSV1;
            } else {
                if (tinhDuongSV1 > tinhDuongSV3) {
                    inKetQua.innerHTML = 'Sinh viên xa trường nhất là ' + tenSV1;
                } else {
                    inKetQua.innerHTML = 'Sinh viên xa trường nhất là ' + tenSV3;
                }
            }
        } else if (tinhDuongSV2 > tinhDuongSV3) {
            if (tinhDuongSV1 >= tinhDuongSV3 || tinhDuongSV1 <= tinhDuongSV3) {
                inKetQua.innerHTML = 'Sinh viên xa trường nhất là ' + tenSV2;
            }
        }
    }
}

// Function kiểm tra input trống
function checkEmpty(nhanTenSV, nhanInputX, nhanInputY) {
    if (nhanTenSV == '' || nhanInputX == '' || nhanInputY == '') {
        return true;
    }
}

// Function tính quãng đường
function tinhQuangDuong(xDiemDau, yDiemDau, xDiemCuoi, yDiemCuoi) {
    var tinhDauCuoi = Math.sqrt((Math.pow((xDiemCuoi - xDiemDau), 2)) + (Math.pow((yDiemCuoi - yDiemDau), 2)));

    return tinhDauCuoi;
}