// const parentEl = document.querySelector(".parent");

// const childEl = document.querySelector(".child");

// const childrenEl = document.querySelector(".children");


// parentEl.addEventListener("click", onParentClick);

// function onParentClick(evt) {
//     console.log("TARGET", evt.target);
//     console.log("CURRENTTARGET", evt.currentTarget);

//     if (evt.target.classList.contains("parent")) {
//         alert("parent");
//     }

//     if (evt.target.classList.contains("child")) {
//         alert("Child");
//     }

//     if (evt.target.classList.contains("children")) {
//         alert("Children");
//     }
// };

// childEl.addEventListener("click", onChildClick);

// function onChildClick(evt) {
//     console.log("TARGET", evt.target);
//     console.log("CURRENTTARGET", evt.currentTarget);
// };

// childrenEl.addEventListener("click", onChildrenClick)

// function onChildrenClick(evt) {
//     console.log("TARGET", evt.target);
//     console.log("CURRENTTARGET", evt.currentTarget);
// };

const listEl = document.querySelector(".list");


listEl.addEventListener("click", onContainerButtonClick);

function onContainerButtonClick(event) {
    let selectedBtn = null;

    if (event.target.nodeName !== "BUTTON") {
        return
    };

    const targetActiveBtn = document.querySelector(".active-btn");

    // if (targetActiveBtn) {
    //     targetActiveBtn.classList.remove("active-btn");
    // };

    targetActiveBtn?.classList.remove("active-btn");

    event.target.classList.add("active-btn");

    selectedBtn = event.target.dataset.value;
    console.log(selectedBtn);
    

    //      console.log("TARGET", event.target);
    //    console.log("CURRENTTARGET", event.currentTarget);
}

