import React, { Component } from "react";
import { render } from "react-dom";
import './Progressbar.css'
import firebase from '../../firebase'
import { FormControl} from "react-bootstrap";
import { BsFolderMinus, BsPlus } from "react-icons/bs";



const colors = [
    "#E45A84",
    "#FFD478",
    "#BA53DE",
    "#393E46",
    "#497285",
    "#3AB1C8",
    "#8DC6FF",
    "#B2E672",
    "#B17179"
];

class ProgressBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            habits: [

            ],
            newHabit: '',
            reps: '',
            initial: 0,
            complete: 0,
            colors: colors,
            finished: false,
            id: "",

        }
    }

    componentDidMount() {
        let user = firebase.auth().currentUser
        let id = ""

        if (user != null) {
            id = user.uid
        }

        firebase
            // gets firestore
            .firestore()
            // gets a  collection of habits
            .collection('habits')
            // grabs all documents inside habits collection with userId 
            .where('userId', '==', id)
            // initializes query 
            .get()
            // waits until previous promise returned true
            // wait untils all data is grabbed from firebase
            .then(snapshot => {
                // snapshot live database 
                // access all documents in our snapshot
                // .map is looping through all documents and returning mutated data
                const allHabits = snapshot.docs.map(habits => ({
                    ...habits.data(),
                    id: habits.id
                }));
                //state updates habit states with all habits from database
                // 
                this.setState({
                    habits: allHabits,
                })
            });
    }
    // adds new habits and grabs data from firebase
    addHabit = () => {
        let newState = { ...this.state }
        let habitCounts = 0
        const habit = newState.habits
        // grabs current user id from firebase
        let user = firebase.auth().currentUser
        let id = ""

        if (user != null) {
            id = user.uid

        }

        firebase
            .firestore()
            .collection('habits')
            .add({
                title: newState.newHabit,
                reps: newState.reps || 0,
                initial: newState.reps,
                complete: 0,
                random: newState.colors[Math.floor(Math.random() * newState.colors.length)],
                finished: false,
                userId: id,
            })
            .then((docref) => {
                // console.log(docref.id)
                if (this.state.newHabit && this.state.reps) {
                    habitCounts = newState.habits.length
                    newState.habits.push({
                        title: newState.newHabit,
                        reps: newState.reps || 0,
                        initial: newState.reps,
                        complete: 0,
                        random: newState.colors[Math.floor(Math.random() * newState.colors.length)],
                        finished: false,
                        id: docref.id,
                        userId: id
                    });
                }
                this.setState(newState)
                newState.newHabit = '';
                newState.reps = '';
            });
    }

    removeHabit = (i) => {
        const newState = { ...this.state }
        const habit = newState.habits[i]
        newState.habits.splice(i, 1)
        // this.setState(newState)
        this.setState(newState, () => {


            firebase
                .firestore()
                .collection("habits")
                .doc(habit.id)
                .delete()
                .then(() => {
                    console.log("*****************")
                })

        })
    }

    completeReps = (i) => {
        const newState = { ...this.state }
        const habit = newState.habits[i]

        if (habit.reps > 0) {
            habit.reps -= 1;
            habit.complete += 1;
        }
        if (habit.reps === 0) {
            habit.finished = true;
        }

        this.setState(newState, () => {

            firebase
                .firestore()
                .collection("habits")
                .doc(habit.id)
                .update({
                    "complete": habit.complete,
                    "reps": habit.reps,
                    "finished": habit.finished
                })
                .then(() => {
                    console.log("*****************")
                })
        })
    }

    inputChange = (e) => {
        let newState = { ...this.state }
        newState[e.target.name] = e.target.value
        this.setState(newState)

    }

    render() {
        return (
    <div>
            
          
        
            <div className="sidebar" data-testid="sidebar">
            <div className="sidebar__generic">
                
            <img className="rounded-circle" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
          data-holder-rendered="true"/>

                
                        <h1 className="title"> Habit Tracker</h1>        
                         {/* <img class="card-img-top" src="https://image.freepik.com/free-photo/man-jumping-impossible-possible-cliff-sunset-background-business-concept-idea_1323-266.jpg" alt="Card image cap" /> */}

                            <FormControl type="text" placeholder="Name Your Habit" name="newHabit" onChange={this.inputChange} value={this.state.newHabit} /><br />
                            <FormControl type="number" placeholder="Amount" name="reps" onChange={this.inputChange} value={this.state.reps} /><br />
                            <span className="add-button" onClick={this.addHabit}>Add</span>
                   </div>
                   </div>     
    
          

         
                    <div className="progress_tasks" data-testid="tasks">
                    {
                        this.state.habits.map((habit, i) => {
                            return (
                        

                                <div className="four columns">
                                    <h7 classname="progress_title"> {habit.title}</h7>
                                    <ul className="tasks__list">
                                    <div className="shell">
                                        <div className="bar" style={{ width: 100 - habit.complete * (100 / habit.initial) + '%' }}>
                                        </div>
                                    </div>

                                    <div className="lower">
                                        <span onClick={() => { this.removeHabit(i) }} >
                                        <i class="fas fa-minus"></i>
                                        </span>
                                         <i   id="progress" onClick={() => { this.completeReps(i) }}className="fas fa-plus"></i>
           

               
                                        {/* <button id="progress" onClick={() => { this.completeReps(i) }}><i class="fa fa-plus"></i> */}
                                        {/* </button> */}
                               
                                    </div>
                                    {!habit.finished && <div className="initial"> {habit.complete}/{habit.initial} times</div>}
                                    {habit.finished && <div className="complete">Complete</div>}
                                    </ul>
                                </div>
                           
                            )
                        })
                    }
                    </div>
                </div >
        
        






           
           
        )
    }
}

render(<ProgressBar />, document.getElementById("root"));

export default ProgressBar;




