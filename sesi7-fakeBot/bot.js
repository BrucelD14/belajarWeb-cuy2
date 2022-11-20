const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");

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
  console.log({ userData: userData });
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init];
  }, [800]);
  userData.push(jawaban.value);
  jawaban.value = "";
}

function finishing() {
  pertanyaan.innerHTML = `Makasih yaa ${userData[0]} dah main ke brucebot :), kali kali kita main ${userData[2]} bareng yuk`;
  jawaban.value = "sama-sama brucebot";
}

function botEnd() {
  window.location.reload();
}
