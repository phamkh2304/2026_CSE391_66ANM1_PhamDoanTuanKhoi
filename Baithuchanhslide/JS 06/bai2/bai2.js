const tieuDe = document.getElementById('tieu-de-chinh');
tieuDe.textContent = 'Tiêu đề mới đã được cập nhật';
console.log("Đã đổi tiêu đề ", tieuDe.textContent);

const box = document.getElementById('noi-dung');
box.innerHTML = '<p>Đoạn văn này được chèn bằng <strong>innerHTML</strong>.</p>';
console.log("Đã chèn HTML mới vào thẻ div ", box);

const phanTuMoi = document.createElement('li');
phanTuMoi.textContent = 'Bài JS08';
console.log("Đã tạo thành công thẻ <li> mới", phanTuMoi);

const danhSach = document.getElementById('danh-sach');
danhSach.append(phanTuMoi);
console.log("Đã gắn thẻ 'Bài JS08' vào cuối danh sách <ul>:", danhSach);

const phanTuXoa = document.getElementById('phan-tu-bi-xoa');
phanTuXoa.remove();
console.log(" Đã xóa phần tử cũ");
