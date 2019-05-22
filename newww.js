const plus = () => {
  // for (let i = 0; i < 10; i += 1) {
  //   console.log(`id ${i}`);
  // }
  let i = 0;
  while (i < 10) {
    console.log(`id ${i}`);
    i += 1;
    continue;
  }
};

export default plus;
