// let currentPage = window.location.pathname.split('/').pop();
let foodCon = document.querySelector('.foodCards');
async function fetchData1() {
    try{
        const res = await fetch('foodData.json')
        const data = await res.json()
        if(currentPage === 'index.html' || currentPage === ""){
            displayCard1(data.slice(0,3))
        }else{
            displayCard1(data)
        }
    }catch(err){
        console.log(err)
    }    
}

function displayCard1(items) {
    let element = items.map(function (item) {
        return `<div class="card center">
                    <div class="image center">
                        <img src="${item.image}" alt="">
                    </div>
                    <div class="text center">
                            <div class="info center">
                                <h1>${item.name}</h1>
                                <p class="price">$${item.price}</p>
                            </div>
                            <div>
                                <p class="discription">${item.description}</p>
                            </div>
                            <div>
                                <button class='btn'>add to cart</button>
                            </div>
                    </div>
                </div>`
    })
    let disEle = element.join("");
    foodCon.innerHTML = disEle;
}
fetchData1();