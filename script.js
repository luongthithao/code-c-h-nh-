// Lấy thẻ bảng giỏ hàng và biểu tượng giỏ hàng
var cartTable = document.getElementById('cart-table');
var cartIcon = document.getElementById('cart-icon');

// Thêm sự kiện "click" cho biểu tượng giỏ hàng
cartIcon.addEventListener('click', function (event) {
    // Ngăn chặn hành vi mặc định của biểu tượng giỏ hàng
    event.preventDefault();

    if (cartTable) {
        if (cartTable.style.display === 'none') {
            cartTable.style.display = 'block';
        } else {
            cartTable.style.display = 'none';
        }
    } else {
        console.error("no table");
    }
});

// Để ấn vào giỏ hàng, bạn có thể gọi hàm click() trên biểu tượng giỏ hàng
cartIcon.click();

