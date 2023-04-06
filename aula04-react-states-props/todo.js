const KEYCODE = {
  ENTER: 13
};

let raiz = document.querySelector('section'),
    lista = [];

function adicionar (ev) {
  if (ev.keyCode === KEYCODE.ENTER) {
    lista.push({ content: ev.target.value, check: false });
    ev.target.value = '';

    render();
  }
}

function check (alvo) {
  alvo.check = !alvo.check;
  render();
}

function render () {
  ReactDOM.render((<div>
    <input type="text" onKeyUp={adicionar} />
    <ul>
      {lista.map((item, ind) => <li>
        <input type="checkbox"
               onClick={() => check(item)}
               id={`check_${ind}`}
               checked={item.check} />
        <label for={`check_${ind}`}
               style={!item.check ? {} : {textDecoration: 'line-through' , color: 'gray'} }>
           {item.content}
        </label>
      </li>)}
    </ul>
  </div>), raiz);
}

render();

