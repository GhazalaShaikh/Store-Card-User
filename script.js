const gridContainer = document.querySelector("#grid-container");

function fetchProducts(cb) {
  const url = "https://fakestoreapi.com/products";
  fetch(url)
    .then((response) => response.json())
    .then((data) => cb(data));
}

function renderUI() {
  fetchProducts((data) => {
    console.log(data);

    data.forEach((element) => {
      const cardBoxContent = `
  <div class="box-card"> 
							<div class="image-container">
								<img src="${element.image}" alt="">
								<h1 class="header">${element.title}</h1>
							</div>
							<div class="content-container">
								<p>${element.description}</p>
								<div class="footer">
									<div class="left-side">
										<div class="ratings">
											<div class="empty-stars"></div>
											<div class="full-stars" style="width:${calculateRatings(
                        element.rating.rate
                      )}"></div>
										</div>
										<p class="price">${element.price}</p>
									</div>
									<div class="right-side">
										<button>Buy now</button>
									</div>
								</div>
								
							</div>
						</div>
  `;
      gridContainer.innerHTML += cardBoxContent;
    });
  });
}

function calculateRatings(value) {
  const totalValue = 5;
  return (value / totalValue) * 100 + "%";
}

renderUI();
