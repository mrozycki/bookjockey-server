var Book = require('./../models/book');

exports.display = function(req, res){
  res.setHeader('Content-Type', 'application/octet-stream');
  var id = req.params.filename.split('.')[0];
  Book.findById(id, function(err, book) {
    if (err) {
      res.end('{"error": "'+err+'"}');
    } else {
      res.end(book.content);
    }
  });
};

exports.add = function(req, res) {
  var book = new Book({
    content: req.body.book
  });

  res.setHeader('Content-Type', 'application/json');

  book.save(function(err) {
    if (err) {
      res.end(JSON.stringify({success: false, error: err}));
    } else {
      res.end(JSON.stringify({success: true, filename: book._id+".lima"}));
    }
  });
};
