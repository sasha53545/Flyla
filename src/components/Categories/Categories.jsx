import React from "react";
import css from './Categories.module.css';
import {categoriesRequest} from "../../service/categories";
import {ListOfCategories} from "../ListOfCategories/ListOfCategories";

export class Categories extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: [],
            category: 'Select category',
            list_of_categories: false
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
            <div className={css.categories}>
                <div className={css.input_categories}
                     onClick={() => this.setState({list_of_categories: !this.state.list_of_categories})}>
                    {this.state.category}
                </div>
                <div className={css.list_of_categories}>
                    {this.state.list_of_categories && <ListOfCategories categories={this.state.categories}/>}
                </div>

            </div>
        );
    }
}