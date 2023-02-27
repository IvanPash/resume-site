<template>
  <div>
    <p v-if="loading">Loading...</p>
    <div v-else>
      <p>Location: {{ city }}, {{ country }}</p>
      <p>Temperature: {{ temperature }}°C</p>
      <p>Weather: {{ weather }}</p>
      <p>Humidity: {{ humidity }}%</p>
      <p>Wind Speed: {{ windSpeed }} m/s</p>
      <button @click="getLocation">Use My Location</button>
      <br /><br />
      <input
        v-model="searchTerm"
        type="text"
        placeholder="Enter a city name"
        @keyup.enter="searchWeather"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: '',
      country: '',
      temperature: 0,
      weather: '',
      humidity: 0,
      windSpeed: 0,
      loading: true,
      searchTerm: '',
    }
  },
  created() {
    this.getLocation()
  },
  methods: {
    getLocation() {
      this.loading = true
      navigator.geolocation.getCurrentPosition((position) => {
        this.getWeather(position.coords.latitude, position.coords.longitude)
      })
    },
    searchWeather() {
      this.loading = true
      const API_KEY = 'a5ad12f0d63af840e7971a1142ba79d5'
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.searchTerm}&appid=${API_KEY}&units=metric`

      fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
          this.city = data.name
          this.country = data.sys.country
          this.temperature = data.main.temp
          this.weather = data.weather[0].description
          this.humidity = data.main.humidity
          this.windSpeed = data.wind.speed
          this.loading = false
        })
    },
    getWeather(lat, lon) {
      const API_KEY = 'a5ad12f0d63af840e7971a1142ba79d5'
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

      fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
          this.city = data.name
          this.country = data.sys.country
          this.temperature = data.main.temp
          this.weather = data.weather[0].description
          this.humidity = data.main.humidity
          this.windSpeed = data.wind.speed
          this.loading = false
        })
    },
  },
}
</script>

<style scoped>
div {
  text-align: center;
  font-size: 1.5em;
}

input[type='text'] {
  padding: 0.5em;
  font-size: 1.5em;
  width: 60%;
  margin: 0.5em auto;
  display: block;
}

button {
  padding: 0.5em 1em;
  font-size: 1.5em;
  margin-top: 1em;
}
</style>
