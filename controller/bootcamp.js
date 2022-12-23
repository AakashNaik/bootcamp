// @desc
// @route
// @access
exports.getBootcamps= (req,res,next)=>{
    console.log('get method called'); 
    res.send('<h1>confirmed get</h1>');
};

// @desc
// @route
// @access
exports.createBootcamp =(req,res,next)=>{
    console.log('post method called'); 
    res.send('confirmed post');
};

// @desc
// @route
// @access
exports.getBootcamp= (req,res,next)=>{
    console.log('get method called'); 
    res.send(`confirmed get id: ${req.params.id}`);
};


// @desc
// @route
// @access
exports.updateBootcamp =(req,res,next)=>{
    console.log('put method called'); 
    res.send(`confirmed put id: ${req.params.id}`);
};

// @desc
// @route
// @access
exports.deleteBootcamp = (req,res,next)=>{
    console.log('delete method called'); 
    res.send(`confirmed delete id: ${req.params.id}`);
};