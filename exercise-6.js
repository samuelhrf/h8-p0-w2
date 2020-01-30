// 1. Melakukan Looping Menggunakan While

var deret = 0
var jumlah = 1

while(deret <= 18) {
    jumlah++
    deret++
    if(jumlah === 2){
        console.log('LOOPING PERTAMA')
    }
    console.log(jumlah + '- I love Coding')
}

while(jumlah >= 2){
    if(jumlah === 20)
    {
        console.log('LOOPING KEDUA')
    } 
    
    console.log(jumlah + '- I will become fullstack developer')
    jumlah--
}

//==========================================================================================

// 2. Melakukan Looping Menggunakan For

for (var deret = 1 ; deret <= 20 ; deret++)
{
    if(deret === 1)
    {
        console.log("LOOPING PERTAMA")
    }

    console.log(deret + '- I love coding')

}

for (var deret = 20 ; deret >=1 ; deret--)
{
    if(deret === 20)
    {
        console.log('LOOPING KEDUA')
    }

    console.log(deret + '- I will become fullstack developer')
}

//==========================================================================================

// 3. Angka Ganjil dan Genap

for (var deret1 = 1 ; deret1 <= 100 ; deret1 ++){
    if (deret1 % 2 === 0)
    {
        console.log('GENAP')
    }

    else
    {
        console.log('GANJIL')
    }
}

console.log('\n')
console.log('""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""')
console.log('\n')

for (var deret2 = 1 ; deret2 <= 100 ; deret2 += 2){

    if (deret2 % 3 === 0)
    {
        console.log(deret2 + ' KELIPATAN 3')
    }

    else
    {
        console.log('""')
    }

}

console.log('\n')
console.log('""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""')
console.log('\n')

for (var deret3 = 1 ; deret3 <= 100 ; deret3 += 5){

    if (deret3 % 6 === 0)
    {
        console.log(deret3 + ' KELIPATAN 6')
    }

    else
    {
        console.log('""')
    }

}

console.log('\n')
console.log('""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""')
console.log('\n')

for (var deret4 = 1 ; deret4 <= 100 ; deret4 += 9){

    if (deret4 % 10 === 0)
    {
        console.log(deret4 + ' KELIPATAN 10')
    }

    else
    {
        console.log('""')
    }

}