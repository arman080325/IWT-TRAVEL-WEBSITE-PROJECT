# IWT-TRAVEL-WEBSITE-PROJECT
🌍 Virtual Travel Website
👥 Team: The Web Ninjas

Members:

Arman

Sourav

Anil

Saniket

📖 Project Overview

The Virtual Travel Website is a web application that allows users to explore different countries around the world.

Users can:

Select a country

View detailed information (population, capital, region, languages, currency, etc.)

Browse travel & culture images fetched from APIs

Experience a simple, interactive way of “traveling” the world from a browser

The project is built only with HTML, CSS, and JavaScript (no advanced frameworks or libraries). Later, we plan to integrate a backend for login, favorites, and reviews.

🚀 Features (Phase 1: Frontend)

🌐 Dropdown Country Selection → Pick a country and fetch details.

📊 Country Info Display → Capital, population, region, languages, currency.

🖼️ Image Gallery → Fetch cultural & travel images for the country.

🎨 Responsive Layout → Works on both desktop and mobile.

⚡ Lightweight & Fast → Uses only HTML, CSS, and JS.

📂 Project Structure
virtual-travel-website/
│
├── index.html         # Main HTML page
├── style.css          # Styling for the UI
├── script.js          # JavaScript for interactivity & API calls
├── assets/            # Icons / images (optional)
└── README.md          # Project documentation

🛠️ Technologies Used

Frontend: HTML5, CSS3, Vanilla JavaScript

APIs:

REST Countries API
 → Country details

Unsplash API
 → Travel & culture images

📌 How It Works (Frontend Flow)

User selects a country from the dropdown.

A fetch request is made to the REST Countries API.

Example: https://restcountries.com/v3.1/name/japan

Country details (capital, population, etc.) are displayed in a card.

Another fetch request is made to the Unsplash API.

Example: https://api.unsplash.com/search/photos?query=japan&client_id=YOUR_ACCESS_KEY

Travel & cultural images are shown below the info card.

🔮 Future Roadmap (Phase 2: Backend)

✅ Add user login & registration (Node.js + Express).
✅ Allow users to save favorite countries.
✅ Add a review & rating system.
✅ Store data in MongoDB or Firebase.
✅ Deploy frontend on Netlify and backend on Render/Heroku.

👩‍💻 How to Run Locally

Clone this repo:

git clone https://github.com/your-username/virtual-travel-website.git
cd virtual-travel-website


Open index.html in your browser.

Select a country → View details & cultural images.

📷 Example Use Case

Open site → Dropdown shows all countries.

Select Italy → Info: Capital: Rome, Population: 59M, Currency: Euro.

Gallery shows pictures of Rome, Venice, Colosseum, Italian food.

👥 Team Roles

Arman → Frontend & API Integration (JS)

Sourav → UI/UX Design (HTML & CSS)

Anil → Backend Development (Phase 2)

Saniket → Testing & Documentation

🎯 Why This Project is Exciting

🌟 Unique compared to standard lab projects.

📚 Great learning in API integration using pure JS.

🖌️ Fun opportunity for creative UI design.

🚀 Easy to scale with backend & database integration.

📝 Sample Code (API Fetch Example)
<!-- index.html -->
<select id="countrySelect">
  <option value="india">India</option>
  <option value="japan">Japan</option>
  <option value="italy">Italy</option>
</select>

<div id="countryInfo"></div>
<div id="imageGallery"></div>

<script src="script.js"></script>

// script.js
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

  // Fetch country images (Unsplash API)
  fetch(`https://api.unsplash.com/search/photos?query=${country}&client_id=YOUR_ACCESS_KEY`)
    .then(res => res.json())
    .then(data => {
      let images = data.results.map(img => `<img src="${img.urls.small}" alt="${country}">`).join('');
      document.getElementById('imageGallery').innerHTML = images;
    });
});
