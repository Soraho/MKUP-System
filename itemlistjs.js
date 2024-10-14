

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


document.addEventListener('DOMContentLoaded', function() {
    function applyFilter(filterClass) {
        // 顯示或隱藏商品
        document.querySelectorAll('.item').forEach(item => {
            if (filterClass === '*' || item.classList.contains(filterClass)) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });

        // 顯示或隱藏介紹區塊
        const introBlocks = document.querySelectorAll('.category-intro');
        if (filterClass === '*') {
            introBlocks.forEach(intro => {
                intro.classList.add('hidden');
            });
            document.querySelector('.category-intro:first-of-type').classList.remove('hidden');
        } else {
            introBlocks.forEach(intro => {
                if (intro.classList.contains(filterClass)) {
                    intro.classList.remove('hidden');
                } else {
                    intro.classList.add('hidden');
                }
            });
        }
    }

    // 獲取 URL 中的 hash
    const hash = window.location.hash;
    const filter = hash ? hash.replace('#filter=', '') : '*';
    applyFilter(filter);

    // 設置點擊事件以更新 URL
    const categoryButtons = document.querySelectorAll('.category-button');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterClass = this.getAttribute('data-filter');
            window.location.hash = `#filter=${filterClass}`;
            applyFilter(filterClass);

            // 更新按鈕的 active 狀態
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
});