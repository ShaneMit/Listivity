const router = require('express').Router();
const { User, Activity, Eat, Entertain } = require('../models');

//CRUD APPLICATION ROUTES BELOW
// GET all activities
router.get('/activities', (req, res) => {
  //query want to do when want all activities
  Activity.findAll()
    .then(activities => res.json(activities))
    .catch(err => console.error(err))
});

// GET activities based on user's uniqueId 
router.get('/activities/:id', (req, res) => {
  Activity.findOne({ id: req.params.id })
    .then(activity => res.json(activity))
    .catch(err => console.error(err))
});

// ADD an activity 
router.post('/activities', (req, res) => {
  Activity.create(req.body)
    .then((activity) => res.json(activity))
    .catch(err => console.error(err))
});

// EDIT an activity in a user's database
router.put('/activities/:id', (req, res) => {
  Activity.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
});

// DELETE one activity
router.delete('/activities/:id', (req, res) => {
  Activity.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
});

//export router out
module.exports = router