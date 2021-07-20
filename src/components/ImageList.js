import React from 'react';
import ImageListItem from './ImageListItem';

class ImageList extends React.Component {
    render(){
        return(
            <div className="image-list">
                {
                    this.props.imageList.map(image => {
                        if(image.height < image.width) {
                            return (<ImageListItem imgUrl={image.urls.regular} key={image.urls.regular}/>)
                        } else {
                            return null;
                        }
                    })
                }
            </div>
        )
    }
}

export default ImageList;