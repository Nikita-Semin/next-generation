// Находим все сцены комикса
const panels = document.querySelectorAll('.panel');

// Создаем наблюдателя
const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			// Если сцена попала в зону видимости пользователя
			if (entry.isIntersecting) {
				// Добавляем класс active, который запускает CSS-анимации
				entry.target.classList.add('active');
			}
		});
	},
	// Анимация запустится, когда хотя бы 30% панели появится на экране
	{ threshold: 0.3 },
);

// Вешаем наблюдателя на каждую сцену
panels.forEach((panel) => observer.observe(panel));
