# Weather App


A simple weather application that allows users to search for the current weather conditions in any city. The app fetches data from the OpenWeatherMap API and displays the temperature, humidity, wind speed, and weather condition using appropriate icons.

#API
This application uses the OpenWeatherMap API to fetch weather data.
## Features

- Search for the weather by city name.
- Display of current temperature, humidity, and wind speed.
- Weather icons corresponding to the current weather conditions.
- Error handling for invalid API keys and city names.

## Technologies Used

- Node.js
- Express.js
- HTML, CSS, JavaScript (Frontend)
- OpenWeatherMap API
- dotenv (for environment variable management)

## Setup

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/weather-app.git
    cd weather-app
    ```

2. Install the required dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root of your project and add your OpenWeatherMap API key:

    ```plaintext
    API_KEY=your_openweathermap_api_key
    ```

4. Start the server:

    ```bash
    node server.js
    ```

5. Open your browser and navigate to `http://localhost:3000` to use the app.

## Usage

1. Enter the name of a city in the search bar.
2. Click the search button to retrieve the current weather conditions.
3. The weather information will be displayed, including temperature, humidity, wind speed, and an icon representing the weather.

## Project Structure

```plaintext
weather-app/
│
├── public/
│   ├── css/
│   │   └── style.css
│   ├── images/
│   │   ├── clouds.png
│   │   ├── clear.png
│   │   ├── rain.png
│   │   ├── drizzle.png
│   │   ├── mist.png
│   │   ├── snow.png
│   │   ├── wind.png
│   │   ├── humidity.png
│   │   └── search.png
│   ├── js/
│   │   └── script.js
│   └── index.html
│
├── .env
├── server.js
├── package.json
└── README.md
