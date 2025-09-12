# IWT-TRAVEL-WEBSITE-PROJECT  
🌍 **Virtual Travel Website**  
👥 Team: *The Web Ninjas* 🥷💻🌍✈️  

---

## 🏷️ Badges  

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)  
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)  
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)  
![REST Countries API](https://img.shields.io/badge/REST%20Countries%20API-007EC6?style=for-the-badge&logo=world&logoColor=white)  
![Unsplash API](https://img.shields.io/badge/Unsplash%20API-000000?style=for-the-badge&logo=unsplash&logoColor=white)  

---

##🧑‍💻 Members  
- Arman  
- Sourav  
- Anil  
- Saniket  

---

## 📖 Project Overview  

The **Virtual Travel Website** is an interactive web app that allows users to explore different countries of the world.  

Users can:  
- 🌐 Select a country from a dropdown  
- 📊 View details such as **capital, population, region, languages, and currency**  
- 🖼️ See a gallery of **travel & cultural images**  
- ✨ Experience an engaging way to learn about the world directly in the browser  

The project is built only with **HTML, CSS, and JavaScript** (no advanced frameworks).  
Later, we will integrate a backend to enable **user login, favorites, and reviews**.  

---

## 🚀 Features  

### ✅ Phase 1 (Frontend)  
- 🌐 Dropdown Country Selection → Choose a country.  
- 📊 Country Info Display → Capital, population, region, currency, languages.  
- 🖼️ Image Gallery → Travel & cultural images fetched dynamically.  
- 🎨 Responsive Layout → Works on desktop and mobile.  
- ⚡ Simple Setup → No frameworks, only HTML, CSS, JS.  

### 🔮 Phase 2 (Backend, Planned)  
- 🔑 User login & signup (Authentication).  
- ⭐ Save favorite countries to personal travel wishlist.  
- 📝 Write reviews and ratings for countries.  
- 📦 Database integration with **MongoDB/Firebase**.  
- 🚀 Deployment on **Netlify (frontend)** & **Render/Heroku (backend)**.  

---

## 📂 Project Structure  


virtual-travel-website/
│

├── index.html # Main HTML page (UI layout)
├── style.css # CSS styling for website
├── script.js # JS for logic, fetch requests, interactivity
├── assets/ # Static images/icons (optional)
└── README.md # Documentation file


---

## 🛠️ Technologies & APIs  

**Frontend**  
- HTML5 → Page structure  
- CSS3 → Styling, responsive design  
- JavaScript (Vanilla) → Fetch API, interactivity  

**APIs Used**  
- 🌍 **REST Countries API** → Provides country details  
  Example:  
https://restcountries.com/v3.1/name/japan

makefile
Copy code
Returns: name, population, capital, region, languages, currencies, flag.  

- 📸 **Unsplash API** → Provides high-quality travel & cultural images  
Example:  
https://api.unsplash.com/search/photos?query=japan&client_id=YOUR_ACCESS_KEY

yaml
Copy code

---

## 📌 How It Works  

1. User selects a country from the dropdown (`<select>`).  
2. JavaScript fetches data from **REST Countries API**.  
3. Country details (flag, capital, etc.) appear in an **info card**.  
4. JavaScript fetches related travel images from **Unsplash API**.  
5. The image gallery is dynamically displayed.  

---

## 📊 System Flow Diagram  

🖼️ Add this diagram as an image in your repo (already created).  

Flow:  
**User → Frontend (HTML/CSS/JS) → APIs (REST Countries & Unsplash)**  
*(Later: Backend + Database integration)*  

---

## 👩‍💻 How to Run the Project  

1. **Clone the Repo**  
```bash
git clone https://github.com/your-username/virtual-travel-website.git
cd virtual-travel-website
Open in Browser
Just open index.html in your browser. No server setup required.

Configure API Keys

Get a free Unsplash API key from Unsplash Developers.

Replace YOUR_ACCESS_KEY in script.js with your key.

📝 Sample Code
HTML (Dropdown + Display Containers)

html
Copy code
<select id="countrySelect">
  <option value="india">India</option>
  <option value="japan">Japan</option>
  <option value="italy">Italy</option>
</select>

<div id="countryInfo"></div>
<div id="imageGallery"></div>

<script src="script.js"></script>
JavaScript (API Integration)

js
Copy code
document.getElementById('countrySelect').addEventListener('change', function () {
  let country = this.value;

  // Fetch country info
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(res => res.json())
    .then(data => {
      let info = data[0];
      document.getElementById('countryInfo').innerHTML = `
        <h2>${info.name.common}</h2>
        <p>Capital: ${info.capital[0]}</p>
        <p>Population: ${info.population.toLocaleString()}</p>
        <p>Region: ${info.region}</p>
        <p>Currency: ${Object.values(info.currencies)[0].name}</p>
      `;
    });

  // Fetch images from Unsplash
  fetch(`https://api.unsplash.com/search/photos?query=${country}&client_id=YOUR_ACCESS_KEY`)
    .then(res => res.json())
    .then(data => {
      let images = data.results.map(img => 
        `<img src="${img.urls.small}" alt="${country}">`
      ).join('');
      document.getElementById('imageGallery').innerHTML = images;
    });
});
```
👥 Team Roles
Arman → Frontend Development (HTML, JS API Integration)

Sourav → UI/UX Design (CSS Styling, Layout)

Anil → Backend Development (Phase 2: Node.js + Database)

Saniket → Testing & Documentation

🎯 Why This Project is Unique
🌍 Explores world countries with real-time data

📸 Integrates live APIs for facts & culture

💡 Simple yet powerful with only HTML, CSS, JS

🚀 Expandable with backend features (login, favorites, reviews)

🏁 Footer
Made with ❤️ by The Web Ninjas 🥷💻🌍✈️

“Travel the world, one click at a time.” 🌍
