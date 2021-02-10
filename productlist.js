const url = "https://kea-alt-del.dk/t7/api/products";

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductlist(data);
  });

function handleProductlist(data) {
  console.log(data);
  data.forEach(showProduct);
}

/* <template id="smallProductTemplate">
          <article class="smallProduct">
            <img
              src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp"
              alt="Sahara Team India Fanwear Round Neck Jersey"
            />
            <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
            <p class="subtle">Tshirts | Nike</p>
            <p class="price"><span>Prev.</span> DKK 1595,-</p>
            <div class="discounted">
              <p>Now DKK 1560,-</p>
              <p>-34%</p>
            </div>
            <a href="product.html">Read More</a>
          </article>
        </template> */

function showProduct(product) {
  console.log(product);
  //grad template
  const template = document.querySelector("#smallProductTemplate").content;
  //clone
  const copy = template.cloneNode(true);
  //change content
  copy.querySelector(
    ".subtle"
  ).textContent = `${product.articletype} / ${product.brandname}`;
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(
    "img.productimage"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector("img.productimage").alt = product.productdisplayname;

  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }

  if (product.discount) {
    copy.querySelector("article").classList.add("onSale");
    copy.querySelector(".hind").textConent = product.price / product.discount;
  }

  /*  <div class="discounted">
            <p>Now DKK 1560,-</p>
            <p>-34%</p>
          </div> 

          */

  // parent
  const parent = document.querySelector("main");
  //append
  parent.appendChild(copy);
}
