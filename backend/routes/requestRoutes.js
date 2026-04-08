const express = require('express');
const router = express.Router();
const {
  createRequest,
  getRequests,
  getMyRequests,
  updateRequestStatus,
  deleteRequest,
} = require('../controllers/requestController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
  .post(protect, createRequest)
  .get(protect, admin, getRequests);

router.route('/myrequests').get(protect, getMyRequests);

router.route('/:id')
  .put(protect, admin, updateRequestStatus)
  .delete(protect, admin, deleteRequest);

module.exports = router;
