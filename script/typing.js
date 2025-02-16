const texts = [
    "Promo untuk 5 orang pembeli pertama",
    "Jaminan 100% Lezat",
    "Kuliner khas Jawa Barat",
    "Mumpung ada promo nih",
    "Paket Berdua & JOMBLO (HEMAT)",
    "Kuy Pre-Order sekarang",
  ];
  
  const typingSpeed = 100; // kecepatan ketik
  const delay = 1500; // waktu jeda
  
  const typingElement = document.getElementById("typing-effect");
  
  let textIndex = 0;
  let charIndex = 0;
  
  function typeText() {
    if (charIndex < texts[textIndex].length) {
      typingElement.innerHTML += texts[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeText, typingSpeed);
    } else {
      setTimeout(eraseText, delay);
    }
  }
  
  function eraseText() {
    if (charIndex > 0) {
      typingElement.innerHTML = texts[textIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseText, typingSpeed / 2);
    } else {
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(typeText, typingSpeed / 2);
    }
  }
  
  typeText();
  