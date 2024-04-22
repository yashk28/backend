import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// currently added the direct values as .env values are giving undefined
cloudinary.config({ 
  cloud_name: 'dgwh1qmh2', 
  api_key: '931337591646674', 
  api_secret: '4Tbj3SUTTj1m-0lCK-FOyoNoKD4' 
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null;
        //upload file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })

        fs.unlinkSync(localFilePath);
        return response;

    }catch(error) {
        fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload operation got failed
        return null
    }
}

export {uploadOnCloudinary}
