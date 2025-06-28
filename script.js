function showChoice() {
  document.getElementById('welcomeScreen').style.display = 'none';
  document.getElementById('choiceScreen').style.display = 'block';
}

function startStory(withMusic) {
  document.getElementById('choiceScreen').style.display = 'none';
  document.getElementById('mainContent').style.display = 'block';

  if (withMusic) {
    document.getElementById('bgMusic').play();
  }

  const lines = [
    "From the very first moment I saw you, I knew you were special. 💫",
    "Your smile lights up my darkest days. 🌞",
    "Every moment with you feels like a beautiful dream. 🌸",
    "I don’t need a thousand reasons to love you... Just one — *you*. ❤️",
    "You are my sunshine, my peace, my everything. 🌈",
    "Let’s write our forever, hand in hand, soul to soul. 💍",
    "Will you be mine, not just today, but always? 💞"
  ];

  const container = document.getElementById('romanticLines');
  let i = 0;

  const interval = setInterval(() => {
    if (i < lines.length) {
      const p = document.createElement('p');
      p.textContent = lines[i];
      p.style.opacity = '0';
      container.appendChild(p);

      setTimeout(() => {
        p.style.transition = 'opacity 1s';
        p.style.opacity = '1';
      }, 100);

      i++;
    } else {
      clearInterval(interval);
    }
  }, 3000);
}
