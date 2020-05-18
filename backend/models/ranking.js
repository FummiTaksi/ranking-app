const mongoose = require('mongoose');

const rankingSchema = new mongoose.Schema({
  competitionName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  amountOfLines: {
    type: Number,
  },
  positions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Position' }],
});

rankingSchema.pre('deleteOne', { document: true }, async function (next) {
  await this.model('Position').deleteOne({ ranking: this._id }, next);
});

const Ranking = mongoose.model('Ranking', rankingSchema);

module.exports = Ranking;
