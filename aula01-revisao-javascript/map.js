const a = [1, 2, 3];

for (let i = 0; i < a.length; i++) {
  if (a[i] % 2 === 0)
    console.log(a[i]);
}

a.forEach((i) => {
  console.log(i);
});

const b = a.filter((i) => i % 2 === 0);
console.log(b);

const c = a.map((i) => i * 2);
console.log(c);

const d = ' '.repeat(9).split(' ').map(() => 0);
console.log(d);

const e = a.reduce((x, acc) => 1 + acc, 0);
console.log(e);
