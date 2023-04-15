import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({
    cloud_name:"dtmcamcaj",
    api_key:"567819557221624",
    api_secret:"TcBNcUirLvKS_AVC5UyvPWCLQHY"
})


export const uploadImage = async filePath =>{
   return await cloudinary.uploader.upload(filePath, {
        folder: 'posts'
    })
}

export const deleteImage = async id =>{
    return await cloudinary.uploader.destroy(id)
}