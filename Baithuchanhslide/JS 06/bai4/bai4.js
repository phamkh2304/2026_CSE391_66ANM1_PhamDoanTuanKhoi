
const nutBam = document.getElementById('nut-bam');
const theH2 = document.getElementById('trang-thai');
const vungChuot = document.getElementById('vung-chuot');


nutBam.addEventListener('click', function() {
    theH2.textContent = 'Bạn vừa click nút thành công!';
    document.body.classList.toggle('nen-xam');

    console.log("Đã click nút: Thay đổi textContent và bật/tắt nền xám");
});

vungChuot.addEventListener('mouseenter', function() {
    vungChuot.textContent = 'Chuột ĐANG ở bên trong!';
    console.log("Chuột vừa ĐI VÀO vùng viền đứt");
});

vungChuot.addEventListener('mouseleave', function() {
    vungChuot.textContent = 'Chuột ĐÃ ra bên ngoài!';
    console.log("Chuột vừa đi ra khỏi vùng viền đứt");
});

