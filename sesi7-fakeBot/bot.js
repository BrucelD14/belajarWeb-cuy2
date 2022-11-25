const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");
const loaders = document.getElementById("loaders");
const container = document.getElementsByClassName("container");

let init = 0;

const botSay = (data) => {
  return [
    `Halo, perkenalkan nama saya brucebot. Siapa nama kamu??`,
    `Halo ${data?.nama}, berapa usia kamu?`,
    `Ohh ${data?.usia}, hobi kamu apa yaa?`,
    `wahh sama dong aku juga hobi ${data?.hobi}, btw punya pacar nggak?`,
    `Oooh ${data?.pacar}, ya udah kalau gitu. Udahan yaa`,
  ];
};

pertanyaan.innerHTML = botSay()[0];

let userData = [];

function botStart() {
  if (jawaban.value.length < 1) {
    return alert("isi jawaban dulu yaa");
  }
  init++;
  if (init === 1) {
    botdelay({ nama: jawaban.value });
  } else if (init === 2) {
    botdelay({ usia: jawaban.value });
  } else if (init === 3) {
    botdelay({ hobi: jawaban.value });
  } else if (init === 4) {
    botdelay({ pacar: jawaban.value });
  } else if (init === 5) {
    finishing();
  } else {
    botEnd();
  }
}

function botdelay(jawabanUser) {
  loaders.style.display = "block";
  container[0].style.filter = "blur(8px)";
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init];
    loaders.style.display = "none";
    container[0].style.filter = "none";
  }, [800]);
  userData.push(jawaban.value);
  jawaban.value = "";
}

function finishing() {
  pertanyaan.innerHTML = `Makasih yaa ${userData[0]} dah main ke brucebot :), kali kali kita main ${userData[2]} bareng yuk `;
  jawaban.value = "sama-sama brucebot";
}

function botEnd() {
  alert(`Terimakasih ${userData[0]} sudah berkunjung, anda akan diarahkan ke halaman utama :)`)
  window.location.reload();
}
