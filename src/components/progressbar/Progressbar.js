import React, { Component } from "react";
import { render } from "react-dom";
import './Progressbar.css'
import firebase, { auth } from '../../firebase'






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
                {
                    title: 'Bike',
                    reps: 3,
                    initial: 3,
                    complete: 0,
                    random: "#E45A84",
                    finished: false,
                    id: "",
                },

            ],
            newHabit: '',
            reps: '',
            initial: 0,
            complete: 0,
            colors: colors,
            finished: false,
            id: ""

        }
    }


    componentDidMount() {

        let user = firebase.auth().currentUser
        let id = ""

        if (user != null) {
            id = user.uid
            // let name = user.displayName

        }

        firebase
            .firestore()
            .collection('habits')
            .where('userId', '==', id)
            .get()
            .then(snapshot => {
                const allHabits = snapshot.docs.map(habits => ({
                    ...habits.data(),
                }));

                this.setState({
                    habits: allHabits,
                })
            });
    }



    addHabit = () => {
        var newState = { ...this.state }
        let habitCounts = 0

        let user = firebase.auth().currentUser
        let id = ""

        if (user != null) {
            id = user.uid
            // let name = user.displayName

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
                userId: id



            })
            .then((docref) => {
                console.log(docref.id)
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
                // newState.newHabit = '';
                // newState.reps = '';

            });




    }
    removeHabit = (i) => {
        var newState = { ...this.state }
        newState.habits.splice(i, 1)
        this.setState(newState)
        // console.log(this.state.habits);
    }
    completeReps = (i) => {
        var newState = { ...this.state }
        var habit = newState.habits[i]

        if (habit.reps > 0) {
            habit.reps -= 1;
            habit.complete += 1;
        }
        if (habit.reps === 0) {
            habit.finished = true;
        }
        this.setState(newState, () => {

            let updateHabit = { complete: habit.complete, reps: habit.reps, finished: habit.finished }
            let updateJson = JSON.stringify(updateHabit)


            firebase
                .firestore()
                .collection("habits").doc(habit.id).update({ "complete": habit.complete, "reps": habit.reps, "finished": habit.finished })


                .then(() => {
                    console.log("*****************")

                })








        })
    }

    inputChange = (e) => {
        // console.log(e.target.name)
        var newState = { ...this.state }
        newState[e.target.name] = e.target.value
        this.setState(newState)

    }

    render() {
        return (
            <div class="container">
                <div id="app">

                    <h1>Habit Tracker</h1>

                    <div>
                        <input type="text" placeholder="Name Your Habit" name="newHabit" onChange={this.inputChange} value={this.state.newHabit} /><br />
                        <input type="number" placeholder="Amount" name="reps" onChange={this.inputChange} value={this.state.reps} /><br />
                        <button id="creator" onClick={this.addHabit}>Add</button>
                    </div>
                </div>
                {this.state.habits.map((habit, i) => {
                    return (
                        <div className="four columns">
                            <h4> {habit.title}</h4>
                            <div className="shell">
                                <div className="bar" style={{ width: 100 - habit.complete * (100 / habit.initial) + '%' }}>
                                </div>
                            </div>

                            <div className="lower">
                                <span onClick={() => { this.removeHabit(i) }} >
                                    <i class="fa fa-times"></i>
                                </span>
                                <button id="progress" onClick={() => { this.completeReps(i) }}><i class="fa fa-plus"></i>
                                </button>
                            </div>
                            {!habit.finished && <div> {habit.complete}/{habit.initial} times</div>}
                            {habit.finished && <div>Complete</div>}

                        </div>
                    )
                })

                }

            </div>





        )
    }
}









render(<ProgressBar />, document.getElementById("root"));

export default ProgressBar;