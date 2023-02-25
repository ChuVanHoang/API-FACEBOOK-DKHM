const { authRoutes } = require('../controllers/auth');
const { errorController } = require('../controllers/handle-error');
const { messengerRoutes } = require('../controllers/messenger');
const { notificationRoutes } = require('../controllers/notification');
const { postRoutes } = require('../controllers/post');
const { userRoutes } = require('../controllers/user');

const initRoutes = (app) => {
  app.use(authRoutes);
  app.use(postRoutes);
  app.use(userRoutes);
  app.use(messengerRoutes);
  app.use(notificationRoutes);
  app.use('*', (req, res, next) => {
    const error = new Error('Not found url');
    error.statusCode = 404;
    return next(error);
  });
  app.use(errorController.handleError);
};

module.exports = initRoutes;
