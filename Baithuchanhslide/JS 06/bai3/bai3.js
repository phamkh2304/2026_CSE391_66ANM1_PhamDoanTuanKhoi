
const img = document.getElementById("anh-roi-tu-do");


img.src = 'anh1bai3.jpg'; 
img.alt = 'Ảnh đã được JS thêm vào';

console.log("Đã cập nhật thuộc tính src và alt cho thẻ img");


const theP = document.getElementById('van-ban');

theP.classList.remove('chu-do'); 
theP.classList.add('in-dam');   

console.log("Đã xóa class 'chu-do' và thêm class 'in-dam' cho đoạn văn");

theP.classList.toggle('chu-do');

console.log("Đã dùng toggle để bật lại class 'chu-do'");

const kiemTra = theP.classList.contains('chu-do');

console.log("Kiểm tra xem thẻ p còn đang chứa class 'chu-do'", kiemTra);
