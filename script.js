document.querySelectorAll('.cta-btn').forEach(button => {
    button.addEventListener('mousedown', function() {
        this.style.transform = "scale(0.95)";
    });
    
    button.addEventListener('mouseup', function() {
        this.style.transform = "scale(1)";
        console.log("SafeOut: Order button clicked!");
    });
});

// स्क्रोल करने पर सेक्शन्स का धीरे से आना (Fade In effect)
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.shoe-section');
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if(top < window.innerHeight - 100) {
            sec.style.opacity = "1";
            sec.style.transform = "translateY(0)";
        }
    });
});