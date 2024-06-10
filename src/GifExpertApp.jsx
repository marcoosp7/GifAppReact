import { useState } from "react";
import { AddCategory, GifGrid } from "./components"; /* exporto la carpeta */

export const GifExpertApp  = () =>  {

    //  hook de  react para mantener el estado
    const [categories, setCategories] = useState(['Dragon Ball']);

    const onAddCategory = (newCategory) => {
        // agregar una categoria
        if(categories.includes(newCategory))  return; // si la categoria existe no haga nada

        // else:
        setCategories([newCategory, ...categories]) // desestructuracion  para añadir one piece
    }

    return(
        <>
            {/*titulo*/}
            <h1>GifExpertApp</h1>

            {/*input*/}
            <AddCategory 
                // setCategories={setCategories}
                onNewCategory={onAddCategory}
                currentCategories = {categories}
            />

            {/*listado  de GIF*/}

            { 
                categories.map((category) => (
                <GifGrid 
                    key={category} 
                    category={category}
                />
                )) 
            }


                {/*gif item*/}
        </>
    )
}