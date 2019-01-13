import React, { Component } from 'react';
import Input from '../components/Input';
import Record from '../components/Record';
import '../sass/to_do_list.scss';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: '',
            name: '',
            description: '',
            list: [],
            isDisable: true,
        };

        this.dataChange = this.dataChange.bind(this);
        this.trashRecord = this.trashRecord.bind(this);
    }

    dataChange(name, value){
        this.state[name] = value;
        this.forceUpdate();

        if(this.isValidateInput()){
            this.setState({ isDisable: false });
        } else {
            this.setState({ isDisable: true });
        }
    }

    isValidateInput(){
        const { date, name, description } = this.state;

        return date.length && name.length && description.length;
    }

    addRecord(){
        const { date, name, description, list, isDisable } = this.state;

        if(!isDisable){
            let newList = list;

            newList.push({
                date: date,
                name: name,
                description: description
            });

            this.setState({
                date: '',
                name: '',
                description: '',
                list: newList,
                isDisable: true,
            });
        }
    }

    trashRecord(numberItem){
        this.state.list.forEach(function(item, key) {
            if (key === numberItem) {
                this.state.list.splice(key, 1);
                this.forceUpdate();
            }
        }.bind(this));
    }

    renderList() {
        let list = [];

        if (this.state.list.length) {
            list = this.state.list.map( (item, key) => {
                console.log('key', key)
                return <Record
                        key={ key }
                        numberItem={ key }
                        date={item.date}
                        name={item.name}
                        description={item.description}
                        trashRecord={ this.trashRecord }
                    />
            });
        } else {
            list = (
                <p className="records__notFound">You have not planned affairs</p>
            )
        }

        return (
            <div> { list } </div>
        );
    }

    render() {
        const { date, name, description, isDisable } = this.state;

        return (
            <div className="toDoList">
                <h1>To Do List</h1>
                <div className="toDoList__form input-group">
                    <Input
                        name="date"
                        placeholder="Data"
                        value={ date }
                        dataChange={ this.dataChange }
                    />
                    <Input
                        name="name"
                        placeholder="Name"
                        value={ name }
                        dataChange={ this.dataChange }
                    />
                    <Input
                        name="description"
                        placeholder="Description"
                        value={ description }
                        dataChange={ this.dataChange }
                    />
                </div>
                <div className="toDoList__action">
                    <div className="toDoList__action__add" onClick={this.addRecord.bind(this)} data-disable={ isDisable }>Add</div>
                </div>
                <div className="records">
                    {this.renderList()}
                </div>
            </div>
      );
    }
}