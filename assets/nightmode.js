const nightButton = document.querySelector('.nightButton');
const body = document.querySelector('.demole');
const changeFontH1 = document.querySelector('.show-section h1');
const changeFontP = document.querySelector('.show-section p');
const mainProfile = document.querySelector('.main-profile');
const aboutMe = document.querySelector('.about-me-text h2');
const stack = document.querySelector('.stack-section');
const stackH2 = document.querySelector('.stack-section h2');

nightButton.addEventListener('click', e=> {
    e.preventDefault();

    if(document.body.style.backgroundColor !== "black") {
        document.body.style.backgroundColor = "black"
        changeFontH1.style.color = "var(--white)";
        changeFontP.style.color = "var(--white)";
        mainProfile.style.backgroundColor = "black"
        stack.style.backgroundColor = "black"
        stackH2.style.color = "var(--white)"
        
    } else {
        document.body.style.backgroundColor = "var(--white)"
        changeFontH1.style.color = "var(--main-blue)";
        changeFontP.style.color = "var(--main-blue)";
        mainProfile.style.backgroundColor = "var(--white)"
        stack.style.backgroundColor = "var(--white)"
        stackH2.style.color = "var(--main-blue)"
    }
});
