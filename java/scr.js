function chonTour(ten) {
    document.getElementById("thongbao").innerText =
        "Bạn đã chọn tour " + ten;
}

function kiemTraForm() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let tour = document.getElementById("tour").value;
    let date = document.getElementById("date").value;
    let people = document.getElementById("people").value;

    if (name === "") return alert("Nhập tên");
    if (phone === "") return alert("Nhập SĐT");
    if (email === "") return alert("Nhập email");
    if (tour === "") return alert("Chọn tour");
    if (date === "") return alert("Chọn ngày");
    if (people <= 0) return alert("Số người phải > 0");

    document.getElementById("msg").innerText =
        "Đặt tour thành công";

    return false;
}
