// jQ ready statement start
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
        }
      }
    }

  var astName = []
  var astMissDistance = []
  var astEstDiameter = []
  var astVelocity = []

  var makeObj = function() {
    for(var j=0 ; j<dangerousAsteroids.length ; j++) {

      astName.push(dangerousAsteroids[j].name)
      astMissDistance.push(dangerousAsteroids[j].close_approach_data[0].miss_distance.miles)
      astEstDiameter.push(dangerousAsteroids[j].estimated_diameter.feet.estimated_diameter_max)
      astVelocity.push(dangerousAsteroids[j].close_approach_data[0].relative_velocity.miles_per_hour)

      var scaryAsteroids = []
      var asteroid = {
        name: astName[j],
        missDistance: astMissDistance[j],
        estDiameter: astEstDiameter[j],
        velocity: astVelocity[j],
      }

      scaryAsteroids.push(asteroid)
      console.log(scaryAsteroids)
    }
  }
  makeObj()

  for(var i=0 ; i<dangerousAsteroids.length ; i++) {
    console.log(asteroid[i])

  }





  })  // end of GET request

}) // jQ ready statement end
