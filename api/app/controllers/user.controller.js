var User = require('../models/user.model.js');
//import HTTPStatus from 'http-status';

module.exports.list = function (req, res) {
  
  try {    
        //return res.status(HTTPStatus.CREATED).json(user.toAuthJSON());
    	if(req.query !== null && req.query != 'undefined'){
    		if(req.query.age !== null && req.query.age != 'undefined')paramAge = req.query.age;
    		if(req.query.latitude !== null && req.query.latitude != 'undefined')
    			paramLatitude = req.query.latitude;
    		if(req.query.longitude !== null && req.query.longitude != 'undefined')
    			paramLongitude = req.query.longitude;
    		if(req.query.monthlyIncome !== null && req.query.monthlyIncome != 'undefined')
    			paramMonthlyIncome = req.query.monthlyIncome;
    		if(req.query.experienced !== null && req.query.experienced != 'undefined')
    			paramExperienced = req.query.experienced;

    		/*console.log("Age:" + paramAge);
    		console.log("Latitude:" + paramLatitude);
    		console.log("Longitude:" + paramLongitude);
    		console.log("MonthlyIncome:" + paramMonthlyIncome);
    		console.log("Experienced:" + paramExperienced);*/

            var queryParams = {};

            if(paramAge && paramAge != null) 
                queryParams['age'] = paramAge;
            if(paramMonthlyIncome && paramMonthlyIncome != null) 
                queryParams['monthlyIncome'] = parseInt(paramMonthlyIncome);
            if(paramExperienced && paramExperienced != null) 
                queryParams['experienced'] = paramExperienced;
            
    	}

        
    	// find each person with a last name matching 'Ghost', selecting the `name` and `age` fields
		User.find(queryParams, 'name age latitude longitude monthlyIncome experienced', 
            { limit: 10 }, function (err, persons) {
		      if (err) console.log(err);
		      // Prints "Space Ghost is a talk show host".
		      
              /*for(var i=0; i< persons.length;i++){
                console.log(persons[i].longitude);
                var distance =Math.sqrt( (persons[i].latitude - paramLatitude) ** 2 + 
                                (persons[i].longitude - paramLongitude) ** 2 );
                persons[i]['distance'] = distance;
              }*/
		      //console.log(persons);
		      res.json({"peopleLikeYou":persons});
		});



  } catch (e) {
    //e.status = HTTPStatus.BAD_REQUEST;
    return next(e);
  }
};