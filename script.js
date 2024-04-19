document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedback-form');
    const messageContainer = document.getElementById('message-container');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        try {
            await fetch('/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            messageContainer.textContent = 'Ваше повідомлення відправлено!';
        } catch (error) {
            messageContainer.textContent = 'Під час відправки виникла помилка';
        }
    });
});
