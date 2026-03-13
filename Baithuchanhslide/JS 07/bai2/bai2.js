console.log("Đang bắt đầu chạy các Promises. Vui lòng đợi...");

const layDuLieu = new Promise((resolve, reject) => {
    setTimeout(() => {
        const thanhCong = true; 
        
        if (thanhCong) {
            resolve("Dữ liệu đã tải thành công!"); 
        } else {
            reject("Lỗi mạng: Không thể lấy dữ liệu."); 
        }
    }, 2000); 
});

layDuLieu
    .then((ketQua) => {
        console.log("[Thành công]:", ketQua);
    })
    .catch((loi) => {
        console.log("[Thất bại]:", loi);
    });



function buoc1() {
    return Promise.resolve("Dữ liệu thô");
}

function buoc2(duLieu) {
    return Promise.reject(`Lỗi ở bước 2 khi đang xử lý: ${duLieu}`);
}

function buoc3(duLieuDaLoc) {
    return Promise.resolve(`${duLieuDaLoc} -> Hoàn thành!`);
}

buoc1()
    .then(ketQua1 => {
        console.log("Chain - Bước 1 xong:", ketQua1);
        return buoc2(ketQua1); 
    })
    .then(ketQua2 => {
        console.log("Chain - Bước 2 xong:", ketQua2);
        return buoc3(ketQua2); 
    })
    .then(ketQua3 => {
        console.log(" Chain - Bước 3 xong:", ketQua3);
    })
    .catch(loi => {
        console.error("Bắt lỗi tập trung (Catch chung):", loi);
    });



function hamCallbackCu(ten, callback) {
    setTimeout(() => {
        callback(null, `Xin chào, ${ten}!`); 
    }, 1000);
}

function hamPromiseMoi(ten) {
    return new Promise((resolve, reject) => {
        hamCallbackCu(ten, (loi, ketQua) => {
            if (loi) {
                reject(loi);
            } else {
                resolve(ketQua);
            }
        });
    });
}

hamPromiseMoi("Khôi")
    .then(ketQua => {
        console.log(" Chuyển đổi Callback sang Promise thành công:", ketQua);
    })
    .catch(loi => {
        console.error("Lỗi khi chuyển đổi:", loi);
    });