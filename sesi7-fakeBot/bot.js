const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");

let init = 0;

const botSay = () => {
  return [`Halo, perkenalkan nama saya brucebot. Siapa nama kamu??`];
};

pertanyaan.innerHTML = botSay()[0];

function botStart() {
  console.log("starting bot");
}
