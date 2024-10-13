// Optional: If you want the dropdown to work on click for mobile views
document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.querySelector('.dropbtn');
    dropdown.addEventListener('click', function () {
        const dropdownContent = document.querySelector('.dropdown-content');
        dropdownContent.classList.toggle('show');
    });
});

// Close dropdown if clicked outside
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName('dropdown-content');
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
