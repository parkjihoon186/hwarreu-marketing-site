// Smooth scroll buttons (data-target)
document.querySelectorAll('.js-scroll').forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-target');
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  });
});

// Buy button action (replace URL later)
document.querySelectorAll('.js-buy').forEach((btn) => {
  btn.addEventListener('click', () => {
    alert('여기에 실제 쇼핑몰 상품 URL을 연결하세요.');
    // 예시:
    // window.location.href = 'https://smartstore.naver.com/....';
  });
});
