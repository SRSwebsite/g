
const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');
    const clock = document.getElementById('clock');

    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });

    const accordions = document.querySelectorAll(".accordion button").forEach(button => {
  button.addEventListener("click", function () {
    const panel = this.nextElementSibling;
    
    // بررسی باز یا بسته بودن پنل
    if (panel.classList.contains("open")) {
      panel.classList.remove("open"); // بستن پنل
    } else {
      document.querySelectorAll(".panel").forEach(p => p.classList.remove("open")); // بستن سایر پنل‌ها
      panel.classList.add("open"); // باز کردن پنل فعلی
    }
  });
});

    function updateClock() {
      const now = new Date();
      clock.textContent = now.toLocaleTimeString();
    }
    setInterval(updateClock, 1000);
    updateClock();
	
	// انیمیشن پدیدار شدن هر کلمه داخل متن
	
	document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("animatedText");
  const text = textElement.innerText.trim(); // دریافت متن اصلی
  textElement.innerHTML = ""; // خالی کردن محتوا
  
  const words = text.split(" "); // جدا کردن کلمات
  words.forEach((word, index) => {
    const span = document.createElement("span");
    span.innerText = word; // افزودن کلمه
    span.style.animationDelay = `${index * 0.5}s`; // تنظیم تأخیر انیمیشن برای هر کلمه
    textElement.appendChild(span);
  });

  // بازسازی انیمیشن به صورت لوپ
  const totalDuration = words.length * 0.5 + 2; // زمان کل برای هر جمله + مکث
  setInterval(() => {
    textElement.innerHTML = ""; // پاک کردن متن
    words.forEach((word, index) => {
      const span = document.createElement("span");
      span.innerText = word; // افزودن کلمه
      span.style.animationDelay = `${index * 0.5}s`; // تنظیم تأخیر
      textElement.appendChild(span);
    });
  }, totalDuration * 1000); // زمان کل برای هر لوپ
});


function startAnimation() {
  let glowInTexts = document.querySelectorAll(".glowIn");
  glowInTexts.forEach(glowInText => {
    let letters = glowInText.textContent.split("");
    glowInText.textContent = "";
    letters.forEach((letter, i) => {
      let span = document.createElement("span");
      span.textContent = letter;
      span.style.animationDelay = `${i * 0.05}s`;
      glowInText.append(span);
    });
  });
}

function runAnimationCycle() {
  startAnimation();
  let totalAnimationTime = document.querySelector(".glowIn").textContent.length * 0.05 + 0.8;
  let delayAfterCompletion = 3;
  setTimeout(runAnimationCycle, (totalAnimationTime + delayAfterCompletion) * 1000);
}

runAnimationCycle();



function toggleTab(event, tabId) {
      const tabButton = event.target;
      const tabContent = document.getElementById(tabId);

      if (tabButton.classList.contains('active')) {
        tabButton.classList.remove('active');
        tabContent.style.opacity = '0';
        tabContent.style.transform = 'translateY(-20px)';
        tabContent.style.maxHeight = '0';
      } else {
        const activeButton = document.querySelector('.tab-button.active');
        const activeContent = document.querySelector('.tab-content[style*="max-height"]');

        if (activeButton) {
          activeButton.classList.remove('active');
          activeContent.style.opacity = '0';
          activeContent.style.transform = 'translateY(-20px)';
          activeContent.style.maxHeight = '0';
        }

        tabButton.classList.add('active');
        tabContent.style.opacity = '1';
        tabContent.style.transform = 'translateY(0)';
        tabContent.style.maxHeight = '500px';
      }
    }
	function toggleTab(event, tabId) {
      const tabButton = event.target;
      const tabContent = document.getElementById(tabId);

      if (tabButton.classList.contains('active')) {
        tabButton.classList.remove('active');
        tabContent.style.opacity = '0';
        tabContent.style.transform = 'translateY(-20px)';
        tabContent.style.maxHeight = '0';
      } else {
        const activeButton = document.querySelector('.tab-button.active');
        const activeContent = document.querySelector('.tab-content[style*="max-height"]');

        if (activeButton) {
          activeButton.classList.remove('active');
          activeContent.style.opacity = '0';
          activeContent.style.transform = 'translateY(-20px)';
          activeContent.style.maxHeight = '0';
        }

        tabButton.classList.add('active');
        tabContent.style.opacity = '1';
        tabContent.style.transform = 'translateY(0)';
        tabContent.style.maxHeight = '500px';
      }
    }
	
	const videoUrl = "https://www.example.com"; // لینک ویدیو یا محتوای شما

    function toggleShareOptions(event) {
        event.preventDefault(); // جلوگیری از رفتار پیش‌فرض لینک
        event.stopPropagation(); // جلوگیری از بستن منو هنگام کلیک بر روی دکمه
        const options = document.getElementById("shareOptions");
        options.style.display = options.style.display === "block" ? "none" : "block";
    }

   // توابع اشتراک‌گذاری
   function shareOnWhatsApp() {
       window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(videoUrl)}`, '_blank');
   }

   function shareOnTelegram() {
       window.open(`https://telegram.me/share/url?url=${encodeURIComponent(videoUrl)}`, '_blank');
   }

   function shareOnFacebook() {
       window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(videoUrl)}`, '_blank');
   }

   function shareOnX() {
       window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(videoUrl)}`, '_blank');
   }

   function shareByEmail() {
       window.location.href = `mailto:?subject=Check this out&body=${encodeURIComponent(videoUrl)}`;
   }

   function shareOnTakoTalk() {
       alert("امکان اشتراک‌گذاری در TakoTalk وجود ندارد.");
   }

   function shareOnReddit() {
       window.open(`https://www.reddit.com/submit?url=${encodeURIComponent(videoUrl)}`, '_blank');
   }

   function shareOnVK() {
       window.open(`https://vk.com/share.php?url=${encodeURIComponent(videoUrl)}`, '_blank');
   }

   function shareOnOK() {
       window.open(`https://connect.ok.ru/offer?url=${encodeURIComponent(videoUrl)}`, '_blank');
   }

   function shareOnPinterest() {
       window.open(`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(videoUrl)}`, '_blank');
   }

   function shareOnBlogger() {
       alert("امکان اشتراک‌گذاری در Blogger وجود ندارد.");
   }

   function shareOnTumblr() {
       window.open(`https://www.tumblr.com/share/link?url=${encodeURIComponent(videoUrl)}`, '_blank');
   }

   function shareOnLinkedIn() {
       window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(videoUrl)}`, '_blank');
   }

   function shareOnMix() {
       alert("امکان اشتراک‌گذاری در Mix وجود ندارد.");
   }

   function shareOnGoo() {
       alert("امکان اشتراک‌گذاری در Goo وجود ندارد.");
   }

   function copyLink() {
       navigator.clipboard.writeText(videoUrl).then(() => {
           alert("لینک کپی شد!");
       }, () => {
           alert("خطا در کپی لینک.");
       });
   }

   // بستن منوی اشتراک‌گذاری اگر کاربر خارج از آن کلیک کند
   window.onclick = function(event) {
       const options = document.getElementById("shareOptions");
       if (!event.target.matches('.btn') && options.style.display === "block") {
           options.style.display = "none";
       }
   }
   // بستن منوی اشتراک‌گذاری
function closeShareOptions() {
    const options = document.getElementById("shareOptions");
    options.style.display = "none"; // منو را می‌بندد
}

   
// تابع برای باز کردن پاپ‌آپ
function openModal(url) {
  const modal = document.getElementById("orderFormModal");
  const iframe = modal.querySelector("iframe");

  if (modal && iframe) {
    iframe.src = `form.html`;  // تغییر URL iframe
    modal.style.display = "block"; // نمایش پاپ‌آپ
  }
}

// تابع برای بستن پاپ‌آپ
function closeModal() {
  const modal = document.getElementById("orderFormModal");
  if (modal) {
    modal.style.display = "none"; // پنهان کردن پاپ‌آپ
  }
}

// بستن پاپ‌آپ با کلیک خارج از آن
window.onclick = function(event) {
  const modal = document.getElementById("orderFormModal");
  if (modal && event.target == modal) {
    closeModal();
  }
}
document.getElementById('accordionToggle').addEventListener('click', function (e) {
  e.preventDefault();
  var panel = document.getElementById('accordionPanel');
  panel.style.display = (panel.style.display === 'flex') ? 'none' : 'flex';
});

document.getElementById('closeBtn').addEventListener('click', function (e) {
  var panel = document.getElementById('accordionPanel');
  panel.style.display = 'none';
});

function download(platform) {
  var downloadLinks = {
    android: 'https://your-android-download-link.com',
    ios: 'https://your-ios-download-link.com',
    windows: 'https://your-windows-download-link.com',
    mac: 'https://your-mac-download-link.com'
  };

  window.location.href = downloadLinks[platform];
}

       const gasUrl = 'https://script.google.com/macros/s/AKfycbxXpCOdcDREnwn3CvIdR8XH1NEB7245vtY_6ZA85_quorGsp8B21MErkpHDegJdW7LL/exec'; // لینک GAS جایگزین شود

async function fetchSheetData() {
    try {
        const response = await fetch(gasUrl);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const jsonData = await response.json();
        const container = document.getElementById('iframes-container');
        container.innerHTML = "";

        jsonData.forEach(item => {
            if (!item.url) return;

            const wrapper = document.createElement('div');
            wrapper.style.marginBottom = '30px';

            // نوار عنوان و دکمه
            if (item.name) {
                const headerDiv = document.createElement('div');
                headerDiv.style.display = 'flex';
                headerDiv.style.justifyContent = 'space-between';
                headerDiv.style.alignItems = 'center';
                headerDiv.style.marginBottom = '8px';

                const title = document.createElement('div');
                title.textContent = `نام پروژه: ${item.name}`;
                title.style.fontWeight = 'bold';
                title.style.fontSize = '16px';

                const button = document.createElement('a');
                button.textContent = 'مشاهده پروژه';
                button.href = item.projectUrl || item.url;
                button.target = '_blank';
                button.style.padding = '6px 12px';
                button.style.backgroundColor = '#1976d2';
                button.style.color = '#fff';
                button.style.textDecoration = 'none';
                button.style.borderRadius = '4px';
                button.style.fontSize = '14px';

                headerDiv.appendChild(title);
                headerDiv.appendChild(button);
                wrapper.appendChild(headerDiv);
            }

            // آیفریم
            const iframe = document.createElement('iframe');
            iframe.src = item.url;
            iframe.style.width = '100%';
            iframe.style.height = '300px';
            iframe.style.border = '1px solid #ccc';
            iframe.style.margin = '0';
            iframe.setAttribute('allowfullscreen', '');
            wrapper.appendChild(iframe);

            // دسته‌بندی‌ها برای فیلتر کردن
            if (item.categories) {
                const categoriesText = Array.isArray(item.categories)
                    ? item.categories.join(', ')
                    : item.categories;

                const categoriesDiv = document.createElement('div');
                categoriesDiv.className = 'categories';
                categoriesDiv.textContent = `دسته‌بندی‌ها: ${categoriesText}`;
                categoriesDiv.style.fontWeight = 'bold';
                categoriesDiv.style.marginTop = '5px';
                wrapper.appendChild(categoriesDiv);
            }

            container.appendChild(wrapper);
        });

    } catch (error) {
        console.error('خطا در دریافت یا پردازش داده‌ها:', error);
    }
}

fetchSheetData();


fetchSheetData(); // بارگذاری داده‌ها هنگام لود شدن صفحه

// اسکریپت تابع فیلتر گروه


let selectedFilters = []; // آرایه برای ذخیره زیر دسته‌های انتخاب‌شده

// باز و بسته کردن پنل
function toggleFilterPanel() {
    const panel = document.getElementById('filter-panel');
    panel.classList.toggle('open');
}

// به‌روزرسانی زیر دسته‌های انتخاب‌شده
function updateSelectedFilters() {
    const checkboxes = document.querySelectorAll('.filter-content input[type="checkbox"]');
    selectedFilters = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
}


// اعمال فیلترها
function applyFilters() {
    const allItems = document.querySelectorAll('.categories');
    
    allItems.forEach(categoryDiv => {
        const categoryText = categoryDiv.textContent || categoryDiv.innerText;

        if (!categoryText.includes(":")) return; // اگر فرمت اشتباه بود، ادامه نده

        const categoryValues = categoryText.split(":")[1] // گرفتن مقدار بعد از "Categories:"
            .trim()
            .split(',')
            .map(item => item.trim().replace(/"/g, '')); // حذف فاصله و علامت نقل قول

        // بررسی اینکه حداقل یکی از فیلترهای انتخاب‌شده در دسته‌بندی وجود دارد
        const hasMatch = selectedFilters.length === 0 || selectedFilters.some(filter => categoryValues.includes(filter));

        // نمایش یا مخفی کردن آیتم‌ها
        const wrapper = categoryDiv.parentElement;
        wrapper.style.display = hasMatch ? 'block' : 'none';
    });
}



// ریست کردن فیلترها
function resetFilters() {
    selectedFilters = [];
    const checkboxes = document.querySelectorAll('.filter-content input[type="checkbox"]');
    checkboxes.forEach(checkbox => (checkbox.checked = false));

    const allCategories = document.querySelectorAll('.categories');
    allCategories.forEach(categoryDiv => {
        const iframeContainer = categoryDiv.nextElementSibling;
        if (iframeContainer) {
            iframeContainer.style.display = 'block';
        }
    });
}

// باز و بسته کردن زیرمنو
function toggleSubmenu(header) {
    const submenu = header.nextElementSibling;
    submenu.classList.toggle('open');
}


// تابع برای باز کردن پاپ‌آپ
function openModal(url) {
  const modal = document.getElementById("orderFormModal");
  const iframe = modal.querySelector("iframe");

  if (modal && iframe) {
    iframe.src = `form.html`;  // تغییر URL iframe
    modal.style.display = "block"; // نمایش پاپ‌آپ
  }
}

// تابع برای بستن پاپ‌آپ
function closeModal() {
  const modal = document.getElementById("orderFormModal");
  if (modal) {
    modal.style.display = "none"; // پنهان کردن پاپ‌آپ
  }
}

// بستن پاپ‌آپ با کلیک خارج از آن
window.onclick = function(event) {
  const modal = document.getElementById("orderFormModal");
  if (modal && event.target == modal) {
    closeModal();
  }
}


 // script.js

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode'); // تغییر کلاس dark-mode
	
});

// اسکرول لینک
  
  function scrollToFooter() {
            const footer = document.getElementById('footer');
            footer.scrollIntoView({ behavior: 'smooth' });
        }
		
		


 // مختصات میدان آزادی کرمان
  const azadiKerman = [30.2811, 56.9779];

  // ساخت نقشه
  const map = L.map('map').setView(azadiKerman, 15);

  // بارگذاری نقشه از OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // افزودن یک آیکون سفارشی جذاب
  const customIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png', // آیکون دلخواه (مثلاً پین رنگی)
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38]
  });

  // مارکر با آیکون سفارشی و پاپ‌آپ
  L.marker(azadiKerman, { icon: customIcon })
    .addTo(map)
    .bindPopup('<b>آدرس دفتر آموزشی:کرمان_بلوار جمهوری اسلامی_بلوار رضوان_رضوان37_پلاک110_واحد اول</b>')
    .openPopup();
	
	function hardReload() {
    // با افزودن query string تصادفی، مرورگر کش رو دور میزنه
    const currentUrl = window.location.href.split('?')[0];
    const newUrl = `${currentUrl}?reload=${new Date().getTime()}`;
    window.location.href = newUrl;
}
