// Xóa bộ nhớ sửa khi bấm thêm mới
function clearEdit() {
    localStorage.removeItem('editId');
}

// Hiển thị dữ liệu
function loadData() {
    let products = JSON.parse(localStorage.getItem('productList')) || [];
    let tbody = document.getElementById('table-body');
    tbody.innerHTML = ""; 

    for (let i = 0; i < products.length; i++) {
        let p = products[i];
        tbody.innerHTML += `
            <tr>
                <td><strong>${p.name}</strong><br><small>${p.description}</small></td>
                <td>${p.category}</td>
                <td>$${p.price}</td>
                <td>${p.stock}</td>
                <td>
                    <button class="btn-edit" onclick="editProduct(${p.id})">Sửa</button>
                    <button class="btn-delete" onclick="deleteProduct(${p.id})">Xóa</button>
                </td>
            </tr>
        `;
    }
}

// Hàm Xóa
function deleteProduct(idToDel) {
    if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?")) {
        let products = JSON.parse(localStorage.getItem('productList'));
        products = products.filter(p => p.id !== idToDel);
        localStorage.setItem('productList', JSON.stringify(products));
        loadData();
    }
}

// Hàm Sửa
function editProduct(idToEdit) {
    localStorage.setItem('editId', idToEdit);
    window.location.href = "add-product.html";
}

// Chạy hiển thị ngay khi mở trang
loadData();