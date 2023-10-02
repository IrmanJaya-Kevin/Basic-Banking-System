class BankSystem{
    constructor(nama,saldo){
        this.saldo=saldo;
        this.nama=nama;
    }
    withdraw(jumlah) {
        try {
            if(Number.isInteger(jumlah)){
                if(this.saldo>=jumlah){
                    if(jumlah!=0){
                        this.saldo-=jumlah;
                        alert(`Berhasil menarik saldo berjumlah ${jumlah}`);
                    }else{
                        throw new Error('Inputan tidak boleh 0');
                    }
                }else{
                    throw new Error('Saldo Kamu Kurang');
                }
            }else{
                throw new Error('Harus Bernilai Numeric');
            }
        } catch (err) {
            alert(err.message)
        }
    }
    deposit(jumlah){
        try {
            if(Number.isInteger(jumlah)){
                if(jumlah!=0){
                    this.saldo+=jumlah;
                    alert(`Berhasil deposit saldo berjumlah ${jumlah}`);
                }else{
                    throw new Error('Inputan tidak boleh 0');
                }
            }else{
                throw new Error('Harus Bernilai Numeric');
            }
        }catch (err) {
            alert(err.message)
        }
       
    }
    cekSaldo(){
        alert(`Saldo ${this.nama} sekarang adalah = ${this.saldo}`)
    }
}
const objek1=new BankSystem('IJK',100000);
let input=prompt('Masukkan jumlah Saldo : ');
objek1.withdraw(+input);
let input1=prompt('Masukkan jumlah Saldo : ');
objek1.deposit(+input1);
objek1.cekSaldo();