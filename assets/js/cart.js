$(document).ready(function(){
    var products = [
      {
        name: "Amazon Fire TV",
        manufacturer: "Amazoon",
        imageSrc: "assets/images/product01.jpg",
        description: "Eligible for free shipping and returns",
        price: 89.99
      },
      {
        name: "Amazon Fire",
        manufacturer: "Amazoon",
        imageSrc: "assets/images/product02.jpg",
        description: "Eligible for free shipping and returns",
        price: 69.00
      },
      {
        name: "Amazon Echo",
        manufacturer: "Amazoon",
        imageSrc: "assets/images/product03.jpg",
        description: "Eligible for free shipping and returns",
        price: 109.99
      }
    ];

    // Get started here!
    // var newElement = $('<div />').text(products[0].name)
    // $('body').append(newElement)
    // var newElement = $('<span />').text(products[0].price)
    // $('.cart').append(newElement)
    var newElement = $( $('template').html() )
    $('.manufacturer',newElement).text(products[0].name)
    $('.cart').append(newElement)
  });
var updateView = function(){
  var productsInCart = $('.cart .product');
  var productsSaved = $(.saved .product);

  if(productsInCart.length === 0){
    $('.cart .empty').show();
    $('')
  } else {
    $('.cart .empty').hide();
  }
  if(productsSaved.length === 0){
    $('.cart .empty').show();
  } else {
    $('.cart .empty').hide();
  }
var total = 0;
  $(productsInCart).each(fuction()){
    total += Number($(this).data('price'));
  }
};
$('cart-total span').text('$' + total.toFixed(2));

var productTemplate = $('template#product').html();
console.log(productTemplate)

for(var i= 0; i <products.length; i++){
  var newProduct = $(productTemplate);
  var pData= products[i];

  $('.content h2', newProduct).text(products[i].name);
  var manufacturerSpan = $('<span />').addClass('manufacturer').text('by' + products[i].manufacturer)
  $('.content h2',newProduct ).append(manufacturerSpan);
  $('.content h3',newProduct ).text(products[i].description);
  $('.image img', newProduct).attr('src', products[i].imageSrc);
  $('.price', '.mobile-price').text('$'+ products[i].price.toFixed(2));
  $(newProduct).data('price', products[i].price);


  $('.cart').append(newProduct)
}

updateView();

$('.product'.move').on('click', function()){
  if($(this).parents().eq(4).hasClass('cart')){
  $(this).parents(.eq(3).prependTo('.saved');
    $(this).text('Add to cart');
  } else {

  }
}
