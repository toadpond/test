// 啟動 GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Hero 文字進場動畫
gsap.from(".hero h2", { opacity: 0, y: 50, duration: 1 });
gsap.from(".hero p", { opacity: 0, y: 50, duration: 1, delay: 0.3 });

// 作品區塊滾動出場動畫
gsap.from(".projects .project", {
    opacity: 0,
    y: 100,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
        trigger: ".projects",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

// 滾動時的背景漸變效果
gsap.to("body", {
    background: "#222",
    scrollTrigger: {
        trigger: ".about",
        start: "top 50%",
        end: "bottom 50%",
        scrub: true
    }
});
