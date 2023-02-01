var divs = document.querySelectorAll(".article-1");
var divs2 = document.querySelectorAll(".article-2");
var divs3 = document.querySelectorAll(".article-3");
var divs4 = document.querySelectorAll(".article-4");

var divs_1 = document.querySelectorAll(".article-div");

var options = 
{
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.3
}

var callback = function(entries, observer){
    let entry = entries[0]; 
    if (entry.isIntersecting && entry.target.classList.contains("article-1"))
    {
        document.body.classList.add("background");
        divs_1[0].classList.add("background");
        divs[0].classList.add("move-right");
        divs[1].classList.add("move-left");
        console.log("es visible");
    }
    else if (entry.isIntersecting && entry.target.classList.contains("article-2"))
    {
        divs2[0].classList.add("move-left");
        divs2[1].classList.add("move-right");
    }
    else if (entry.isIntersecting && entry.target.classList.contains("article-3"))
    {
        divs_1[2].classList.add("background");
        divs3[0].classList.add("move-right");
        divs3[1].classList.add("move-left");
    }
    else if (entry.isIntersecting && entry.target.classList.contains("article-4"))
    {
        console.log("El articulo 4 esta siendo visto");
        divs4[0].classList.add("move-left");
        divs4[1].classList.add("move-right");
    }
    else{
        console.log("no es visible");
    }
    
};

var observer = new IntersectionObserver(callback, options);

var target = document.querySelector('.article-h3-pres');
observer.observe(target);
observer.observe(divs2[0]);
observer.observe(divs3[0]);
observer.observe(divs4[0]);
