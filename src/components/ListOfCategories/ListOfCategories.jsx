import React from "react";
import css from './ListOfCategories.module.css';

export function ListOfCategories(props) {
    return (
        <div className={css.blockOfCategories}>
            {props.categories.map(item => {
                return <div className={css.category}>{item.name}</div>;
            })}
        </div>
    );
}