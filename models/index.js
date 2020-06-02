const User = require('./User');
const Activity = require('./Activity');
const Eat = require('./Eat');
const Entertain = require('./Entertain');

User.hasMany(Activity);
User.hasMany(Eat);
User.hasMany(Entertain);

Eat.belongsTo(User);
Entertain.belongsTo(User);
Activity.belongsTo(User);


module.exports = { User, Activity, Eat, Entertain };