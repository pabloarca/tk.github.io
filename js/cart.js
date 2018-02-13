var updateTotal = function() {
 
    var sumtotal;
       var sum = 0;
    //Add each product price to total
    $(".product").each(function() {
        var price = 145;
        var quantity = $('.quantityTxt', this).val();
   
        //Total for one product
        var subtotal = price*quantity;
        //Round to 2 decimal places.
        subtotal = subtotal.toFixed(2);        
        //Display subtotal in HTML element
        $('.productTotal', this).html(subtotal);

    });
    // total
       $('.productTotal').each(function() {
        sum += Number($(this).html());
    }); 
    
        

    $('#sum').html(sum.toFixed(2));
};

//Update total when quantity changes
$(".product .quantityTxt").keyup(function() {
    updateTotal();
});

//Update totals when page first loads
updateTotal();

// set this from local
    $('span.productTotal').each(function() {
        $(this).before("&euro;")
    }); 

// unit price
   $('.product p').each(function() {
       var $price = $(this).parents("div").data('price');
      $(this).before($price);
    }); 



