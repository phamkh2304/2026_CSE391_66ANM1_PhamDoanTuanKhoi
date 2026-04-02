// Kiểm tra chế độ Sửa
let editId = localStorage.getItem('editId');
let products = JSON.parse(localStorage.getItem('productList')) || [];

if (editId !== null) {
    document.getElementById('form-title').innerText = "Sửa Sản Phẩm";
    let productToEdit = products.find(p => p.id == editId);
    
    if (productToEdit) {
        document.getElementById('name').value = productToEdit.name;
        document.getElementById('price').value = productToEdit.price;
        document.getElementById('description').value = productToEdit.description;
        document.getElementById('category').value = productToEdit.category;
        document.getElementById('stock').value = productToEdit.stock;
    }
}

// Hàm lưu dữ liệu
function saveProduct() {
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let description = document.getElementById('description').value;
    let category = document.getElementById('category').value;
    let stock = document.getElementById('stock').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let errorMsg = document.getElementById('error-msg');

    // Validate
    if (name.trim() === "") {
        errorMsg.innerText = "Lỗi: Tên sản phẩm không được để trống!";
        return;
    }
    if (price === "" || Number(price) <= 0) {
        errorMsg.innerText = "Lỗi: Giá sản phẩm phải lớn hơn 0!";
        return;
    }
    if (stock === "" || Number(stock) < 0) {
        errorMsg.innerText = "Lỗi: Số lượng tồn kho không được âm!";
        return;
    }
    if (password.trim() === "" || password.length < 6) {
        errorMsg.innerText = "Lỗi: Mật khẩu ít nhất 6 ký tự!";
        return;
    }
    if (password !== confirmPassword) {
        errorMsg.innerText = "Lỗi: Xác nhận mật khẩu không khớp!";
        return;
    }

    // Xử lý lưu
    if (editId !== null) {
        for (let i = 0; i < products.length; i++) {
            if (products[i].id == editId) {
                products[i].name = name;
                products[i].price = price;
                products[i].description = description;
                products[i].category = category;
                products[i].stock = stock;
                break;
            }
        }
        localStorage.removeItem('editId'); 
    } else {
        let newProduct = {
            id: Date.now(), 
            name: name,
            price: price,
            description: description,
            category: category,
            stock: stock
        };
        products.push(newProduct);
    }

    localStorage.setItem('productList', JSON.stringify(products));
    window.location.href = "products.html";
}