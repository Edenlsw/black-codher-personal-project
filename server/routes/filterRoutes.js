const mongoose = require('mongoose');
const Filter = mongoose.model('filters');

module.exports = (app) => {
  app.get(`/api/filter`, async (req, res) => {
    const activity = await Filter.find();
    return res.status(200).send(activity);
  });

  app.post(`/api/filter`, async (req, res) => {
    const filter = await Filter.create(req.body);
    return res.status(201).send({
      error: false,
      filter,
    });
  });

  app.put(`/api/filter/:id`, async (req, res) => {
    const { id } = req.params;

    const filter = await Filter.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      filter,
    });
  });

  app.delete(`/api/filter/:id`, async (req, res) => {
    const { id } = req.params;

    const filter = await Filter.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      filter,
    });
  });
};
