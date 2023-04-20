console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket=[];

function addItem(item, array){
    array.push(item);
    //return array; - just to test that it added my item.
    return true;
}
//end addItem
console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples', basket));
console.log(`Basket is now ${basket}`);
//test addItem
function listItems(array){
    let list="";
    for (let i=0; i<array.length; i++){
        list+=array[i]+ "\n";
    }
    return '\n'+list;
}
//end listItems
console.log ('TEST - should show apples:'+ listItems(basket));
console.log ('Adding another item to the basket (should say true)', addItem('banana', basket));
console.log ('Listing the updated basket:'+ listItems(basket));
console.log ('Adding yet another item to the basket (should say true)', addItem('blueberries', basket));
console.log ('Listing the updated basket:'+ listItems(basket));
//test listItems - I added a few items to the 'basket' array in order to test the result.

function empty(array){
    for (let i=array.length;i>=0; i--){
        array.pop(array[i]);
    }
    return array;
}
//end empty
console.log('TEST - should have emptied the array:', empty(basket));
//test empty
console.log("-----STRETCH GOALS-----");
//1.
const maxItems = 5;
//2.
function isFull(array){
    if (array.length<maxItems){
        return false;
    } else {
        return true;
    }
}
//end isFull
console.log('is the array full? - should say false:', isFull(basket));
console.log('is the array full? - should say true:', isFull([1,2,3,4,5,6,7]));
//test isFull
//3.
addItem = function(item, array){
    if(isFull(array)){
        return false;
    } else {
        array.push(item);
        // Return true to indicate item was added
        return true;
    }
}
//end updated addItem
console.log("Current array:", basket);
console.log("Should show true and add my item:", addItem("banana", basket));
console.log("Should show false as my array is too big:", addItem("banana", ['apple','blueberry','taco','sauce','steak','chicken']));
//test updated addItem
//4.
basket = ['apple','banana','blueberry'];//updated the basket in order to test it easier.
function removeItem(item,array){
    for (let i=0; i<array.length; i++){
        if (array[i]===item){
            array.splice(array.indexOf(item),1);
            return item;
        }
    }
    return null;
}
//end removeItem
console.log(`Basket is ${listItems(basket)}`);
console.log("should remove banana from my array and show it:", removeItem('banana',basket));
console.log(`Basket is now ${listItems(basket)}`);
console.log("should remove apple from my array and show it:", removeItem('apple',basket));
console.log(`Basket is now ${listItems(basket)}`);
console.log("should show 'null' as 'apple' isn't in my basket:", removeItem('apple',basket));
console.log(`Basket is ${listItems(basket)}`);
//test removeItem (using listItems for fun)