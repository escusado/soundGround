exports.callback = function(req, res){
  console.log('render callbakck');
  res.render('callback');
};
//Homepages
exports.index = function(req, res){
  console.log('>>>>>>>>>');
  // res.render('layout', {
  //   title   : 'Monesan beta v0.0.1',
  //   assets  : 'homepage/assets',
  //   body    : 'homepage/body'
  // });

  var data ={a:1};

  res.render('layout', data);
};
