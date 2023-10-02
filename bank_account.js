let saldo=0;
function cekSaldo(){
    alert('Saldo Kamu Adalah : '+saldo)
}

// arrow function ?
// cekSaldo = () => alert('Saldo Kamu Adalah : '+saldo);

function tambahSaldo(){
    const tambah = prompt('Masukkan Jumlah Saldo : ');
    if(Number.isInteger(+tambah)){
        if(+tambah!=0){
            saldo=+tambah + +saldo;
            alert('Berhasil Menambah Saldo');
            history(+tambah,"TAMBAH");
        }else{
            alert('Inputan tidak boleh 0');
        }
    }else{
        alert('Harus Bernilai Numeric');
    }
}
function kurangiSaldo(){
    const kurang = prompt('Masukkan Jumlah Saldo : ');
    if(Number.isInteger(+kurang)){
        if(+saldo>=+kurang){
            if(+kurang!=0){
                saldo= +saldo - +kurang;
                alert('Berhasil Mengurangi Saldo');
                history(+kurang,"KURANG");
            }else{
                alert('Inputan tidak boleh 0');
            }
        }else{
            alert('Saldo Kamu Kurang');
        }
    }else{
        alert('Harus Bernilai Numeric');
    }
}
let count=1;
function history(jumlah,jenis){
    // let body = $("#history");
    const date = new Date();
    let body = document.getElementById("history");
    let baris = body.insertRow(-1);
    // let variabel+count //menggunakan array ->solusi lain menggunakan local storage(hanya menerima string)/session javscript
    
    let kol1 = baris.insertCell(0);
    let kol2 = baris.insertCell(1);
    let kol3 = baris.insertCell(2);
    let kol4 = baris.insertCell(3);
    kol1.innerHTML = count++;
    kol2.innerHTML = date.getDate() +"/"+date.getMonth()+"/"+date.getFullYear();
    kol3.innerHTML = +jumlah;
    kol4.innerHTML = jenis;
    // let text=`<tr><td>${variabel}</td></tr>`
}