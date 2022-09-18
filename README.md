<h1 align="center">
  <a href="https://rohan-hari.github.io/Next-Destination-Finder">
    Next Destination Finder
  </a>
</h1>
<p align="center">
Next Destination Finder is a travel companion application built on top of React and Material UI.
</p>

<h4 align="center">
  Technologies used: 
  <a href="http://reactjs.org" target="_blank">React</a>,
  <a href="https://mui.com/" target="_blank">Material UI</a>,
  <a href="https://axios-http.com" target="_blank">Axios</a>, 
  <a href="https://developers.google.com/maps" target="_blank">Google Maps API</a> and 
  <a href="https://rapidapi.com/hub" target="_blank">RapidAPI</a>.
</h4>

<div align="center">
	<img src="https://i.ibb.co/nkGqRtq/Screenshot-14.png" />
</div>

<p align="center">
  <a href="https://rohan-hari.github.io/Next-Destination-Finder">Live Demo</a> •
  <a href="#features">Features</a> •
  <a href="#setup">Setup</a> •
  <a href="https://github.com/rohan-hari/Next-Destination-Finder/archive/refs/heads/master.zip">Download Zip</a> •
  <a href="#license">License</a>
</p>

## Features

• Find hotels, restaurants and attraction based on your location.<br>
• Functional to search for places.<br>
• Filter data according to Users ratings.

## Setup

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/)

Terminal

```bash
# Clone this repository
$ git clone https://github.com/rohan-hari/Postman-Clone-React.git
# Go into the repository
$ cd Postman-Clone-React
# Install dependencies
$ npm install
```

<h4>External</h4>

• Enable [Maps Javascript API](https://console.cloud.google.com/marketplace/product/google/maps-backend.googleapis.com) on a new project in Google Cloud Platform.<br>
• To get Google Maps Api Key [follow this link](https://developers.google.com/maps/documentation/javascript/get-api-key)<br>
• To get RapidAPI key [click here](https://rapidapi.com/apidojo/api/travel-advisor/) and then subscibe to an existing plan (Free plan is suitable for development)<br>
• Create a '.env' file in your project folder, and then add the following code to it.

```
REACT_APP_GOOGLE_MAPS_API_KEY = <Your Google Map API Key>
REACT_APP_RAPID_API_KEY = <Your RapidAPI Key>
```

• Finally, you can run the app using:

```
npm start
```

## License

MIT
