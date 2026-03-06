let currentLang = "zh";


/* 語言切換 */

document.getElementById("langToggle").addEventListener("click", () => {

    currentLang = currentLang === "zh" ? "en" : "zh";

    document.getElementById("langToggle").innerText =
        currentLang === "zh" ? "EN" : "中文";

    updateLanguage();
});


function updateLanguage() {

    document.querySelectorAll("[data-lang]").forEach(el => {

        const key = el.getAttribute("data-lang");

        el.innerHTML = lang[currentLang][key];

    });

}


/* 日夜模式 */

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    const body = document.body;

    if (body.classList.contains("light-mode")) {

        body.classList.remove("light-mode");
        body.classList.add("dark-mode");

        themeToggle.classList.remove("bi-moon-fill");
        themeToggle.classList.add("bi-sun-fill");

    } else {

        body.classList.remove("dark-mode");
        body.classList.add("light-mode");

        themeToggle.classList.remove("bi-sun-fill");
        themeToggle.classList.add("bi-moon-fill");

    }

    setTimeout(() => {
        document.getElementById("particles-js").innerHTML = "";
        initParticles();
    }, 100);

});


/* 粒子特效 */

function getParticleColor() {

    return getComputedStyle(document.body)
        .getPropertyValue('--particle-color')
        .trim();

}

function initParticles() {
    const color = getParticleColor();
    particlesJS("particles-js", {
        particles: {
            number: {value: 80},
            color: {value: color},
            shape: {type: "circle"},
            opacity: {value: 0.5},
            size: {value: 3},
            line_linked: {
                enable: true,
                distance: 150,
                color: color,
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2
            }
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                }
            }
        }
    });
}


/* 初始化 */
updateLanguage();
initParticles();