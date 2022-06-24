import React from "react";
import { connect } from "react-redux";
import { addUserAction, changeInput,clearDataAction, incrementNumberAction } from "../../redux/actions/actions";
import { createUsersReducer } from "../../pageOne/pageOne";




class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.changeInputFunc = this.changeInputFunc.bind(this)
        this.addUserFunc = this.addUserFunc.bind(this)
    }

    changeInputFunc (e) {
        const data = {
            value: e.target.value,
            name: e.target.name
        }


        this.props.changeInput(data)
    }

    addUserFunc() {
        this.props.addUserAction(this.props.data.name);
        const data = {
            name: ""
        }
        this.props.clearDataAction(data)
        this.props.incrementNumberAction(data)
    }

    render() {
        return (
            <div>
                <input type="number" name="name"
                value={this.props.data.name}

                 onChange={this.changeInputFunc}/>
                <button onClick={this.addUserFunc}>add user</button>
             
             <ul>
                {this.props.users.map(user => 
                <li>{user}</li>)}
             </ul>
             
             </div>
        )
    }
}
const mapSataeToProps = state => {
    return {
        data: state.input.data,
        users: state.users.users
    }
}

const mapDispatchToProps ={
    changeInput,
    addUserAction,
    clearDataAction,
    incrementNumberAction
    
}

export default connect(mapSataeToProps, mapDispatchToProps) (MainPage);