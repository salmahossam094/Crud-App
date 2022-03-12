import React, { Component } from "react";
class CourseList extends Component {
 
    state = {
        isEdit: false
    }
    renderCourse = () => {
        return (
            <li>
                <span>{this.props.detail.name}</span>
                <button onClick={() => { this.toggleState() }}>Edit Course</button>
                <button onClick={() => { this.props.deleteCourse(this.props.index) }} >Delete Course</button>
            </li>

        )
    }
    toggleState = () => {
        let { isEdit } = this.state;
        this.setState({
            isEdit: !isEdit
        })
    }
    editItem = (e) => {
    
        e.preventDefault();
        this.props.editCourse(this.props.index, this.input.value);
        this.toggleState();


    }
    updatForm = () => {
        return (
            <form onSubmit={this.editItem}>
                <input type="text" ref={(v) => { this.input = v }} defaultValue={this.props.detail.name} />
                <button>Update Course</button>
            </form>
        )
    }

    render() {
        let { isEdit } = this.state;
        return (
            <>
                {isEdit ? this.updatForm() : this.renderCourse()}
            </>
        )
    }
}
export default CourseList;