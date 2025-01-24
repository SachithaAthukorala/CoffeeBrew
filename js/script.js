function underline(i) {

    var menu_item = document.getElementById("menu" + i);

    const array1 = [1, 2, 3, 4, 5, 6];
    const array2 = [i];

    const combinedArray = [...array1, ...array2];

    const numberCountMap = new Map();
    combinedArray.forEach(item => {
        const count = numberCountMap.get(item) || 0;
        numberCountMap.set(item, count + 1);
    });
    const uncommonNumbers = combinedArray.filter(item => numberCountMap.get(item) === 1);

    if (!uncommonNumbers.includes(i)) {
        menu_item.classList.add('menu_under');
        document.getElementById("m-i" + i).classList.add('text_orange');
        document.getElementById("m-i" + i).classList.remove('text-white-50');
    }

    for (let x = 1; x <= uncommonNumbers.length + 1; x++) {
        if (uncommonNumbers.includes(x)) {
            document.getElementById("menu" + x).classList.remove('menu_under');
            document.getElementById("m-i" + x).classList.add('text-white-50');
            document.getElementById("m-i" + x).classList.remove('text_orange');
        }
    }

    if (i == 1) {
        scrollToTop();
        animateText();
    }

}

function highlightActiveMenuItem() {
    const sections = document.querySelectorAll("section");

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {

            const menuId = index + 1;
            const menuItemId = `menu${index + 1}`;

            const activeMenuItem = document.getElementById(menuItemId);
            if (activeMenuItem) {
                activeMenuItem.classList.add("menu_under");
                document.getElementById("m-i" + menuId).classList.add('text_orange');
                document.getElementById("m-i" + menuId).classList.remove('text-white-50');

            }

            for (let x = 1; x <= 6; x++) {
                if (x != menuId) {
                    document.getElementById("menu" + x).classList.remove('menu_under');
                    document.getElementById("m-i" + x).classList.add('text-white-50');
                    document.getElementById("m-i" + x).classList.remove('text_orange');
                }
            }
        }
    });
}

window.addEventListener("scroll", () => {
    highlightActiveMenuItem();

    const navbar = document.getElementById("navbar-example2");
    const scrolled = window.scrollY > 0;

    if (scrolled) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

});

window.addEventListener("load", () => {
    highlightActiveMenuItem();
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function scrollToSection() {
    const contactSection = document.getElementById("contact_section");
    contactSection.scrollIntoView({ behavior: "smooth" });
}

AOS.init();

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,

    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
});

$(".owl-prev").appendTo(".owl-nav-left");
$(".owl-next").appendTo(".owl-nav-right");



function scrollToReservation() {
    document.getElementById('reservation_section').scrollIntoView();
}

function showAdSignInPassword() {

    var passfield = document.getElementById("adsignin_pass");
    var eye = document.getElementById("eye_sign_in");
    var label = document.getElementById("sign_in_show_pass_label");

    if (passfield.type == "password") {
        passfield.type = "text";
        eye.className = "bi bi-eye-fill";
        label.innerHTML = "Hide Password";
    } else {
        passfield.type = "password";
        eye.className = "bi bi-eye-slash-fill";
        label.innerHTML = "Show Password";
    }

}

var admin_forgot_password_modal;

function resetAdPasswordModal() {
    var m = document.getElementById("adForgotPasswordModal");
    admin_forgot_password_modal = new bootstrap.Modal(m);
    admin_forgot_password_modal.show();
}

var updateMenuItemModel;

function updateMenuItem() {
    var m = document.getElementById("updateMenuItem");
    updateMenuItemModel = new bootstrap.Modal(m);
    updateMenuItemModel.show();
}

function changeDeliverStatus(x, y) {
    var btn = document.getElementById("bt" + x);

    if (y == 1) {
        btn.innerHTML = "Email Sent";
        btn.classList = "fw-bold text-center text-bg-primary text-light border-0";
    } else {
        alert("Email Already Sent");
    }
}

function adminLogin() {
    window.location.href = "menuMng.html";
}

function showAdResetPassword() {
    var passfield1 = document.getElementById("adrePass1");
    var passfield2 = document.getElementById("adrePass2");
    var eye = document.getElementById("eye_sign_in");
    var label = document.getElementById("sign_in_show_pass_label");

    if (passfield1.type == "password" && passfield2.type == "password") {
        passfield1.type = "text";
        passfield2.type = "text";
        eye.className = "bi bi-eye-fill";
        label.innerHTML = "Hide Password";
    } else {
        passfield1.type = "password";
        passfield2.type = "password";
        eye.className = "bi bi-eye-slash-fill";
        label.innerHTML = "Show Password";
    }

}

function adminLogout() {
    window.location.href = "adminSignIn.html";
}

function menuLoad() {
    window.location.href = "menu.html";
}