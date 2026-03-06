const Tour = require('./../modules/tourModel');
const APIFeatures = require('./../utilis/apifeatures');

exports.getAllTours = async (req, res) => {
  try {
    // EXECUTE QUERY
    const features = new APIFeatures(Tour.find(), req.query);
    console.log(req.query);
    filter()
      .sort()
      .limitFields()
      .paginate();
    const tours = await features.query;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours
      }
    });

  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};
