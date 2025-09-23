let navbarDiv = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        navbarDiv.classList.add('navbar-cng');
    } else {
        navbarDiv.classList.remove('navbar-cng');
    }
});


const navbarCollapseDiv = document.getElementById('navbar-collapse');
const navbarShowBtn = document.getElementById('navbar-show-btn');
const navbarCloseBtn = document.getElementById('navbar-close-btn');
// show navbar
navbarShowBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.add('navbar-collapse-rmw');
});

// hide side bar
navbarCloseBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
});

document.addEventListener('click', (e) => {
    if(e.target.id != "navbar-collapse" && e.target.id != "navbar-show-btn" && e.target.parentElement.id != "navbar-show-btn"){
        navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
    }
});

// stop transition and animatino during window resizing
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});

// Load More Functionality for Featured Places
document.addEventListener('DOMContentLoaded', function() {
    const loadMoreBtn = document.getElementById('load-more-btn');
    const hiddenItems = document.querySelectorAll('.featured-hidden');
    const itemsPerLoad = 6; // Show 6 items at a time
    let currentlyVisible = 0;

    // Check if there are hidden items, if not hide the button
    if (hiddenItems.length === 0) {
        loadMoreBtn.style.display = 'none';
        return;
    }

    loadMoreBtn.addEventListener('click', function() {
        let itemsToShow = [];
        
        // Collect the next batch of hidden items
        for (let i = currentlyVisible; i < currentlyVisible + itemsPerLoad && i < hiddenItems.length; i++) {
            if (hiddenItems[i] && !hiddenItems[i].classList.contains('show')) {
                itemsToShow.push(hiddenItems[i]);
            }
        }

        // Show the items with animation
        itemsToShow.forEach((item, index) => {
            setTimeout(() => {
                item.style.display = 'block';
                // Force a reflow to ensure display change is applied
                item.offsetHeight;
                item.classList.add('show');
            }, index * 100); // Stagger the animation by 100ms
        });

        currentlyVisible += itemsToShow.length;

        // Hide the load more button if all items are shown
        if (currentlyVisible >= hiddenItems.length) {
            setTimeout(() => {
                loadMoreBtn.style.display = 'none';
            }, itemsToShow.length * 100 + 300);
        }
    });
});