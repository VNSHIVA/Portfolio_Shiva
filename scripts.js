


// Function to show only the websites
function showweb() {
    document.getElementById('Webs').style.display = 'flex';
    document.getElementById('Apps').style.display = 'none';
    document.getElementById('Photo').style.display = 'none';
    setActiveButton('web');
}

// Function to show only the apps
function showapp() {
    document.getElementById('Webs').style.display = 'none';
    document.getElementById('Apps').style.display = 'flex';
    document.getElementById('Photo').style.display = 'none';
    setActiveButton('app');
}

// Function to show only the photos
function showpic() {
    document.getElementById('Webs').style.display = 'none';
    document.getElementById('Apps').style.display = 'none';
    document.getElementById('Photo').style.display = 'flex';
    setActiveButton('pic');
}

// Function to set the active filter button
function setActiveButton(filterType) {
    const buttons = document.querySelectorAll('.filter-item');
    buttons.forEach(button => button.classList.remove('active'));
    document.querySelector(`.filter-item[onclick="show${filterType}()"]`).classList.add('active');
}

// Initialize default view
document.addEventListener('DOMContentLoaded', () => {
    showweb(); // Default to showing websites
});



const inputs = document.querySelectorAll(".contact-input");

inputs.forEach((ipt) => {
    ipt.addEventListener("focus", () => {
        ipt.parentNode.classList.add("focus");
        ipt.parentNode.classList.add("not-empty");
    });
    ipt.addEventListener("blur", () => {
        if (ipt.value == "") {
            ipt.parentNode.classList.remove("not-empty");
        }
        ipt.parentNode.classList.remove("focus");
    });
});