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


/* ================= HIỆU ỨNG RƠI LIÊN TỤC ================= */
const container = document.querySelector(".falling-container");

// rơi nền nhẹ, chạy mãi
setInterval(() => {
    createEffect(["✨", "🌸"], 6, 5);
}, 600);


/* ================= PHẢN HỒI LỜI MỜI ================= */
function respond(isJoin) {
    const message = document.getElementById("message");
    const rejectBtn = document.getElementById("rejectBtn");

    if (!isJoin && rejectBtn) {
        rejectBtn.remove();
    }

    message.textContent = isJoin
        ? "Hẹn gặp hôm đó nha 💖"
        : "Coi như m đồng ý nha （￣︶￣）↗　";

    // hiệu ứng riêng cho từng lựa chọn
    if (isJoin) {
        createEffect(["🎉", "✨", "💖"], 50, 3);
    } else {
        createEffect(["😭", "😶", "😡"], 30, 6);
    }
}


/* ================= HÀM TẠO HIỆU ỨNG ================= */
function createEffect(emojis, amount, maxDuration) {
    for (let i = 0; i < amount; i++) {
        const item = document.createElement("span");
        item.textContent = emojis[Math.floor(Math.random() * emojis.length)];

        item.style.left = Math.random() * 100 + "vw";
        item.style.fontSize = 14 + Math.random() * 14 + "px";
        item.style.animationDuration =
            2 + Math.random() * maxDuration + "s";

        container.appendChild(item);

        setTimeout(() => item.remove(), 8000);
    }
}
