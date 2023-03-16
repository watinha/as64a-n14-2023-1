const ul = document.querySelector('ol'),
      gerar_url = ({ skip, limit }) =>
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;


(async () => {
  const res = await fetch(gerar_url({ skip: 0, limit: 25 })),
        data = await res.json(),
        total = data['total'],
        urls = [];

  for (var i = 25; i < total; i += 25) {
    urls.push(gerar_url({ skip: i, limit: 25 }));
  }

  const jsons = await Promise.all(
          urls.map((url) => fetch(url).then((r) => r.json()))),
        datas = [data, ...jsons];

  datas.forEach((data) => {
    data['products'].forEach((product) => {
      const li = document.createElement('li');
      li.innerHTML = product['title'];
      ul.appendChild(li);
    });
  });

})();
