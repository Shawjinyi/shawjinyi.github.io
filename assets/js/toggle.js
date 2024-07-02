document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('mode-toggle');
    const body = document.body;

    // 检查本地存储以查看用户是否之前设置了首选模式
    if (localStorage.getItem('mode') === 'night') {
        body.classList.add('night-mode');
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('night-mode');

        // 保存用户的首选模式到本地存储
        if (body.classList.contains('night-mode')) {
            localStorage.setItem('mode', 'night');
        } else {
            localStorage.setItem('mode', 'day');
        }
    });
});

