function showMessage() {
  const input = document.getElementById("birthYear");
  const value = input.value.trim();

  if (value === "2003") {
    showFloatingNotification("😉 أهلاً وسهلاً! يا ملك ", "#22c55e");
    setTimeout(() => {
      window.location.href = "HOME.html"; 
    }, 1500);
  } else {
    showFloatingNotification("❌ بلاش غش No No", "#dc2626");
    input.value = "";
    input.focus();
  }
}

function showFloatingNotification(message, color) {
  const notification = document.createElement("div");
  notification.className = "floating-notif";
  notification.innerHTML = message;
  notification.style.background = `linear-gradient(135deg, ${color}20, ${color}40)`;
  notification.style.border = `1px solid ${color}80`;
  notification.style.color = "#fff";

  document.body.appendChild(notification);

  // حركة الظهور
  setTimeout(() => notification.classList.add("show"), 10);

  // الإخفاء بعد 2.5 ثانية
  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => notification.remove(), 300);
  }, 2500);
}

// استايل الإشعار العائم
const notifStyle = document.createElement("style");
notifStyle.textContent = `
  .floating-notif {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%) translateY(-100px);
    padding: 14px 28px;
    border-radius: 60px;
    font-size: 16px;
    font-weight: 600;
    z-index: 9999;
    backdrop-filter: blur(12px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.3);
    white-space: nowrap;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    font-family: 'Segoe UI', sans-serif;
    letter-spacing: 0.5px;
  }
  
  .floating-notif.show {
    transform: translateX(-50%) translateY(0);
  }
  
  @media (max-width: 500px) {
    .floating-notif {
      font-size: 13px;
      padding: 10px 20px;
      white-space: nowrap;
    }
  }
`;
document.head.appendChild(notifStyle);
