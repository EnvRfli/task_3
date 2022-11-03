const coba = document.getElementById("coba");

const nama = document.createElement("p");
const nim = document.createElement("p");
const kelas = document.createElement("p");
    
nama.textContent = 'M. Rafli Agusta Rizalfa';
nim.textContent = '119140124';
kelas.textContent = 'Pemrograman Web RA';
    
coba.appendChild(nama);
coba.appendChild(nim);
coba.appendChild(kelas);

function pindah() {
	location.replace("https://github.com/EnvRfli/task_3")
}