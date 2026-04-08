const TaskRequest = require('../models/TaskRequest');

// @desc    Create new task request
// @route   POST /api/requests
// @access  Private
const createRequest = async (req, res) => {
  const { taskType, instructions, time } = req.body;

  if (!taskType || !instructions || !time) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }

  const taskRequest = new TaskRequest({
    student: req.user._id,
    taskType,
    instructions,
    time,
  });

  const createdRequest = await taskRequest.save();

  // Emit event via socket (optional realtime feature)
  const io = req.app.get('socketio');
  if (io) {
    io.emit('newRequest', createdRequest);
  }

  res.status(201).json(createdRequest);
};

// @desc    Get all requests (Admin)
// @route   GET /api/requests
// @access  Private/Admin
const getRequests = async (req, res) => {
  const requests = await TaskRequest.find({}).populate('student', 'name email contactNumber hostel');
  res.json(requests);
};

// @desc    Get logged in user requests
// @route   GET /api/requests/myrequests
// @access  Private
const getMyRequests = async (req, res) => {
  const requests = await TaskRequest.find({ student: req.user._id });
  res.json(requests);
};

// @desc    Update request status (Admin)
// @route   PUT /api/requests/:id
// @access  Private/Admin
const updateRequestStatus = async (req, res) => {
  const { status } = req.body;

  const request = await TaskRequest.findById(req.params.id);

  if (request) {
    request.status = status || request.status;
    const updatedRequest = await request.save();

    const io = req.app.get('socketio');
    if (io) {
      io.emit('statusUpdated', updatedRequest);
    }

    res.json(updatedRequest);
  } else {
    res.status(404).json({ message: 'Request not found' });
  }
};

// @desc    Delete a request (Admin)
// @route   DELETE /api/requests/:id
// @access  Private/Admin
const deleteRequest = async (req, res) => {
  const request = await TaskRequest.findById(req.params.id);

  if (request) {
    await request.remove();
    const io = req.app.get('socketio');
    if (io) {
      io.emit('requestDeleted', req.params.id);
    }
    res.json({ message: 'Request removed' });
  } else {
    res.status(404).json({ message: 'Request not found' });
  }
};

module.exports = {
  createRequest,
  getRequests,
  getMyRequests,
  updateRequestStatus,
  deleteRequest,
};
