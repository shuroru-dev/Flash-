// マウスについてくるキラキラを作る
document.addEventListener('mousemove', (e) => {
    const star = document.createElement('div');
    star.className = 'mouse-star';
    
    // 星の見た目をCSSで作る代わりの設定
    star.style.position = 'absolute';
    star.style.left = e.pageX + 'px';
    star.style.top = e.pageY + 'px';
    star.style.width = '5px';
    star.style.height = '5px';
    star.style.backgroundColor = '#00ffcc';
    star.style.borderRadius = '50%';
    star.style.pointerEvents = 'none'; // マウスの邪魔をしない
    
    document.body.appendChild(star);
    
    // 0.5秒後に消えるようにする
    setTimeout(() => {
        star.remove();
    }, 500);
});

// ボタンを押した時のメッセージ（本当は音を鳴らすとよりFlashっぽいです）
function playClick() {
    alert("ボタンがクリックされました！ピコーン！");
}