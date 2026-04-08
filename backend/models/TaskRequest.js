const mongoose = require('mongoose');

const taskRequestSchema = mongoose.Schema(
  {
    student: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    taskType: {
      type: String,
      required: true,
      enum: ['printing', 'groceries', 'delivery', 'laundry'],
    },
    instructions: { type: String, required: true },
    time: { type: String, required: true },
    status: {
      type: String,
      required: true,
      enum: ['pending', 'accepted', 'completed', 'cancelled'],
      default: 'pending',
    },
  },
  { timestamps: true }
);

const TaskRequest = mongoose.model('TaskRequest', taskRequestSchema);
module.exports = TaskRequest;
