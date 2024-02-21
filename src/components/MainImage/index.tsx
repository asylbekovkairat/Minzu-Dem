import PhotoSwipeLightbox from 'photoswipe/lightbox';
import React, { useEffect, useRef } from 'react'
import "photoswipe/style.css"

const MainImage = ({ thumbnailURL }: { thumbnailURL: string | undefined }) => {
    const galleryRef = useRef<PhotoSwipeLightbox | null>(null);

    useEffect(() => {
        let lightbox: PhotoSwipeLightbox | null = new PhotoSwipeLightbox({
            gallery: '#' + "GalleryID",
            children: 'a',
            pswpModule: () => import('photoswipe'),
        });
        lightbox.init();
        galleryRef.current = lightbox;
  
        return () => {
            if (galleryRef.current) {
                galleryRef.current.destroy();
            }
        };
    }, []);
    return (
        <a
            href={thumbnailURL}
            data-pswp-width={"100%"}
            data-pswp-height={"100%"}
            target="_blank"
            rel="noreferrer"
        >
            <img src={thumbnailURL} alt="" style={{ width: '450px', height: '500px' }} />
        </a>
    )
}

export default MainImage;