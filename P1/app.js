let URL = "http://numbersapi.com";
let favNum = 48;

// P1
async function p1() {
  let data = await $.getJSON(`${URL}/${favNumber}?json`);
  console.log(data);
}
p1();
// P2
const favNumbers = [4, 8, 48];
async function p2() {
  let data = await $.getJSON(`${URL}/${favNumbers}?json`);
  console.log(data);
}
p2();
// P3
async function p3() {
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${URL}/${favNum}?json`))
  );
  facts.forEach((data) => {
    $("body").append(`<p>${data.text}</p>`);
  });
}
p3();
