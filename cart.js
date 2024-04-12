//lấy tất cả những phần tử có class .fa-solid.fa-cart-shopping để cho vào mảng cartIcons
var cartIcons = document.querySelectorAll('.fa-solid.fa-cart-shopping');

//lấy phần tử giỏ hàng trên thanh navigation
var cartIcon = document.getElementById('cart-icon');

//lấy phần tử cart-table để đổ thông tin của sản phẩm sau khi đã lấy được từ sự kiện click vào giỏ hàng ở sản phẩm
var cartTable = document.getElementById('cart-table');

// Lấy thẻ tbody của bảng giỏ hàng và thẻ tổng giá
var tbody = document.querySelector('#cart-table tbody');
var totalPriceElement = document.querySelector('#total-price');

// Tạo một biến để lưu tổng giá
var totalPrice = 0;


// Lặp qua danh sách các nút mua hàng và thêm sự kiện "click" cho mỗi nút
cartIcons.forEach(function (icon) {
    icon.addEventListener('click', function (event) {
        event.preventDefault();

        // Lấy thông tin về sản phẩm từ phần tử cha của biểu tượng giỏ hàng
        var productContainer = icon.closest('.Cloudfee');
        var productName = productContainer.querySelector('.des span').innerText;
        var productPrice = parseFloat(productContainer.querySelector('.price span').innerText.replace('đ', '').replace('.', ''));

        //Thêm một hàng mới vào bảng
        var newRow = document.createElement('tr');
        newRow.dataset.productName = productName; // Lưu tên sản phẩm vào thuộc tính dataset để kiểm tra lại
        newRow.innerHTML = `
                <td>${productName}</td>
                <td class="quantity">1</td>
                <td>${productPrice}đ</td>
            `;
        tbody.appendChild(newRow);
        totalPrice += productPrice;
        totalPriceElement.textContent = 'Tổng giá: ' + totalPrice + 'đ';
    });
});