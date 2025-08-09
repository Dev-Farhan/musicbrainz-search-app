# Music Search & Favourites App

This application allows you to search for artists, view their releases, and save favourites.  
It uses **Last.fm API** for artist search and **MusicBrainz API** for release information.

**Live Demo:** [https://musicbrainz-search-app.netlify.app/](https://musicbrainz-search-app.netlify.app/)

---

## 📋 Requirements

Before you start, make sure you have:

- **Node.js** ≥ 20  
- **npm** ≥ 10
- An active internet connection  
- A [Last.fm API Key](https://www.last.fm/api/account/create)  

---

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Dev-Farhan/musicbrainz-search-app.git
   cd musicbrainz-search-app


2. **Installation**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   * Create a `.env` file in the root directory:

     ```env
     VITE_LASTFM_API_KEY=your_lastfm_api_key_here
     ```
   * You can get your Last.fm API key from [https://www.last.fm/api/account/create](https://www.last.fm/api/account/create).

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Build for production**

   ```bash
   npm run build
   ```

6. **Preview production build**

   ```bash
   npm run preview
   ```

---

## 📖 Usage

* **Search Artists:** Enter an artist name in the search bar then click on the search icon.
* **Show Releases:** Click "Show releases" to fetch release details.
* **Add to Favourites:** Click the ⭐ icon to save an artist.
* **View Favourites:** Go to the **Favourites** page to see saved artists.
* **Remove Favourite:** Click the ❌ icon to remove from favourites.

---

## 🛠️ Tech Stack

* **React** 19 + **Vite** 7
* **Redux Toolkit** 2
* **Tailwind CSS** 4
* **React Router** 7
* **React Icons** 5
* **Last.fm API** & **MusicBrainz API**

---

## 📂 Scripts

| Command           | Description                            |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Run development server with hot reload |
| `npm run build`   | Build app for production               |
| `npm run preview` | Preview the production build locally   |
| `npm run lint`    | Run ESLint for code quality checks     |

---

## 📄 Notes

* Ensure `.env` file is **not committed** to version control.
* If API calls fail, verify your Last.fm key and internet connection.
---

