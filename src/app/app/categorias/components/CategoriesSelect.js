import {Option} from "@material-tailwind/react";
import {ThemedSelect} from "../../../../components/material";
import {useEffect, useState} from "react";
import {getCategories} from "../actions";

export default function CategoriesSelect({ onSelect }) {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then((response) => {
            let cats = response

            // add to first position
            cats.unshift({id: 0, title: '--'})

            setCategories(cats)
        })
    }, []);

    return (
        <div>
            <ThemedSelect label='Categoría Padre'>
                {categories.map((category) => (
                    <Option key={category.id}>{category.title}</Option>
                ))}
            </ThemedSelect>
        </div>
    )
}
