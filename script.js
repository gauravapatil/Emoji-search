let emojis=document.getElementById("emojis");
let filter=document.getElementById("filter-emoji")
let search=document.getElementById("search");

filter.addEventListener("click",(e) =>{
    const button=e.target.closest(".fil-btn");
    if(button){
        e.preventDefault();
        let category=button.getAttribute("data-category");
        filterFunction(category);
    }

})
let filterFunction=(value) =>{
    if (value.toLowerCase() === "all") {
        filteredData = emojiList;
    } else {
        filteredData = emojiList.filter(e => {
            if (e.category.toLowerCase().includes(value.toLowerCase())) {
                return true;
            }
            if (e.tags.some(tag => tag.toLowerCase().startsWith(value.toLowerCase()))) {
                return true;
            }
            if (e.description.toLowerCase().includes(value.toLowerCase())) {
                return true;
            }
            if (e.aliases.some(alias => alias.toLowerCase().startsWith(value.toLowerCase()))) {
                return true;
            }
            
            return false;
        });
    }

    displayEmojis(filteredData);
};


function displayEmojis(value="emojiList"){
    emojis.innerHTML="";
      value.forEach(e => {
        
        let emoji_box=document.createElement("span");
        emoji_box.style.width="50px";
        emoji_box.style.height="50px";
        emoji_box.innerHTML=e.emoji;
        emoji_box.style.cursor="pointer";
        emoji_box.style.display="flex";
        emoji_box.style.justifyContent="center";
        emoji_box.style.alignItems="center";
        emoji_box.style.backgroundColor="bisque";
        emojis.append(emoji_box);
      });
}
window.addEventListener("load", () => {
    displayEmojis(emojiList);
});
search.addEventListener('keyup', (event) => {
    let value = event.target.value;
    filterFunction(event.target.value);
});

emojis.addEventListener("click", (e) => {
     navigator.clipboard.writeText(e.target.innerText);

     alert("Copied to clipboard");
    console.log( e.target);
});


