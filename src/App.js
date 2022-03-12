import React ,{Component} from "react";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";
class App extends Component {
  state ={
    courses:[
      {name:"HTML"},
      {name:"CSS"},
      {name: "jQuery"}

    ], 
    current : ''
   
  }
  updateCourse = (e) =>{
   this.setState({
     current: e.target.value
   })
  }
  editCourse = (index,value) =>{
      let courses = this.state.courses;
    let course = courses[index]
    course['name'] = value
    this.setState({
      courses
    })
  }
  addCourse =(e) =>{
    e.preventDefault()
    let current =this.state.current
    let courses = this.state.courses
    if (current){
    courses.push({name:current})
    this.setState({
      courses,
      current:''
    })}

  }
  deleteCourse = (index) => {    
    console.log(index)
    let courses = this.state.courses;
    courses.splice(index , 1);
    this.setState({
      courses
    })
    }
  render(){
    const {courses} = this.state;
    const courseList = courses.map((course, index)=>{
      return <CourseList detail = {course} key={index} index={index}  update ={this.handleChange} deleteCourse={this.deleteCourse} editCourse={this.editCourse}/>

    })
    return (
      <div className="App">
        <h2>Crud App</h2>
        <CourseForm updateCourse= {this.updateCourse} addCourse={this.addCourse} current={this.state.current}/>
        
        <ul>
        { this.state.courses.length > 0 ? courseList : <p>No Courses To Show! Please Add New Course.</p>   }
          
        </ul>
      </div>
      
    );
  }
}

export default App;
