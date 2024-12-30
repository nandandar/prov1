// Количество снежинок
const snowflakeCount = 50; // Например, 50 снежинок

// Селектор для контейнера снежинок
const snowflakesContainer = document.querySelector('.snowflakes');

// Функция для создания снежинок
for (let i = 0; i < snowflakeCount; i++) {
    const snowflake = document.createElement('div');
    snowflakesContainer.appendChild(snowflake);

    // Устанавливаем случайные размеры, позицию и задержку анимации
    snowflake.style.width = Math.random() * 10 + 5 + 'px';
    snowflake.style.height = snowflake.style.width;
    snowflake.style.left = Math.random() * 100 + '%';
    snowflake.style.animationDelay = Math.random() * 5 + 's';
}
