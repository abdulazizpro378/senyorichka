const likeRow = document.querySelector(".like-row");


function getcartCart({ img, name, desc, id,rating }) {
  return `
        
        <div class="like-card">
        <div class="like-body">
          <img src="${img}" alt="" />
        </div>
        <div class="like-footer">
          <h3>${name}</h3>
          <p>${desc}</p>
          
          <div class="card-star">
          ${"★".repeat(rating) + "☆".repeat(5 - rating)}
          </div>
            <button class="btn3">
                В корзину
            </button>
        
        </div>
    
      </div>
    
        
        `;
}

function getcardpro (){
  cartProducts.forEach((pr) => {
    likeRow.innerHTML += getcartCart(pr);
  });
  
}

getcardpro()