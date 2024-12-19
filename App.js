document.addEventListener('DOMContentLoaded', function () {
    // Get all tab buttons and content
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.gallery-tab-content');

    // Function to switch tabs
    function switchTab(event) {
        const target = event.target;
        const targetTab = target.getAttribute('data-target');

        // Remove the active class from all tabs and content
        tabButtons.forEach(button => button.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to the clicked tab and corresponding content
        target.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    }

    // Add event listeners to all tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', switchTab);
    });
});
