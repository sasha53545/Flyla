import React from "react";
import css from './Categories.module.css';
import {categoriesRequest} from "../../service/categories";
import {ListOfCategories} from "../ListOfCategories/ListOfCategories";

export class Categories extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: [],
            category: 'Select category'
        };
    }

    componentDidMount() {
        categoriesRequest()
            .then(response => {
                this.setState({
                    categories: response.trivia_categories
                });
            })
            .catch(error => console.log(error.message));
    }

    render() {
        return (
            <div className={css.input_categories} onClick={() => <ListOfCategories categories={this.state.categories}/>}>
                {this.state.category}
            </div>
        );
    }
}