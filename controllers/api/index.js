const router = require('express').Router();

const artRoutes = require('./art-routes.js');
const userRoutes = require('./user-routes.js');
// const postRoutes = require('./item-routes');
const itemRoutes = require('./item-routes');
const commentRoutes = require('./comment-routes');

router.use('/art', artRoutes);
router.use('/users', userRoutes);
router.use('/items', itemRoutes);
router.use('/comments', commentRoutes);

module.exports = router;