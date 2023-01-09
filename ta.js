var tanya = true ;
while (tanya) {
var  com = Math.floor(Math.random()*10) + 1,
        d = 3 ,
        hasil = '' ,
        ulang = true ;

alert ('tebak angka dari 1-10 \nkamu memiliki 3 kesempatan') ;
        console.log(com) ;
var   p = prompt ('masukan angka tebakan') ;   

    for ( d ; d >= 1 ; d--) {
        if (p == com) {
            hasil = 'Benar' ;
        }  else if (p != com && d > 1) {
            hasil = (p < com) ? 'Terlalu rendah' : 'Terlalu besar' ;
            alert (hasil + '\nmasih memiliki ' + (d-1) + ' kesempatan.');
            p = prompt ('masukan angka tebakan') ;   
        } else if (p != com && d >= 1) {
            hasil = 'salah' ;
            alert (hasil + '\nkesempatan habis') ;
        } else {
            ('Yang anda masukan slah \ntidak sesuai yang diminta') ; 
        }
    }
    if (p == com) {
        alert ('Anda ' + hasil + '\nAngka yang dicari ' + com) ;
    } else {
        alert ('angka yang dicari ' + com) ;
    }
    tanya = confirm ('Main lagi ?') ;
}