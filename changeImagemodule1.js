let check = 0
changeImg = function () {

    let a = document.getElementById('cuncon')
    if (check === 0) {
        a.src = "https://brocanvas.com/wp-content/uploads/2022/01/hinh-anh-chu-cho-tai-cut.jpg"
        check++
    } else if (check === 1) {
        a.src = "https://media.vov.vn/uploaded/4bpdy3ykolq/2018_10_23/a2_siip.jpg"
        check++
    } else if (check === 2) {
        a.src = "https://4.bp.blogspot.com/-IzEbtVMSMLo/VM2jMc5iyII/AAAAAAAAWbE/wGWx2PXhjAk/s1600/hinh-anh-meo-con-de-thuong-nhat-1.jpg"
        check++
    } else {
        a.src = "https://img.meta.com.vn/Data/image/2021/09/21/hinh-anh-cho-con-4.jpg"
        check = 0
    }
}
setInterval(changeImg, 1000)

// về lại trang giao diện
function back()
{
    let a = document.getElementById('chocon')
    let str = ''
    str += `
     <img  src="https://img.meta.com.vn/Data/image/2021/09/21/hinh-anh-cho-con-4.jpg" style="width: 800px;height: 800px" id="cuncon"  onclick="changeImg()">
  <iframe width="800" height="800" src="https://www.youtube.com/embed/RmP_Z6ilveo" 
          title="Tổng hợp các Video Hài Hước Của Thú Cưng 17 | Thú Cưng Hài Hước" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `
    a.innerHTML = str;
}

// lớp động vật
class DongVat {
    img;
    name;
    price;
    loai;

    constructor(name, img, price,loai){
        this.img = img
        this.name = name;
        this.price = price;
        this.loai = loai
    }

}
let dongVat = [];
dongVat.push(new DongVat("ChiHuaHua", "https://image-us.eva.vn/upload/4-2020/images/2020-10-13/image10-1602571101-484-width640height500.jpg", '5,000,000', "dog"))
dongVat.push(new DongVat("Phốc Sóc", 'https://chocanh.vn/wp-content/uploads/cho-pomeranian-fox-soc-1.jpg', '8,000,000 ', "dog"))
dongVat.push(new DongVat("Chow Chow", 'https://www.thukieng.com/wp-content/uploads/2016/02/gia-mua-ban-cho-chow-o-ha-noi-va-tphcm-1.jpg', ' 2,000,000', "dog"))
dongVat.push(new DongVat("Phú Quốc", 'http://imgs.vietnamnet.vn/Images/2015/10/06/15/20151006150106-cho-phu-quoc.jpg', '12,000,000', "dog"))
dongVat.push(new DongVat("Corgi", 'https://cdn.chotot.com/9Vx2VF3OsohQIP3ZsbGFn57CKrb9lOwB0I8QDtku1s0/preset:listing/plain/00972b5c9aa140ce7228668fb9cf744d-2786402736237456441.jpg', '7,000,000', "dog"))
//hiển thị ra chó
function hienThi1() {
    let a = document.getElementById('chocon')
    a.innerHTML = ''
    let str = '<table align="center">'

    for(let i =0;i<dongVat.length; i++) {
        if(dongVat[i].loai === "dog") {
            str += `
           
            <tr>
            <td><img  style="width: 500px;height: 500px" src="${dongVat[i].img}">${dongVat[i].name} ${dongVat[i].price}</td>
            <td><button onclick="choVaoGioHang( '${dongVat[i].name}', '${dongVat[i].img}', '${dongVat[i].price}')">Cho Vào Giỏ Hàng</button></td>
            </tr>
         
           
            `
        }
    }
        str+= "</table>"
        a.innerHTML = str;
    }
    // Hiển Thị Mèo
dongVat.push(new DongVat("Mèo Anh Lông Ngắn", "https://petmaster.vn/petroom/wp-content/uploads/2020/04/meo-canh.jpg", '10.000.000', "cat"))
dongVat.push(new DongVat("Mèo Munchki", 'http://cdn.tgdd.vn/Files/2021/04/23/1345766/meo-munchkin-chan-ngan-nguon-goc-dac-diem-gia-ban-202104231643494747.jpg', '15,000,000 ', "cat"))
dongVat.push(new DongVat("Mèo Siberia", 'https://static.chotot.com/storage/chotot-kinhnghiem/c2c/2021/05/4b9ce73d-meo-siberia-thumb.jpeg', ' 150,000,000', "cat"))
dongVat.push(new DongVat("Mèo Maine Coon", 'https://thegioiloaimeo.com/wp-content/uploads/2020/02/meo-maine-coon.jpg', '120,000,000', "cat"))
dongVat.push(new DongVat("Mèo Bengal", 'https://osinthucung.com/wp-content/uploads/2021/04/meo-bengal-1.jpg', '70,000,000', "cat"))
function hienThi2() {
    let a = document.getElementById('chocon')
    a.innerHTML = ''
    let str = '<table align="center">'

    for(let i =0;i<dongVat.length; i++) {
     if(dongVat[i].loai=== 'cat'){
         str += `
            <tr>
            <td><img  style="width: 500px;height: 500px" src="${dongVat[i].img}"> ${dongVat[i].name} ${dongVat[i].price}</td>  
           <td><button onclick="choVaoGioHang('${dongVat[i].name}', '${dongVat[i].img}', '${dongVat[i].price}')">Cho Vào Giỏ Hàng</button></td>
            </tr>
            
           
            `

     }

    }
    str+= "</table>"
    a.innerHTML = str;
}

// Đơn Hàng
let hoadon = []
function choVaoGioHang(name,img,price)
{   let str = '<table align="center">'
    let mua = new DongVat(name, img, price)
   hoadon.push(mua)
    document.getElementById("chocon").innerHTML = ""
    str += `
           
            <tr>
            <td><img  style="width: 500px;height: 500px" src="${img}"> ${name} ${price}</td>  
            </tr>
            
           
          `
    str+= '</table>'
    document.getElementById('chocon').innerHTML = str
}

// Hóa Đơn
function hoaDon()
{
    let str = '<table align="center">'
    for (let i = 0; i < hoadon.length; i++) {
        str += `
            <tr>
            <td><img  style="width: 500px;height: 500px" src="${hoadon[i].img}">${hoadon[i].name}${hoadon[i].price}</td> <br>
            <td><button onclick="xoa(${i})">Bỏ Khỏi Giỏ Hàng</button></td>
            </tr>
          `
    }

    str += '</table> <p style="font-size: 50px"> Tổng Tiền  = ' + tinhTien() + 'Triệu</p>';
    document.getElementById('chocon').innerHTML = str

}

// tính tiền
function tinhTien()
{
    let sum = 0
    for(let i = 0; i<hoadon.length;i++)
    {
        sum += parseFloat(hoadon[i].price)
    }
    return sum
}

//Thông Tin Khách Hàng
function thongTin()
{
    let scr = '<form action=""></form><table align="center" border="1">'
    document.getElementById('chocon').innerHTML= ''
    scr +=
        `
        <h1><tr><td>Điền Thông Tin</td> </tr></h1> <br>
        <tr><td><input placeholder="Nhập Tên"></td></tr> <br>
        <tr><td><input placeholder="Nhập Địa Chỉ "></td></tr> <br>
        <tr><td><input placeholder="Nhập Số Điện Thoại "></td></tr> <br>
        <tr><td><input placeholder="Nhập Email "></td></tr> <br>
        <tr><td><input type="submit" value="Xác Nhận Và Gửi Thông Tin" name="thongtin"></td></tr>
        
        `
    scr += '</table></form>'
    document.getElementById('chocon').innerHTML = scr
}

// Tìm Kiếm

function search()
{
    let timkiemDialog = document.getElementById("timkiemDialog")
    let pTimKiem = document.getElementById("pTimKiem")
    let check = 1
    let a = document.getElementById('search').value
    for( let i = 0; i<dongVat.length; i++){
        if(dongVat[i].name==a){
            let str = '<table align="center">'
            str += `
            <tr>
            <td><img  style="width: 500px;height: 500px" src="${dongVat[i].img}"> ${dongVat[i].name} ${dongVat[i].price}</td>  
           <td><button onclick="choVaoGioHang('${dongVat[i].name}', '${dongVat[i].img}', '${dongVat[i].price}')">Cho Vào Giỏ Hàng</button></td>
            </tr>           
            `
            str+= "</table>"
            pTimKiem.innerHTML = str
            timkiemDialog.showModal();
            check ++
        }

    }
    if(check == 1)
    {
        alert('khong co')
    }


}

//xóa
function xoa(index)
{
    hoadon.splice(index,1)
    hoaDon();


}