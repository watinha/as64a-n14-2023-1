(async () => {

  let resp = await fetch('https://dummyjson.com/products'),
      data = await resp.json();

  console.log(data);

})();
