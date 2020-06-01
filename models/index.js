const User = require('./User');
const Activity = require('./Activity');
const Eat = require('./Eat');
const Entertain = require('./Entertain');

User.hasMany(Activity, Eat, Entertain);
Activity.belongsTo(User);
Eat.belongsTo(User);
Entertain.belongsTo(User);

module.exports = { User, Activity, Eat, Entertain }