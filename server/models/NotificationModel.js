import mongoose from 'mongoose';

const notificationsSchema = new mongoose.Schema({
  content: {
    type: String,
  },
}, { timestamps: true });

const NotificationModel = mongoose.model('Notification', notificationsSchema);
export default NotificationModel;