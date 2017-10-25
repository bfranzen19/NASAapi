// jQ ready statement start
// var APIkey = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-10-18&end_date=2017-10-25&api_key=VonJt8Vve5LhNeSezacnaH3Fd7m0IPxnO5YI5Kr1'

$(document).ready(function() {
  $.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-10-18&end_date=2017-10-25&api_key=VonJt8Vve5LhNeSezacnaH3Fd7m0IPxnO5YI5Kr1', function(allData) {
    // console.log(allData.near_earth_objects)
    var dangerousAsteroids = []
    // accesses days from start to end
    for(let days in allData.near_earth_objects) {
      // iterates through the days in the query
      for(var i=0 ; i<allData.near_earth_objects[days].length ; i++) {
        // accesses the days and checks if is_potentially_hazardous_asteroid is true
        if(allData.near_earth_objects[days][i].is_potentially_hazardous_asteroid === true) {
          dangerousAsteroids.push(allData.near_earth_objects[days][i])
          // console.log(dangerousAsteroids[i].close_approach_data[0].miss_distance.miles)
        }
      }
    }
  console.log(dangerousAsteroids)
  for(var missDistance in dangerousAsteroids) {
    missDistance = dangerousAsteroids[missDistance].close_approach_data[0].miss_distance.miles
    // console.log(missDistance)
  }

  for(var estDiameter in dangerousAsteroids) {
    estDiameter = dangerousAsteroids[estDiameter].estimated_diameter.feet.estimated_diameter_max
    // console.log(estDiameter)
  }

  for(var velocity in dangerousAsteroids) {
    velocity = dangerousAsteroids[velocity].close_approach_data[0].relative_velocity.miles_per_hour
    // console.log(velocity)
  }



  // miss distance in miles
  // console.log(dangerousAsteroids[0].close_approach_data[0].miss_distance.miles)
  // estimated diameter in feet
  // console.log(dangerousAsteroids[0].estimated_diameter.feet.estimated_diameter_max)
  // velocity in mph
  // console.log(dangerousAsteroids[0].close_approach_data[0].relative_velocity.miles_per_hour)


  })  // end of GET request
}) // jQ ready statement end
