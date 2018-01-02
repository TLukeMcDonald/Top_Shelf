// import model so that it can be accessed by the controller
const Beers = require('../models/beersDB');

// wrap all controller middleware in an empty object, then export that object at bottom of the file
const beersController = {};

// find all beers
beersController.index = (req, res, next) => {
  Beers.findAllBeers()
    .then((beers) => {
      res.status(200).json({
        message: 'ok',
        data:    {
          beers,
        },
      });
    })
    .catch(next);
};

// find one beer
beersController.show = (req, res, next) => {
  Beers.findOneBeer(req.params.id)
    .then((beer) => {
      res.status(200).json({
        message: 'ok',
        data:    {
          beer,
        },
      });
    })
    .catch(next);
};

// add one beer
beersController.create = (req, res, next) => {
  try {
    new Beer({
      id:          req.body.name,
      name:        req.body.name,
      description: req.body.description,
    })
      .save()
      .then((beer) => {
        res.status(201).json({
          message: 'Beer successfully created',
          data:    {
            beer,
          },
        });
      })
      .catch(next);
  } catch (err) {
    return next(err);
  }
};

// edit one beer
beersController.update = (req, res, next) => {
  Beers.findOneBeer(req.params.id)
    .then(beer => beer.editOneBeer({
      id:          req.body.id,
      name:        req.body.id,
      description: req.body.id,
    }))
    .then((beer) => {
      res.status(202).json({
        message: 'Beer successfully updated',
        data:    {
          beer,
        },
      });
    })
    .catch(next);
};

// delete one beer
beersController.delete = (req, res, next) => {
  Beers.deleteOneBeer(req.params.id)
    .then(() => {
      res.status(202).json({
        message: 'Beer deleted',
      });
    })
    .catch(next);
};


module.exports = beersController;

