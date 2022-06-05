const router = require('express').Router();
let Robot = require('../models/robot.model');

router.route('/').get((req, res) => {
  Robot.find()
    .then(robots => res.json(robots))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  const id = req.params.id;
  Robot.findById(id)
    .then(robot => res.json(robot))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const manufacturer = req.body.manufacturer;
  const price = req.body.price;
  const isAvailable = req.body.isAvailable;
  const imageUrl = req.body.imageUrl;
  const quantity = req.body.quantity;
  const highlight1 = req.body.highlight1;
  const highlight2 = req.body.highlight2;
  const highlight3 = req.body.highlight3;
  const highlight4 = req.body.highlight4;
  const highlight5 = req.body.highlight5;
  const overview = req.body.overview;

  const newRobot = new Robot({
    name,
    manufacturer,
    price,
    isAvailable,
    imageUrl,
    quantity,
    highlight1,
    highlight2,
    highlight3,
    highlight4,
    highlight5,
    overview
   });

  newRobot.save()
    .then(() => res.json('Robot added!'))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/:id').delete((req, res) => {
  const id = req.params.id;
  Robot.findByIdAndDelete(id)
    .then(() => res.json('Robot deleted!'))
    .catch(err => res.status(400).json('Error:' + err))
})

module.exports = router;