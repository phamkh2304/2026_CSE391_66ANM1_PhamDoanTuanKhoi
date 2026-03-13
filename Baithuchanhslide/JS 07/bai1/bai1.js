const nutClick = document.getElementById('nut-click');
nutClick.addEventListener('click', function() {
    console.log("1. Đã phát hiện CLICK");
});

const oNhapPhim = document.getElementById('o-nhap-phim');
oNhapPhim.addEventListener('keydown', function(event) {
    console.log(`Bạn vừa nhấn phím: [${event.key}]`);
});

const formThuNghiem = document.getElementById('form-thu-nghiem');
formThuNghiem.addEventListener('submit', function(event) {
    event.preventDefault(); 
    console.log("Form đã được submit nhưng trang KHÔNG bị load lại!");
});

const divNgoai = document.getElementById('div-ngoai');
const divGiua = document.getElementById('div-giua');
const divTrong = document.getElementById('div-trong');

divNgoai.addEventListener('click', () => console.log("Chạy qua DIV NGOÀI"));
divGiua.addEventListener('click', () => console.log("Chạy qua DIV GIỮA"));
divTrong.addEventListener('click', () => console.log(" Chạy qua DIV TRONG CÙNG"));

const danhSach = document.getElementById('danh-sach');


danhSach.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        console.log(`5. Delegation -> Bạn vừa click vào: "${event.target.textContent}"`);
    }
});
