const User = require('./User');
const Activity = require('./Activity');
const Eat = require('./Eat');
const Entertain = require('./Entertain');

User.hasMany(Activity);
Activity.belongsTo(User);

User.hasMany(Eat);
Eat.belongsTo(User);

User.hasMany(Entertain);
Entertain.belongsTo(User);

module.exports = { User, Activity, Eat, Entertain };