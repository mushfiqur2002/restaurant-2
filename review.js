const testCon = document.querySelector('.reviewCards');
let quantity = 0;
async function fetchData2() {
    try{
        const res = await fetch('reviewData.json')
        const data = await res.json()
        quantity = data.length;
        displayCard2(data,quantity);
    }catch(err){
        console.log(err);
    }
}

function displayCard2(items,quantity) {
    testCon.innerHTML = '';
    testCon.style.setProperty('--quantity', `${quantity}`);
    items.forEach((testimonial,index) => {
        let element = function (testimonial) {
            return `<div class="testcard center" style='--position:${index+1}'>
                        <div class="info center">
                            <div class="image">
                                <img src="${testimonial.image}">
                            </div>
                            <div class="basic center" style="flex-direction: column;">
                                <h1>${testimonial.name}</h1>
                                <div class="stars" data-rating="${testimonial.star}">
                                    <i class="fa-solid fa-star star"></i>
                                    <i class="fa-solid fa-star star"></i>
                                    <i class="fa-solid fa-star star"></i>
                                    <i class="fa-solid fa-star star"></i>
                                    <i class="fa-solid fa-star star"></i>
                                </div>
                            </div>
                        </div>
                        <div class="text">
                            <p>${testimonial.review}</p>
                        </div>
                    </div>`;
        };

        // Append each card to the container
        let disEle = element(testimonial);
        testCon.innerHTML += disEle;
    });

    // Apply star ratings for each card
    applyStarRatings();
}

// Apply star ratings for each card
function applyStarRatings() {
    const starContainers = document.querySelectorAll('.stars');

    starContainers.forEach(starContainer => {
        const rating = parseInt(starContainer.getAttribute('data-rating'), 10); // Get the rating value

        for (let i = 0; i < rating; i++) {
            starContainer.children[i].classList.add('red'); // Add red color to the stars
        }
    });
}

fetchData2()
