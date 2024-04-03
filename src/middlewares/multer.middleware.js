import multer from "multer";

const storage = multer.diskStorage({ 
    destination: function (req, file, cb) {
      cb(null, "./public/temp") // callback funciton  with two parameters : error and the path to save
    },
    filename: function (req, file, cb) { 
      
      cb(null, file.originalname)
    }
  })
  
export const upload = multer({ 
    storage, 
})