/* ================= ĐẾM NGƯỢC ================= */
const targetDate = new Date("2026-02-12T09:00:00").getTime();
const countdownEl = document.getElementById("countdown");

setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
        countdownEl.textContent = "Đến giờ rồi 🎉";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownEl.textContent =
        `${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây ♡`;
}, 1000);


/* ================= PHẢN HỒI LỜI MỜI ================= */
function respond(isJoin) {
    const message = document.getElementById("message");
    const rejectBtn = document.getElementById("rejectBtn");

    if (!isJoin && rejectBtn) {
        rejectBtn.remove(); // ẩn nút từ chối
    }

    message.textContent = isJoin
        ? "Hẹn gặp hôm đó nhaaa 💖"
        : "Coi như đồng ý đến chụp nha (ง •_•)ง";

    message.classList.add("show");

    launchEffect();
}


/* ================= HIỆU ỨNG (DÙNG CHUNG) ================= */
function launchEffect() {
    const container = document.querySelector(".falling-container");

    for (let i = 0; i < 25; i++) {
        const item = document.createElement("span");
        item.textContent = ["🎉", "✨", "🌸", "💖"][Math.floor(Math.random() * 4)];

        item.style.left = Math.random() * 100 + "vw";
        item.style.animationDuration = 2 + Math.random() * 2 + "s";

        container.appendChild(item);

        setTimeout(() => item.remove(), 4000);
    }
}
