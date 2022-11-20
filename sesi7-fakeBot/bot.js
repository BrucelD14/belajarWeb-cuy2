const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");

let init = 0;

const botSay = () => {
  return [`Halo, perkenalkan nama saya brucebot. Siapa nama kamu??`];
};

pertanyaan.innerHTML = botSay()[0];

function botStart() {
  init++;
  if (init === 1) {
    console.log({ nama: jawaban.value });
  } else if (init === 2) {
    console.log({ usia: jawaban.value });
  } else if (init === 3) {
    console.log({ hobi: jawaban.value });
  } else if (init === 4) {
    console.log({ pacar: jawaban.value });
  } else if (init === 5) {
    finishing();
  } else {
    botEnd();
  }
}

function finishing() {
  console.log("finishing...");
}

function botEnd() {
  console.log("bot end...");
}
