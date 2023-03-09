function a () {
  console.log(`Hello ${this.nome}`);
}

const b = function () {
  console.log(`Hello 2 ${this.innerHTML}`);
}

const c = () => {
  console.log(`Bla pela arrow ${this.nome}`);
}

const obj = {
  nome: 'Legalzão',
  innerHTML: 'bla bla aqui'
};

a.call(obj);

const d = b.bind(obj);

document.querySelector('button')
        .addEventListener('click', c);

c();

const e = (n) => n + 1;

console.log(e(41))

