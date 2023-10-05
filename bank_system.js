class BankSystem {
	constructor(nama, saldo) {
		this.saldo = saldo;
		this.nama = nama;
	}
	withdraw(jumlah) {
		try {
			if (!Number.isInteger(jumlah)) {
				throw new Error('Harus Bernilai Numeric');
			}
			if (jumlah > this.saldo) {
				throw new Error('Gagal Withdraw, Saldo Kamu Kurang');
			}
			if (jumlah == 0) {
				throw new Error('Inputan tidak boleh 0');
			}
			const saldoHistory=this.saldo;
			this.saldo -= jumlah;
			setTimeout(function(){
				alert(`Berhasil menarik saldo berjumlah ${jumlah} dari ${saldoHistory}`);
			},1500);
		} catch (err) {
			alert(err.message);
		}
	}
	deposit(jumlah) {
		try {
			if (!Number.isInteger(jumlah)) {
				throw new Error('Harus Bernilai Numeric');
			}
			if (jumlah == 0) {
				throw new Error('Inputan tidak boleh 0');
			}
			this.saldo += jumlah;
			setTimeout(function(){
				alert(`Berhasil deposit saldo berjumlah ${jumlah} `);
			},1500)
		} catch (err) {
			alert(err.message);
		}
	}
	cekSaldo() {
		alert(`Saldo ${this.nama} sekarang adalah = ${this.saldo}`);
	}
}
const objek1 = new BankSystem('IJK', 100000);
let s=true;
while(s){
	alert('1.Withdraw'+'\n'+'2.Deposit'+'\n'+'3.Cek Saldo'+'\n'+'4.END');
	let pilihan=prompt("Masukkan Nomor Menu : ")
	if(+pilihan==1){
		let input = prompt('Masukkan jumlah Saldo : ');
		setTimeout(objek1.withdraw(+input))
	}else if(+pilihan==2){
		let input = prompt('Masukkan jumlah Saldo : ');
		setTimeout(objek1.deposit(+input))
	}else if(+pilihan==3){
		setTimeout(objek1.cekSaldo())
	}else if(+pilihan==4){
		s=false;
	}else{
		alert('Nomor Menu Tidak Valid!!!')
	}
}
setTimeout(objek1.cekSaldo())


