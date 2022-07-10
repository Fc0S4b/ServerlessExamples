const result = document.querySelector('.result');

const fetchProduct = async () => {
  result.innerHTML = `<h2>Loading...</h2>`;
  // console.log('single product page');
  try {
    const id = window.location.search;
    // console.log(id);
    const {
      data: { fields },
    } = await axios(`/api/3-product${id}`);
    console.log(fields);
    const { name, desc, price, image } = fields;
    result.innerHTML = `
    <h1 class="title">${name}</h1>
  <article class="product">
    <img class="product-img"
    src="${image[0].url}"
    alt="${name}"
    />
    <div class="product-info">
      <h5 class="title">${name}/h5>
      <h5 class="price">$${price}</h5>
      <p class="desc">${desc}</p>
    </div>
  </article>`;
    // console.log(data); data, status, headers, config
  } catch (error) {
    result.innerHTML = `<h2>${error.response.data}</h2>`;
  }
};

fetchProduct();
