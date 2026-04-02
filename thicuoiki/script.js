import { duLieuGoc } from './data.js';

// Khởi tạo dữ liệu từ localStorage hoặc dùng dữ liệu gốc nếu chưa có
let labs = JSON.parse(localStorage.getItem('labs'));
if (!labs || labs.length === 0) {
    labs = [...duLieuGoc];
    localStorage.setItem('labs', JSON.stringify(labs));
}

let editingLabId = null; 

const modal = document.getElementById('student-modal');
const btnOpenModal = document.getElementById('btn-open-modal');
const btnCloseModal = document.getElementById('btn-close-modal');
const labForm = document.getElementById('student-form');
const tableBody = document.getElementById('student-table-body');

// Lấy các input field dựa theo HTML mới
const inputRoomName = document.getElementById('room-name');
const inputRoomCode = document.getElementById('room-code');
const inputComputers = document.getElementById('computers');
const inputManager = document.getElementById('manager');
const inputEmail = document.getElementById('email');

// Mở modal thêm mới
btnOpenModal.addEventListener('click', () => {
    editingLabId = null;
    document.getElementById('modal-title').innerText = "Add computer lab";
    labForm.reset();
    clearErrors();
    modal.style.display = 'flex';
});

// Đóng modal
btnCloseModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Render bảng dữ liệu
function renderLabs() {
    tableBody.innerHTML = '';

    labs.forEach((lab) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${lab.tenPhongMayTinh}</td>
            <td>${lab.maPhongMayTinh}</td>
            <td>${lab.soMayTinh}</td>
            <td>${lab.nguoiQuanLi}</td>
            <td>${lab.email}</td>
            <td>
                <button class="btn btn-edit" onclick="editLab(${lab.id})">Edit</button>
                <button class="btn btn-delete" onclick="deleteLab(${lab.id})">Delete</button>
            </td>
        `;
        tableBody.appendChild(tr);
    });
}

// Xóa phòng máy (Gắn vào window vì file chạy dưới dạng module)
window.deleteLab = function(id) {
    if (confirm("Bạn có chắc chắn muốn xóa phòng máy này?")) {
        labs = labs.filter(l => l.id !== id);
        localStorage.setItem('labs', JSON.stringify(labs));
        renderLabs();
    }
}

// Chỉnh sửa phòng máy
window.editLab = function(id) {
    const lab = labs.find(l => l.id === id);
    if (!lab) return;

    editingLabId = id;
    document.getElementById('modal-title').innerText = "Edit computer lab";
    
    inputRoomName.value = lab.tenPhongMayTinh;
    inputRoomCode.value = lab.maPhongMayTinh;
    inputComputers.value = lab.soMayTinh;
    inputManager.value = lab.nguoiQuanLi;
    inputEmail.value = lab.email;

    clearErrors();
    modal.style.display = 'flex';
}

function showError(elementId, message) {
    const el = document.getElementById(elementId);
    if(el) el.innerText = message;
}

function clearErrors() {
    const errors = document.querySelectorAll('.error-msg');
    errors.forEach(err => err.innerText = '');
}

// Xử lý khi submit form
labForm.addEventListener('submit', function(e) {
    e.preventDefault();
    clearErrors();
    let isValid = true;

    const name = inputRoomName.value.trim();
    const code = inputRoomCode.value.trim();
    const computersStr = inputComputers.value.trim();
    const computers = parseInt(computersStr);
    const manager = inputManager.value.trim();
    const email = inputEmail.value.trim();

    if (!name) { showError('err-name', 'Room name is required'); isValid = false; }
    if (!code) { showError('err-code', 'Room code is required'); isValid = false; }

    if (!computersStr) { 
        showError('err-computers', 'Computers is required'); 
        isValid = false; 
    } else if (isNaN(computers) || computers < 1 || computers > 60) { 
        showError('err-computers', 'Must be an integer from 1 to 60'); 
        isValid = false; 
    }

    if (!manager) { showError('err-manager', 'Manager name is required'); isValid = false; }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) { 
        showError('err-email', 'Email is required'); 
        isValid = false; 
    } else if (!emailRegex.test(email)) { 
        showError('err-email', 'Invalid email format'); 
        isValid = false; 
    }

    if (isValid) {
        if (editingLabId) {
            // Sửa
            const index = labs.findIndex(l => l.id === editingLabId);
            labs[index] = { ...labs[index], tenPhongMayTinh: name, maPhongMayTinh: code, soMayTinh: computers, nguoiQuanLi: manager, email: email };
        } else {
            // Thêm mới
            const newId = labs.length > 0 ? Math.max(...labs.map(l => l.id)) + 1 : 1;
            labs.push({ id: newId, tenPhongMayTinh: name, maPhongMayTinh: code, soMayTinh: computers, nguoiQuanLi: manager, email: email });
        }

        localStorage.setItem('labs', JSON.stringify(labs));
        renderLabs();
        modal.style.display = 'none';
    }
});

// Khởi chạy khi load trang
renderLabs();