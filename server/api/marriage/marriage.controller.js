'use strict';

var _ = require('lodash');
var Marriage = require('./marriage.model');

// Get list of marriages
exports.index = function(req, res) {
  Marriage.find(function (err, marriages) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(marriages);
  });
};

// Get a single marriage
exports.show = function(req, res) {
  Marriage.findById(req.params.id, function (err, marriage) {
    if(err) { return handleError(res, err); }
    if(!marriage) { return res.status(404).send('Not Found'); }
    return res.json(marriage);
  });
};

// Get a single marriage by domain
exports.getByDomain = function(req, res) {
  Marriage.findOne({'domain': req.params.domain}, function (err, marriage) {
    if(err) { return handleError(res, err); }
    if(!marriage) { return res.status(404).send('Not Found'); }
    return res.json(marriage);
  });
};


// Creates a new marriage in the DB.
exports.create = function(req, res) {
  Marriage.create(req.body, function(err, marriage) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(marriage);
  });
};

// Updates an existing marriage in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Marriage.findById(req.params.id, function (err, marriage) {
    if (err) { return handleError(res, err); }
    if(!marriage) { return res.status(404).send('Not Found'); }
    var updated = _.merge(marriage, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(marriage);
    });
  });
};

// Deletes a marriage from the DB.
exports.destroy = function(req, res) {
  Marriage.findById(req.params.id, function (err, marriage) {
    if(err) { return handleError(res, err); }
    if(!marriage) { return res.status(404).send('Not Found'); }
    marriage.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}