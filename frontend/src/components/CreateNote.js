import React, { Component } from 'react'
import axios from 'axios'

export default class CreateNote extends Component {

    state = {
        title: '',
        _id: '',
        editing: false
    }

    async componentDidMount() {
        
        if (this.props.match.params.id) {
            console.log(this.props.match.params.id)
            const res = await axios.get('http://localhost:4000/api/notes/' + this.props.match.params.id);
            console.log(res.data)
            this.setState({
                title: res.data.title,
                _id: res.data._id,
                editing: true
            });
        }
    }

    onSubmit = async (e) => {
        e.preventDefault();
        if (this.state.editing) {
            const updatedNote = {
                title: this.state.title
            };
            await axios.put('http://localhost:4000/api/notes/' + this.state._id, updatedNote);
        } else {
            const newNote = {
                title: this.state.title,
            };
            axios.post('http://localhost:4000/api/notes', newNote);
        }
        window.location.href = '/';

    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onChangeDate = date => {
        this.setState({ date });
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Create a Note</h4>
                    <form onSubmit={this.onSubmit}>
                        {/* Note Title */}
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Title"
                                onChange={this.onInputChange}
                                name="title"
                                value={this.state.title}
                                required />
                        </div>
                        <button className="btn btn-primary">
                            Save <i className="material-icons">
                                assignment
</i>
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
