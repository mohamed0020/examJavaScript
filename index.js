$(document).ready(function(){
    let contactBtn= document.getElementById('contactBtn');
let finalResultCategory;
let finalResultArea;
let finalResultingredients;
let x;
let y;
let Width=$('aside .inner').outerWidth(true);


// api
async function getData(){
    let categoriesResponse= await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    finalResultCategory= await categoriesResponse.json();
    let areaResponse= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    finalResultArea= await areaResponse.json();
    let ingredientsResponse=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    finalResultingredients=await ingredientsResponse.json();
    dispalyCategory();
    displayArea();
    displayIngredients();
}
getData();


// api

function dispalyCategory(){
    let cartoona=``;
    for(let i=0;i<finalResultCategory.categories.length;i++){
        cartoona+=`
        <div class="col-sm-6 col-md-3 position-relative overflow-hidden text-white">
    <img class="w-100 overflow-hidden" src="${finalResultCategory.categories[i].strCategoryThumb}" alt="">
    <div class="overlay position-absolute text-center text-black">
    <h3>${finalResultCategory.categories[i].strCategory}</h3>
    <p>${finalResultCategory.categories[i].strCategoryDescription}</p>
    </div>
</div>
        `
    }
    document.getElementById('rowDataCategory').innerHTML=cartoona;
}

function displayArea(){
    let cartoona=``;
    for(let i=0;i<finalResultArea.meals.length;i++){
        cartoona+=`
        <div class="col-sm-6 col-md-3 mb-3 text-white text-center">
                    <div class="innerDiv">
                    <i class="fa-solid fa-building fa-3x text-red"></i>
                    <h3 class="fw-lighter">${finalResultArea.meals[i].strArea}</h3 class="fw-light">
                    </div>
                </div>
        `
    }
    document.getElementById('rowDataArea').innerHTML=cartoona;
}
function displayIngredients(){
    let cartoona=``;
    for(let i=0;i<finalResultingredients.meals.length;i++){
        cartoona+=`
        <div class=" col-md-3 text-center text-white bg-white">
                        <i class="fa-solid fa-bowl-food fa-3x"></i>
                        <h3>${finalResultingredients.meals[i].strIngredient}</h3>
                        <p>${finalResultingredients.meals[i].strDescription}</p>
                    </div>
        `
    }
    document.getElementById('rowDataIngredients').innerHTML=cartoona;
}
$('#CategoriesBtn').click(function(){
    $('header').css({'display':'none'});
    $('#categories').css({'display':'block'});
    $('aside').animate({left:`-${Width}`},500)
})

contactBtn.addEventListener('click',function(){
    $('header').css({'display':'none'});
    $('#contact').css({'display':'block'});
    $('aside').animate({left:`-${Width}`},500)
})
$('#searchBtn').click(function(){
    $('#search').css({'display':'flex'});
    $('header').css({'display':'none'});
    $('aside').animate({left:`-${Width}`},500)
    

})
$('#areaBtn').click(function(){
    $('header').css({'display':'none'});
    $('#area').css({'display':'block'});
    $('aside').animate({left:`-${Width}`},500)
})


let btn=$('#openingBtn');
console.log($('aside').css('left'))
btn.click(function(){
    let Width=$('aside .inner').outerWidth(true);
    if($('aside').css('left')=='0px'){
    $('aside').animate({left:`-${Width}`},500)
    }
    else{
        $('aside').animate({left:`0px`},500)
    }
    
})
$('#loading .sk-chase').fadeOut(1000,function(){
    $('#loading').fadeOut(1000,function(){
        $('#loading').remove();
        $('body').css({'overflow':'auto'})
    })
})
})