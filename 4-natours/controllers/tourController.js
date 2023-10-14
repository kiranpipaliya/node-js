const Tour = require('./../models/toursModels');

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime
    // result: tours.length,
    // data: {
    //   tours
    // }
  });
};

exports.getTour = (req, res) => {
  const id = req.params.id * 1; // covert into number
  // const tour = tours.find(item => item.id === id);

  // res.status(200).json({
  //   status: 'success',
  //   data: {
  //     tour
  //   }
  // });
};

exports.createTour = (req, res) => {
  // const newTour = new Tour({});
  // newTour.save();

  res.status(201).json({
    status: 'success'
    // data: {
    //   tours: newTours
    // }
  });
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    statusbar: 'success',
    data: {
      tour: '<updated tours here ...>'
    }
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    statusbar: 'success',
    data: null
  });
};
