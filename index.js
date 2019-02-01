function makan() {
  console.log('ayo makan')
  console.log('lets eat')
  console.log('hayu tuang')
  console.log('kuy kemek')
}
makan()
makan()
console.log('-------')

function pagi() {
  return 'selamat pagi'
}
const salam = pagi()
console.log(salam)

function kalimatmemanggil() {
  return 'hai hai'
}
const horas = kalimatmemanggil()
console.log(horas)

console.log('---------')
//learn function array

function UGM() {
  const mahasiswa = ['bara', 'jabar', 'ade']
  return mahasiswa
}

const kuliah = UGM()

for (const value of kuliah) {
  console.log(value)
}
console.log('--------')

function menghitungpenndukung(siapa) {
  return 'prabowo ' + siapa
}

const presiden = menghitungpenndukung('nomor2')
console.log(presiden)

function absen(NamaDepan, NamaBelakang) {
  return 'siang ' + NamaDepan + NamaBelakang
}
console.log(absen('jabar ', 'panji'))
console.log(absen('adek ', 'krisnanda'))
console.log(absen('bara ', 'limbong'))

function mean(w, x, y, z) {
  const result = (w + x + y + z) / 4
  return result
}
const gradeA = mean(8, 5, 2, 4)
console.log(gradeA)
const gradeB = mean(90, 78, 95, 76)
console.log(gradeB)
const gradeC = mean(gradeA, 55, 60, gradeB)
console.log(gradeC)

function uangjajan(bara, ade, jabar, rambe) {
  const jumlah = bara + ade + jabar + rambe
  return jumlah
}
const harian1 = uangjajan(10, 20, 30, 40)
console.log(harian1)
const harian2 = uangjajan(20, harian1, 40, 30)
console.log(harian2)
const harian3 = uangjajan(25, 25, 25, 25)
console.log(harian3)
const harian4 = uangjajan(harian1, harian2, harian3, harian3)

const warna = [{ color: 'biru' }, { color: 'merah' }, { color: 'ijo' }]
function pelangi() {
  const texts = warna.forEach(text => {
    console.log(text)
  })
}
console.log(pelangi())
