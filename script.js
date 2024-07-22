document.addEventListener("DOMContentLoaded", () => {
    const texts = document.querySelectorAll(".text");
    texts.forEach((text, textIndex) => {
        const spans = text.querySelectorAll("span");
        spans.forEach((span, spanIndex) => {
            span.style.animationDelay = `${
                (textIndex * spans.length + spanIndex) * 0.3
            }s`;
        });
    });
});
