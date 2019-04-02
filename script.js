var items = [];
var prices = [];

$(".add").click(function() {
    var name = $(".itemName").val();
    $(".itemName").val("");
    var price = parseInt($(".itemPrice").val());
    $(".itemPrice").val("");
    var url = ($(".itemImg").val());
    $(".itemImg").val("");
    items.push(name);
    prices.push(price);


    var total = 0;
    prices.forEach(function(priceElement) {
        total = total + priceElement;
    });
    $(".total").text(total);
    $(".items-in-cart").text(items.length);

    $(".cart").append("<div class='item'>" +
        "<p>" + name + "</p>" +
        "<p>" + price + "</p>" +
        "<img src = '" + url + "'>" +
        "</div>");

});

$(".check").click(function() {
    var itemname = items[0];
    var total = 0;
    var check = 0;
    prices.forEach(function(priceElement) {
        total = total + priceElement;
    });
    alert('Your total is ' + total + '. Thank your for purhasing ' +
        itemname + ' and all other items.');
});