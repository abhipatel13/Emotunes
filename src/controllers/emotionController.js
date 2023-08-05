const detectEmotion = async(req,res)=>{
  try{
    res.json({})
  }
  catch(err){
    res.status(500).json({err});
  }
}

module.exports = { detectEmotion }