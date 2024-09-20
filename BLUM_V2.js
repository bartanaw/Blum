const a = "QGJhcnRhbndhdw==";
const b = prompt("Enter Your Password, admin:AsHikTechPro");
const c = btoa(b);

if (c === a) {
    const d = "aHR0cHM6Ly9jdXR0Lmx5L2JhcnRhbmF3";
    window.open(atob(d), "_blank");
    const e = 0;
    const f = 10;
    const g = 22;

    const h = 'font-weight: bold; color: red;';
    const i = 'font-weight: bold; color: green;';
    const j = '%c [BartaNaw] ';
    const k = console.log;

    console.log = function () {
        if (arguments[0].includes('[BartaNaw]') || arguments[0].includes('github.com')) {
            k.apply(console, arguments);
        }
    };

    console.error = console.warn = console.info = console.debug = function () { };

    console.clear();
    console.log(`${j}Injecting...`, i);

    try {
        let l = 0;
        let m = 0;
        let n = 0;
        let o = 0;
        let p = false;

        const q = Array.prototype.push;
        Array.prototype.push = function (...r) {
            r.forEach(s => {
                if (s && s.item) {
                    if (s.item.type === "CLOVER") {
                        s.shouldSkip = Math.random() < (g / 100);
                        if (s.shouldSkip) {
                            o++;
                            console.log(`${j}Skipping clover (${o})`, h);
                        } else {
                            console.log(`${j}Clicking clover (${l})`, i);
                            l++;
                            s.onClick(s);
                            s.isExplosion = true;
                            s.addedAt = performance.now();
                        }
                    } else if (s.item.type === "BOMB" && m < e) {
                        console.log(`${j}Clicking bomb`, h);
                        l = 0;
                        s.onClick(s);
                        s.isExplosion = true;
                        s.addedAt = performance.now();
                        m++;
                    } else if (s.item.type === "FREEZE" && n < f) {
                        console.log(`${j}Clicking freeze`, i);
                        s.onClick(s);
                        s.isExplosion = true;
                        s.addedAt = performance.now();
                        n++;
                    }
                }
            });
            return q.apply(this, r);
        };

        function t() {
            const u = document.querySelector('#app > div > div > div.content > div.reward');
            if (u && !p) {
                p = true;
                console.log(`${j}Game Over. Total points earned: ${l}`, i);
                l = 0;
                m = 0;
                n = 0;
                o = 0;
                if (window.__NUXT__.state.$s$0olocQZxou.playPasses > 0) {
                    setTimeout(() => {
                        const v = document.querySelector("#app > div > div > div.buttons > button:nth-child(2)");
                        if (v) {
                            v.click();
                            console.log(`${j}Starting new game...`, i);
                        }
                        p = false;
                    }, Math.random() * (5151.2 - 3137.7) + 3137.7);
                } else {
                    console.log(`${j}No more play passes left`, h);
                }
            }
        }

        const w = new MutationObserver((x, y) => {
            for (const z of x) {
                if (z.type === 'childList') {
                    t();
                }
            }
        });

        const A = document.querySelector('#app');
        if (A) {
            w.observe(A, { childList: true, subtree: true });
        }

        console.log(`${j}Script loaded`, i);
        console.log(`${j}Code by BartaNawOfficial`, i);

        const B = "QXV0aG9yIENoYW5uZWw6IGh0dHBzOi8vdC5tZS9CYXJ0YU5hd09mZmljaWFs"; 
        const C = "QXV0aG9yIExpbms6IGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9Bc0hpazcwNQ==";

        function D(E) {
            const F = atob(E);
            return F;
        }

        console.log(`${j}${D(B)}`, ' font-size: 20px;font-weight: bold; color: green;  ', i);
        console.log(`${j}${D(C)}`, ' font-size: 20px;font-weight: bold; color: green;  ', i);

    } catch (G) {
        console.log(`${j}An error occurred!`, h);
        console.log(`${j}Please follow the instructions, and you will succeed :*`, h);
    }

} else {
    console.log('%cWrong, Try Again. Please Contact with admin ', 'font-weight: bold; color: red; font-size: 40px;');
    function H(I) {
        const J = atob(I);
        return decodeURIComponent(escape(J));
    }
    const K = "ICBBdXRob3IgQ2hhbm5lbDog aHR0cHM6Ly90Lm1lL0JhcnRh TmF3T2ZmaWNpYWwg"; 
    const L = "IEF1dGhvciBMaW5rOiBodHRwczovL3d3dy5mYWNlYm9vay5jb20vQXNIaWs3MDU=";
    const M = H(K);
    const N = H(L);
    console.log(M);
    console.log(N);

}
