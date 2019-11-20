const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resSchema = new Schema({
  name: {
    type: String, // 資料型別: 字串
    required: true // 必填欄位
  },
  image: {
    type: String, // 資料型別: 字串
    required: true // 必填欄位
  },
  category: {
    type: String, // 資料型別: 字串
    required: true // 必填欄位
  },
  rating: {
    type: String, // 資料型別: 字串
    required: true // 必填欄位
  }
});

module.exports = mongoose.model("Res", resSchema);
