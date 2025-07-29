
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
            content.innerHTML = `<img src="${images[ClickID]}" alt="${ClickID}" class=" w-full h-full rounded-xl mt-4 object-cover">`;
        }

        buttons.forEach(btn => btn.classList.remove('bg-white/10', 'text-white'));
        button.classList.add('bg-white/10', 'text-white')
    });
});

window.onload = () => {
    document.getElementById('VAT').click();
}


const buttonOpt = document.querySelectorAll(".btnOption button");
const imagesOpt = document.querySelectorAll(".imgOpt image")

buttonOpt.forEach((button, index) => {
    button.addEventListener('click', () => {

        const imageDiv = imagesOpt[index].parentElement;
        imageDiv.classList.add('animate-bounce');

        setTimeout(() => {
            imageDiv.classList.remove('animate-bounce');
        }, 1000)
    })
})

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

