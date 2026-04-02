
function buoc1() { return Promise.resolve("Dữ liệu thô"); }
function buoc2(data) { return Promise.resolve(`${data} -> Đã lọc`); }
function buoc3(data) { return Promise.resolve(`${data} -> Hoàn tất!`); }

async function chayChuoiAsync() {
    try {
        const kq1 = await buoc1();
        const kq2 = await buoc2(kq1);
        const kq3 = await buoc3(kq2);
        console.log("Kết quả chuỗi Async/Await:", kq3);
    } catch (loi) {
        console.error(" Lỗi chuỗi Async:", loi);
    }
}

chayChuoiAsync(); 

const nutFetch = document.getElementById('nut-fetch');
const danhSachUser = document.getElementById('danh-sach-user');

async function layDuLieuTuAPI() {
    
    try {
        console.log("2. Đang gửi request (fetch) tới JSONPlaceholder...");
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            throw new Error(`Máy chủ báo lỗi: ${response.status}`);
        }
        const users = await response.json(); 
        console.log("Đã parse JSON thành công. Trích xuất 5 người đầu tiên:", users.slice(0, 5));


        danhSachUser.innerHTML = ''; 
        
   
        users.slice(0, 5).forEach(user => {
            const theLi = document.createElement('li');
            theLi.innerHTML = `<strong>${user.name}</strong> - Làm việc tại: <em>${user.company.name}</em>`;
            danhSachUser.appendChild(theLi);
        });

        console.log("Đã render dữ liệu lên màn hình thành công!");

    } catch (error) {
        console.error("Bắt được lỗi kết nối (Catch):", error);
        danhSachUser.innerHTML = `<li class="loi">Không thể tải dữ liệu. Chi tiết lỗi: ${error.message}</li>`;
    }
}

nutFetch.addEventListener('click', layDuLieuTuAPI);

