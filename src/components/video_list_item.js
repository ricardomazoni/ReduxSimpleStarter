import React from 'react'

/**
 * 
 * @param {*} props 
 * ao inves de usar props 
 * se usar o nome do atributo {video}
 * é a mesma coisa que declar com o props
 * e chamar o atributo
 */
const VideoListItem = ({video}) => {
    const imageUrl = video.snippet.thumbnails.default.url

    return (
        <li className='list-group-item'>
            <div className='video-list media'>
                <div className='media-left'>
                    <img className='media-object' src={imageUrl} />
                </div>
            </div>
            <div className='media-body'>
                <div className='media-heading'>{video.snippet.title}</div>
            </div>

        </li>

    )  
}

export default VideoListItem