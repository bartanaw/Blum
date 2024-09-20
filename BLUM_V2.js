const correctPasswordEncoded = "YmFydGFuYXc=";
const userPassword = prompt("Enter Your Password, admin:");
const userPasswordEncoded = btoa(userPassword);

if (userPasswordEncoded === correctPasswordEncoded) {
 
    const encodedLink = "aHR0cHM6Ly9jdXR0Lmx5L2JhcnRhbmF3";
    window.open(atob(encodedLink), "_blank");
    const minBombClickCount = 0;
    const minFreezeClickCount = 10;
    const cloverSkipPercentage = 20;

    const consoleRed = 'font-weight: bold; color: red;';
    const consoleGreen = 'font-weight: bold; color: green;';
    const consolePrefix = '%c [BartaNaw] ';
    const originalConsoleLog = console.log;

    console.log = function () {
        if (arguments[0].includes('[BartaNaw]') || arguments[0].includes('github.com')) {
            originalConsoleLog.apply(console, arguments);
        }
    };

    console.error = console.warn = console.info = console.debug = function () { };

    console.clear();
    console.log(`${consolePrefix}Injecting...`, consoleGreen);

    try {
        let totalPoints = 0;
        let bombClickCount = 0;
        let freezeClickCount = 0;
        let skippedClovers = 0;
        let gameEnded = false;

        const originalPush = Array.prototype.push;
        Array.prototype.push = function (...args) {
            args.forEach(arg => {
                if (arg && arg.item) {
                    if (arg.item.type === "CLOVER") {
                        arg.shouldSkip = Math.random() < (cloverSkipPercentage / 100);
                        if (arg.shouldSkip) {
                            skippedClovers++;
                            console.log(`${consolePrefix}Skipping clover (${skippedClovers})`, consoleRed);
                        } else {
                            console.log(`${consolePrefix}Clicking clover (${totalPoints})`, consoleGreen);
                            totalPoints++;
                            arg.onClick(arg);
                            arg.isExplosion = true;
                            arg.addedAt = performance.now();
                        }
                    } else if (arg.item.type === "BOMB" && bombClickCount < minBombClickCount) {
                        console.log(`${consolePrefix}Clicking bomb`, consoleRed);
                        totalPoints = 0;
                        arg.onClick(arg);
                        arg.isExplosion = true;
                        arg.addedAt = performance.now();
                        bombClickCount++;
                    } else if (arg.item.type === "FREEZE" && freezeClickCount < minFreezeClickCount) {
                        console.log(`${consolePrefix}Clicking freeze`, consoleGreen);
                        arg.onClick(arg);
                        arg.isExplosion = true;
                        arg.addedAt = performance.now();
                        freezeClickCount++;
                    }
                }
            });
            return originalPush.apply(this, args);
        };

        function checkGameEnd() {
            const rewardElement = document.querySelector('#app > div > div > div.content > div.reward');
            if (rewardElement && !gameEnded) {
                gameEnded = true;
                console.log(`${consolePrefix}Game Over. Total points earned: ${totalPoints}`, consoleGreen);
                totalPoints = 0;
                bombClickCount = 0;
                freezeClickCount = 0;
                skippedClovers = 0;
                if (window.__NUXT__.state.$s$0olocQZxou.playPasses > 0) {
                    setTimeout(() => {
                        const button = document.querySelector("#app > div > div > div.buttons > button:nth-child(2)");
                        if (button) {
                            button.click();
                            console.log(`${consolePrefix}Starting new game...`, consoleGreen);
                        }
                        gameEnded = false;
                    }, Math.random() * (5151.2 - 3137.7) + 3137.7);
                } else {
                    console.log(`${consolePrefix}No more play passes left`, consoleRed);
                }
            }
        }

        const observer = new MutationObserver((mutationsList, observer) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    checkGameEnd();
                }
            }
        });

        const targetNode = document.querySelector('#app');
        if (targetNode) {
            observer.observe(targetNode, { childList: true, subtree: true });
        }

        console.log(`${consolePrefix}Script loaded`, consoleGreen);
        console.log(`${consolePrefix}Code by BartaNawOfficial`, consoleGreen);

        // ইনকোড করা লিংক
        const encodedText1 = "QXV0aG9yIENoYW5uZWw6IGh0dHBzOi8vdC5tZS9CYXJ0YU5hd09mZmljaWFs"; 
        const encodedText2 = "QXV0aG9yIExpbms6IGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9Bc0hpazcwNQ==";

        // ডিকোড করার ফাংশন
        function decodeBase64(encodedText) {
            const decodedBytes = atob(encodedText);
            return decodedBytes;
        }

        // ডিকোড করা লিংক প্রিন্ট করবে
        console.log(`${consolePrefix}${decodeBase64(encodedText1)}`, ' font-size: 20px;font-weight: bold; color: green;  ', consoleGreen);
        console.log(`${consolePrefix}${decodeBase64(encodedText2)}`, ' font-size: 20px;font-weight: bold; color: green;  ', consoleGreen);

    } catch (e) {
        console.log(`${consolePrefix}An error occurred!`, consoleRed);
        console.log(`${consolePrefix}Please follow the instructions, and you will succeed :*`, consoleRed);
    }

} else {
    // "Wrong, Try Again" মেসেজটি লাল রঙে দেখাবে
    console.log('%cWrong, Try Again. Please Contact with admin ', 'font-weight: bold; color: red; font-size: 40px;');
    function decodeBase64(encodedText) {
        const decodedBytes = atob(encodedText);
        return decodeURIComponent(escape(decodedBytes));
      }
      const encodedText = "ICBBdXRob3IgQ2hhbm5lbDog aHR0cHM6Ly90Lm1lL0JhcnRh TmF3T2ZmaWNpYWwg"; 
      const encodedtext = "IEF1dGhvciBMaW5rOiBodHRwczovL3d3dy5mYWNlYm9vay5jb20vQXNIaWs3MDU=";
      const decodedText = decodeBase64(encodedText);
      const decodedtext = decodeBase64(encodedtext)
      console.log(decodedText);
      console.log(decodedtext)

}
