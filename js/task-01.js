"use strict";

const categoryItems = document.querySelector('#categories').children;
console.log("Number of categories: ", categoryItems.length);

[...categoryItems].forEach(item => {
    const title = item.querySelector('h2');
    console.log("Category:", title.textContent);
    const categoryCount = item.querySelectorAll('li');
    console.log("Elements: ", categoryCount.length);
});