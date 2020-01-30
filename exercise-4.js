var isi_tanggal=''
var isi_bulan=''
var isi_tahun=''

// Input Tanggal, Bulan, dan Tahun disini
var tanggal = '21'
var bulan = '1'
var tahun = '1945'


switch (true){
  case tanggal >= 1 && tanggal <=31:
  isi_tanggal = tanggal
  break 
}

switch (true){
  case bulan == 1 :
  isi_bulan = 'Januari'
  break

  case bulan == 2 :
  isi_bulan = 'Februari'
  break

  case bulan == 3 : 
  isi_bulan = 'Maret'
  break

  case bulan == 4 :
  isi_bulan = 'April'
  break

  case bulan == 5 :
  isi_bulan = 'Mei'
  break

  case bulan == 6 :
  isi_bulan = 'Juni'
  break

  case bulan == 7 :
  isi_bulan = 'Juli'
  break

  case bulan == 8 :
  isi_bulan = 'Agustus'
  break

  case bulan == 9 :
  isi_bulan = 'September'
  break

  case bulan == 10 :
  isi_bulan = 'Oktober'
  break

  case bulan == 11 :
  isi_bulan = 'November'
  break

  case bulan == 12 :
  isi_bulan = 'Desember'
  break  
}

switch (true){
  case tahun >= 1900 && tahun <= 2200:
  isi_tahun = tahun
  break
}

if (isi_tanggal === tanggal && bulan >= 1 && bulan <= 12 && isi_tahun === tahun)
{
  console.log(isi_tanggal + ' ' + isi_bulan + ' ' + isi_tahun)
  
}

else
{
  console.log('format salah')
}
