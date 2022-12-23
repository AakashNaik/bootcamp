// @desc get method for all bootcamps
// @route GET api/v1/bootcamps
// @access PUBLIC
exports.getBootcamps= (req,res,next)=>{
    console.log('get method called'); 
    res.send('<h1>confirmed get</h1>');
};

// @desc create a new bootcamp
// @route POST api/v1/bootcamps
// @access PUBLIC
exports.createBootcamp =(req,res,next)=>{
    console.log('post method called'); 
    res.send('confirmed post');
};

// @desc get a item in bootcamp
// @route GET api/v1/bootcamps/:id
// @access PUBLIC
exports.getBootcamp= (req,res,next)=>{
    console.log('get method called'); 
    res.send(`confirmed get id: ${req.params.id}`);
};


// @desc update a item in bootcamp
// @route PUT api/v1/bootcamps/:id
// @access PUBLIC
exports.updateBootcamp =(req,res,next)=>{
    console.log('put method called'); 
    res.send(`confirmed put id: ${req.params.id}`);
};

// @desc delete a item from bootcamps
// @route DELETE api/v1/bootcamps/:id
// @access PRIVATE
exports.deleteBootcamp = (req,res,next)=>{
    console.log('delete method called'); 
    res.send(`confirmed delete id: ${req.params.id}`);
};