function detectScam() {
    const text = document.getElementById('input').value.toLowerCase();
    if (!text.trim()) {
        document.getElementById('result').textContent = 'Please enter some text.';
        return;
    }

    const scamKeywords = [
        'lottery', 'prize', 'winner', 'free', 'urgent', 'act now', 'click here',
        'bank account', 'password', 'verify', 'update your account', 'risk-free',
        'guaranteed', 'limited time', 'investment opportunity', 'dear customer'
    ];

    const suspiciousUrlPatterns = [
        /http:\/\/|https:\/\//,
        /\b\w+\d+\.com/,
        /\.(ru|cn|tk|ml|ga|cf|gq)$/
    ];

    let score = 0;

    scamKeywords.forEach(word => {
        if (text.includes(word)) {
            score += 2; // Each keyword adds to suspicion
        }
    });

    suspiciousUrlPatterns.forEach(pattern => {
        if (pattern.test(text)) {
            score += 3; // Suspicious URL patterns add more weight
        }
    });

    const threshold = 5;
    const result = document.getElementById('result');
    if (score >= threshold) {
        result.textContent = 'This text looks suspicious and may be part of a scam.';
        result.style.color = 'red';
    } else {
        result.textContent = 'This text does not appear to be an obvious scam.';
        result.style.color = 'green';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const analyzeBtn = document.getElementById('analyzeBtn');
    if (analyzeBtn) {
        analyzeBtn.addEventListener('click', detectScam);
    }
});
