function filterGallery(category) {
    let imageContainers = document.querySelectorAll('.imagecontainer');

    imageContainers.forEach(container => {
        let categoryText = container.querySelector('.category').textContent.trim(); // Get the category text
        
        if (category === 'all' || categoryText === category) {
            container.style.display = 'block'; // Show container
        } else {
            container.style.display = 'none'; // Hide container
        }
    });
}