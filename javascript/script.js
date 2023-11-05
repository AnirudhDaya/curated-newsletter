document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('popup');
    const categoryLink = document.getElementById('category-link');
    const closePopup = document.getElementById('close-popup');
    // Show the pop-up when clicking the "CATEGORY" link
    categoryLink.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent the default behavior of the link
      popup.style.display = 'block';
    });
  
    // Close the pop-up when clicking outside
    document.addEventListener('mousedown', function (e) {
      if (popup.style.display === 'block' && !popup.contains(e.target) && e.target !== categoryLink) {
        popup.style.display = 'none';
      }
    });

    document.querySelectorAll('.popup-content-item').forEach(function (categoryLink) {
      categoryLink.addEventListener('click', function () {
        // Get the category name from the clicked link
        popup.style.display = 'none';
        const category = categoryLink.textContent.toLowerCase();
  
        // Hide all cards
        document.querySelectorAll('.card').forEach(function (card) {
          const cardCategory = card.querySelector('.card__category').textContent.toLowerCase();
        
          if (cardCategory === category) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
  
        // Show cards of the selected category
        document.querySelectorAll('.' + category).forEach(function (card) {
          card.style.display = 'block';
        });
      });
    });

    closePopup.addEventListener('click', function () {
        popup.style.display = 'none';
      });
  });
  