document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.category-button');
    const recipeLists = document.querySelectorAll('.recipe-list');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            // Get the category from the clicked button
            const category = button.getAttribute('data-category');

            // Show/Hide recipe lists based on category
            recipeLists.forEach(list => {
                if (category === 'all' || list.getAttribute('data-category') === category) {
                    list.classList.add('active');
                } else {
                    list.classList.remove('active');
                }
            });
        });
    });
    document.querySelector('.category-button[data-category="all"]').click();
});