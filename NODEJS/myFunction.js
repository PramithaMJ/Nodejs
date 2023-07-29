const math = (num1, num2, num3, num4) => {
  let a = num1 + num2 * 2;
  if (num3) {
    a += num3 - 5;
  }
  if (num4) {
    a *= num4;
  }

  return a;
};

const abc = () => {};
const aaa = () => {};
const ddd = () => {};
const fff = () => {};

const main = {
  abc,
  aaa,
  ddd,
  fff,
};

export default main;

export { abc,aaa,ddd,fff,main };
