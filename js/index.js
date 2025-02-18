function openSidebar() {
  document.getElementById("sidebar").style.width = "250px";
}

function closeSidebar() {
  document.getElementById("sidebar").style.width = "0";
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    if (!validateForm()) return; // Validate form before proceeding

    // Show the popup message
    document.getElementById("popupMessage").style.display = "flex";
    
    // Reset the form
    document.getElementById("contactForm").reset();
});

function closePopup() {
    document.getElementById("popupMessage").style.display = "none";
}

//  For Check Email Valid 
function validateForm() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var message = document.getElementById("message").value.trim();
    var errorMessage = "";

    // Name validation
    if (name === "") {
        errorMessage += "▪ कृपया तपाईंको नाम लेख्नुहोस्।\n";
    }

    // Email validation
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        errorMessage += "▪ कृपया वैध ईमेल लेख्नुहोस्।\n";
    }

    // Phone number validation (only digits, 10 characters)
    var phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        errorMessage += "▪ कृपया १० अङ्कको फोन नम्बर लेख्नुहोस्।\n";
    }

    // Message validation
    if (message === "") {
        errorMessage += "▪ कृपया तपाईंको सन्देश लेख्नुहोस्।\n";
    }

    if (errorMessage !== "") {
        alert(errorMessage);
        return false;
    }

    return true; // Form submits if everything is valid
}


/*// Translate to English
let isNepali = true; // Flag to track current language
        function toggleLanguage() {
            if (isNepali) {
                // Change to English
                document.getElementById("title").innerText = "Sanskrit Vidya Sannyas Ashram Bhairahawa";
                document.getElementById("address").innerText = "Siddharthanagar Municipality-3, Bhairahawa, Rupandehi, Lumbini, Nepal";
               
                document.getElementById('nav1').innerText = 'Home';
                document.getElementById('nav2').innerText = 'Ashram Introduction';
                document.getElementById('nav3').innerText = 'Gurukul Introduction';
                document.getElementById('nav4').innerText = 'Photo Gallery';
                document.getElementById('nav5').innerText = 'Our Services';
                document.getElementById('nav6').innerText = 'Donate';
            
                document.getElementById('nav7').innerText = 'Home';
                document.getElementById('nav8').innerText = 'Ashram Introduction';
                document.getElementById('nav9').innerText = 'Gurukul Introduction';
                document.getElementById('nav10').innerText = 'Photo Gallery';
                document.getElementById('nav11').innerText = 'Our Services';
                document.getElementById('nav12').innerText = 'Donate';

                document.getElementById("sectionTitle").innerText = "Introduction to Ashram";
                document.getElementById("sectionContent").innerText = "Sanskrit Vidya Sannyas Ashram Bhairahawa was established in 2018 B.S. in the central part of Nepal at Siddharthanagar Municipality-3, Bhairahawa, Rupandehi, Lumbini. It was founded with the sacred purpose of preserving, promoting, and spreading Vedic Sanatan Dharma and Sanskrit culture under the divine resolve of Brahmaleen Param Pujya Guruvar Shri 1008 Swami Narayanananda Giriji Maharaj.";
                document.getElementById("translateBtn").innerText = "Translate to Nepali";
            } else {
                // Change back to Nepali
                document.getElementById("title").innerText = "संस्कृत विद्या संन्यास आश्रम भैरहवा";
                document.getElementById("address").innerText = "सिद्धार्थनगर न.पा.-३, भैरहवा, रुपन्देही, लुम्बिनी, नेपाल";

                document.getElementById('nav1').innerText = 'Home';
                document.getElementById('nav2').innerText = 'Ashram Introduction';
                document.getElementById('nav3').innerText = 'Gurukul Introduction';
                document.getElementById('nav4').innerText = 'Photo Gallery';
                document.getElementById('nav5').innerText = 'Our Services';
                document.getElementById('nav6').innerText = 'Donate';
            
                document.getElementById('nav7').innerText = 'Home';
                document.getElementById('nav8').innerText = 'Ashram Introduction';
                document.getElementById('nav9').innerText = 'Gurukul Introduction';
                document.getElementById('nav10').innerText = 'Photo Gallery';
                document.getElementById('nav11').innerText = 'Our Services';
                document.getElementById('nav12').innerText = 'Donate';

                document.getElementById("sectionTitle").innerText = "आश्रम परिचय";
                document.getElementById("sectionContent").innerText = "वैदिक सनातन धर्म र संस्कृतिको संरक्षण, संवर्धन एवम् संस्कृतविद्याको प्रचार-प्रसारद्वारा सुसंस्कृत समाज निर्माण गर्ने पवित्र उद्देश्यले ब्रह्मलीन परमपूज्य गुरुवर श्री १०८ स्वामी नारायणानन्द गिरि‍जी महाराजको सत्सङ्कल्पबाट नेपालको मध्यभाग सिद्धार्थनगर न.पा.-३, भैरहवा, रुपन्देही, लुम्बिनीमा वि.सं.२०१८ मा संस्कृत विद्या संन्यास आश्रम भैरहवा को स्थापना भएको हो ।";
                document.getElementById("translateBtn").innerText = "Translate to English";
            }
            isNepali = !isNepali; // Toggle the language flag
        }*/

// Photo Gallery

document.addEventListener('DOMContentLoaded', function() {
  // Handle refresh when footer is clicked
  document.querySelector('.footer').addEventListener('click', function() {
      location.reload();
  });

  // Handle refresh when logo is clicked
  document.querySelector('.logo').addEventListener('click', function() {
      location.reload();
  });

  // Handle refresh when home link is clicked
  document.querySelector('.nav a[href="#"]').addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior
      location.reload();
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.sidebar');
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  const mainContent = document.querySelector('.main-content');

  sidebarToggle.addEventListener('click', () => {
      const isSidebarVisible = sidebar.style.left === '0px';

      if (isSidebarVisible) {
          sidebar.style.left = '-250px';
          mainContent.style.marginLeft = '0';
      } else {
          sidebar.style.left = '0';
          mainContent.style.marginLeft = '250px';
      }
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const closeBtn = document.querySelector('.close');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const images = document.querySelectorAll('.gallery-item img');
  let currentIndex = 0;

  function showImage(index) {
      lightboxImage.src = images[index].src;
      currentIndex = index;
      lightbox.style.display = 'block';
  }

  images.forEach((image, index) => {
      image.addEventListener('click', function() {
          showImage(index);
      });
  });

  closeBtn.addEventListener('click', function() {
      lightbox.style.display = 'none';
  });

  prevBtn.addEventListener('click', function() {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
      showImage(currentIndex);
  });

  nextBtn.addEventListener('click', function() {
      currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
      showImage(currentIndex);
  });

  // Close lightbox when clicking outside of the image
  lightbox.addEventListener('click', function(event) {
      if (event.target !== lightboxImage && event.target !== prevBtn && event.target !== nextBtn) {
          lightbox.style.display = 'none';
      }
  });
});
