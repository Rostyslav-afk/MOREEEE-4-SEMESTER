const imgObserver = new IntersectionObserver((entries, observer) => {
    // console.log(entries);
    entries.forEach(elem => {
        if(elem.isIntersecting){
            elem.target.src = elem.target.dataset.src
        }
    });
});

document.querySelectorAll("img").forEach(img => imgObserver.observe(img)); 