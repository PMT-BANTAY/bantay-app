<div align="center">
  <img src="frontend/src/assets/bantay-blue.svg" alt="BANTAY Logo" width="200"/>
  
  # BANTAY
  **Web-Based Flood Monitoring and Propagation Mapping Platform**
  
  *Real-time Flood Propagation Mapping for Metro Manila*
  
  [![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-7.0.0-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.10-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
</div>

---

## About BANTAY

BANTAY transforms flood response through predictive intelligence, bridging the critical gap between government flood monitoring infrastructure and community preparedness needs in Metro Manila. The platform converts PAGASA's existing sensor network data into actionable flood intelligence for the 13 million residents of Metro Manila's flood-prone communities.

### Key Features

- **Real-time Flood Monitoring** - Live flood propagation mapping using advanced algorithms
- **Interactive Flood Maps** - Color-coded mesh grid overlays showing current flood status
- **Smart Evacuation Routing** - Optimal evacuation paths using Dijkstra's algorithm
- **Predictive Analytics** - Breadth-First Search algorithm for flood propagation modeling
- **Responsive Design** - Works seamlessly across desktop and mobile devices
- **Real-time Updates** - Sub-second response times for flood predictions

## Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (version 18 or higher)
- **npm** (version 8 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bantay
   ```

2. **Navigate to the frontend directory**
   ```bash
   cd frontend
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to see the application running.

## Available Scripts

In the frontend directory, you can run:

### `npm run dev`
Starts the development server with hot module replacement.
- Runs on `http://localhost:5173`
- Perfect for development and testing

### `npm run build`
Builds the app for production to the `dist` folder.
- Compiles TypeScript and optimizes the build
- Ready for deployment

### `npm run lint`
Runs ESLint to check for code quality and style issues.
- Helps maintain consistent code standards
- Identifies potential problems

### `npm run preview`
Locally previews the production build.
- Serves the built application
- Great for final testing before deployment

## Technology Stack

### Frontend
- **React 19.1.0** - Modern UI library with latest features
- **TypeScript 5.8.3** - Type-safe development
- **Vite 7.0.0** - Lightning-fast build tool
- **TailwindCSS 4.1.10** - Utility-first CSS framework
- **React Router DOM 7.6.2** - Client-side routing

### Backend Integration
- **FastAPI** - High-performance API processing
- **Redis** - Real-time data caching
- **Firebase** - Scalable NoSQL storage
- **Mapbox GL JS** - Interactive mapping

### Data Sources
- **PAGASA Sensors** - Real-time water level monitoring
- **TessaDEM** - 30-meter Digital Elevation Model
- **PMT Basin Data** - Pasig-Marikina-Tullahan Basin information

## Project Structure

```
frontend/
├── public/
│   ├── vite.svg
│   └── public-logo.svg
├── src/
│   ├── assets/           # Images, icons, and static files
│   ├── components/       # Reusable React components
│   │   ├── layout/       # Layout components (Header, Footer, etc.)
│   │   └── ui/           # UI components
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   └── App.css           # Global styles
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── tailwind.config.js    # TailwindCSS configuration
```

## Core Algorithms

### Flood Propagation Modeling
- **Breadth-First Search (BFS)** algorithm for real-time flood extent prediction
- Dynamic mesh grid resolution with optimized neighbor cell calculations
- Terrain-aware analysis considering elevation gradients and flow dynamics

### Evacuation Routing
- **Dijkstra's algorithm** for optimal evacuation path calculation
- Real-time route adjustment based on flood status
- Integration with PMT Basin road network data

## Target Users

- **Residents** - 13 million Metro Manila residents in flood-prone areas
- **Emergency Responders** - Quick access to real-time flood intelligence
- **Local Government Officials** - Data-driven decision making for flood response
- **Community Leaders** - Proactive flood preparedness planning

## Academic Project

This project was developed by students from the **Polytechnic University of the Philippines (PUP)** in collaboration with **VCI2R5** as part of their academic research in June 2025, Manila, Philippines.

### Research Team
- John Paul Curada
- Marie Criz Zaragoza  
- Ken Audie Lucero
- Gian Ramilo
- Elias Von Isaac Faeldonia
- Florence Lee Cansino
- Gabriel Andrei Magtanong
- Ma. Izabelle Oja
- Michael Richmond Racelis

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Support

For questions, issues, or support, please contact the development team or create an issue in the repository.

## License

This project is developed for academic and research purposes. Please refer to the repository's license file for detailed information.

---

<div align="center">
  <p><strong>BANTAY</strong> - Transforming Flood Response Through Predictive Intelligence</p>
  <p>Built with ❤️ for the safety of Metro Manila communities</p>
</div>
