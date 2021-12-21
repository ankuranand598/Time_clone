let tc = `5
3 7 0 42 8`;
let newTc = tc.split("\n");
let size = +newTc[0];
let arr = newTc[1].split(" ").map(Number);
let flag = false;
for (let i = 0; i < size; i++) {
  if (arr[i] === 42) {
    flag = true;
    break;
  }
}
console.log(flag);
