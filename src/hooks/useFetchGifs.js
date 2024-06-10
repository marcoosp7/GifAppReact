import { useState, useEffect } from "react";
import {getGifs}  from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsloading(false);
    }
    //  este hook sirve para disparar efectos secundarios
    useEffect( () =>  {
        getImages();
    }, [])


    return {
        images,
        isLoading
    }
}
