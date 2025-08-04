
const images = {
    payroll: "Images/payroll.png",
    expenses: "Images/expenses.png",
    VAT: "Images/vat-returns.png",
    report: "Images/reporting.png",
};


const buttons = document.querySelectorAll(".buttonOption button");
const content = document.getElementById("ImageContent");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const ClickID = button.id;

        if (images[ClickID]) {
            content.innerHTML = `<img src="${images[ClickID]}" alt="${ClickID}" class="absolute top-0 left-0 w-full h-full object-cover rounded-l-xl">`;
        }

        buttons.forEach(btn => btn.classList.remove('bg-white/10', 'text-white'));
        button.classList.add('bg-white/10', 'text-white')
    });
});

window.onload = () => {
    document.getElementById('VAT').click();
}




function mobileNavFun() {
    const menubtn = document.querySelector(".menue-btn");
    const closebtn = document.querySelector(".menu-close-btn");

    const mobileNav = document.querySelector(".mobile-nav");

    closebtn.classList.add("hidden");
    mobileNav.classList.add("hidden");

    menubtn.addEventListener("click", () => {
        closebtn.classList.remove("hidden");
        menubtn.classList.add("hidden");
        mobileNav.classList.remove("hidden");
    });

    closebtn.addEventListener("click", () => {
        closebtn.classList.add("hidden");
        mobileNav.classList.add("hidden");
        menubtn.classList.remove("hidden");
    })
}

mobileNavFun();

