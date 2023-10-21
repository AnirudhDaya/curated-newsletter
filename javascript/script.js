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

    closePopup.addEventListener('click', function () {
        popup.style.display = 'none';
      });
  });
  