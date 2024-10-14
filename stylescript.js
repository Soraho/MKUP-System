// Map color options to corresponding image files
const colorImageMap = {
    black: "item16-1.jpeg",
    pink: "item16-2.jpeg",
    ivory: "item16-3.jpeg",
    charcoal: "item16-4.jpeg",
};

// Handle color change from the dropdown
document.getElementById('color').addEventListener('change', function() {
    const selectedColor = this.value;
    changeMainImage(selectedColor);
    updateActiveThumbnailByColor(selectedColor);
});

// Handle thumbnail click to change main image
document.querySelectorAll('.thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        const selectedColor = this.getAttribute('data-color');
        changeMainImage(selectedColor);
        updateActiveThumbnail(this);
    });
});

// Function to change the main image based on the selected color
function changeMainImage(color) {
    const mainImage = document.getElementById('main-image');
    mainImage.src = colorImageMap[color];
}

// Function to update active thumbnail highlighting
function updateActiveThumbnail(activeThumbnail) {
    document.querySelectorAll('.thumbnail').forEach(thumbnail => {
        thumbnail.classList.remove('active');
    });
    activeThumbnail.classList.add('active');
}

// Function to update active thumbnail based on selected color
function updateActiveThumbnailByColor(color) {
    document.querySelectorAll('.thumbnail').forEach(thumbnail => {
        if (thumbnail.getAttribute('data-color') === color) {
            thumbnail.classList.add('active');
        } else {
            thumbnail.classList.remove('active');
        }
    });
}

document.getElementById('add-to-cart').addEventListener('click', function() {
    alert('已將商品加入購物車！');
});

document.getElementById('add-to-wishlist').addEventListener('click', function() {
    alert('已將商品加入收藏！');
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function toggleDropdown() {
    const dropdown = document.querySelector('.icon.account .dropdown-content');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

window.onclick = function(event) {
    if (!event.target.matches('.icon.account img')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
}

function showPW() {
    document.getElementById("password").type = "text";
}

function hidePW() {
    document.getElementById("password").type = "password";
}



