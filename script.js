fetch('products.json')
  .then(res => res.json())
  .then(products => {
    const list = document.getElementById('product-list');
    products.forEach(p => {
      const item = document.createElement('div');
      item.className = 'product';
      item.innerHTML = `
        <img src="${p.image}" width="150" height="150">
        <h3>${p.name}</h3>
        <p>Rp ${p.price.toLocaleString()}</p>
        <button>Beli</button>
      `;
      list.appendChild(item);
    });
  });
