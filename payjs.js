document.querySelectorAll('.page-number').forEach(page => {
    page.addEventListener('click', function(event) {
        event.preventDefault();
        // Load new items based on page number
        // This could involve an AJAX request or other logic
        console.log('Page clicked:', this.textContent);
    });
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

document.addEventListener('DOMContentLoaded', () => {
    const itemPrices = [299, 299]; //!更新物品的價錢在這裡！！！！！！
    const totalAmount = document.getElementById('total-amount');

    function updateTotalAmount() {
        let total = 0;
        document.querySelectorAll('.cart-item').forEach((item, index) => {
            const quantity = parseInt(item.querySelector('select').value);
            total += itemPrices[index] * quantity;
        });
        totalAmount.textContent = `NT $${total}`;
    }

    // Update total price when quantity changes
    document.querySelectorAll('.quantity select').forEach(select => {
        select.addEventListener('change', updateTotalAmount);
    });

    // Handle "Later" button click
    document.querySelectorAll('.later-btn').forEach(button => {
        button.addEventListener('click', () => {
            const cartItem = event.target.closest('.cart-item');
            cartItem.remove();
            updateTotalAmount();
            const cartItemsContainer = document.querySelector('.cart-items');
            if (cartItemsContainer.children.length === 0) {
                cartItemsContainer.style.borderTop = 'none';
                cartItemsContainer.style.borderBottom = 'none';
            }
            alert('商品已移至收藏清單');
        });
    });

    // Handle "Delete" button click
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const cartItem = event.target.closest('.cart-item');
            cartItem.remove();
            updateTotalAmount();
            const cartItemsContainer = document.querySelector('.cart-items');
            if (cartItemsContainer.children.length === 0) {
                cartItemsContainer.style.borderTop = 'none';
                cartItemsContainer.style.borderBottom = 'none';
            }
        });
    });

    // Initial total amount calculation
    updateTotalAmount();
});
