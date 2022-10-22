const nameList = document.querySelector('#categories');
const listItem = nameList.querySelectorAll('.item');
console.log(`Number of categories: ${listItem.length}`);
console.log("");
for (let i = 0; i < listItem.length; i++) {
    console.log("Category: " + listItem[i].querySelector('h2').textContent);
    console.log("Elements: " + listItem[i].querySelectorAll('ul li').length);
    console.log("");
}