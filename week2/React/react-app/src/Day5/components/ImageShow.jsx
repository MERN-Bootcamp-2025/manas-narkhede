
function ImageShow({image}){

    // const minImage = () =>{
    //     if({image.width}< 6000 && {image.height} < 6000){
    //         return image;
    //     }
    // }
    return <div>
        
        <img src={image.urls.small} alt={image.alt_description} />
        
    </div>
}

export default ImageShow;