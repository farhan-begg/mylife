/* eslint-disable no-nested-ternary */
import { useState, useEffect } from 'react';
import moment from 'moment';
import firebase from '../firebase';
import { collatedTasksExist } from '../helpers';

export const useTasks = selectedProject => {
    // initializing task and archived task to state
    const [tasks, setTasks] = useState([]);
    const [archivedTasks, setArchivedTasks] = useState([]);

    // grabs user
    let user = firebase.auth().currentUser
    let id = ""

    // if user exists save id
    if (user != null) {
        id = user.uid

    }
    // useEffect setting is running the function when value of selectedproject changes
    useEffect(() => {
        // saving firebase query in a variable but not executing
        let unsubscribe = firebase
            .firestore()
            .collection('tasks')
            .where('userId', '==', id);

        unsubscribe =
            selectedProject && !collatedTasksExist(selectedProject)
                ? (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
                : selectedProject === 'TODAY'
                    ? (unsubscribe = unsubscribe.where(
                        'date',
                        '==',
                        moment().format('DD/MM/YYYY')
                    ))
                    : selectedProject === 'INBOX' || selectedProject === 0
                        ? (unsubscribe = unsubscribe.where('date', '==', ''))
                        : unsubscribe;

        // listens for change to task doc
        // runs function everytime theres a change with task and task data
        unsubscribe = unsubscribe.onSnapshot(snapshot => {
            const newTasks = snapshot.docs.map(task => ({
                id: task.id,
                ...task.data(),
            }));
            // updating state
            setTasks(
                selectedProject === 'NEXT_7'
                    ? newTasks.filter(
                        task =>
                            moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 &&
                            task.archived !== true
                    )
                    : newTasks.filter(task => task.archived !== true)
            );
            setArchivedTasks(newTasks.filter(task => task.archived !== false));
        });

        return () => unsubscribe();
    }, [selectedProject]);

    return { tasks, archivedTasks };
};

export const useProjects = () => {
    const [projects, setProjects] = useState([]);

    let user = firebase.auth().currentUser
    let id = ""
    if (user != null) {
        id = user.uid
    }

    useEffect(() => {
        // getting project database at that certain point of time
        firebase
            .firestore()
            .collection('projects')
            .where('userId', '==', id)
            .orderBy('projectId')
            .get()
            .then(snapshot => {
                const allProjects = snapshot.docs.map(project => ({
                    ...project.data(),
                    docId: project.id,
                }));

                if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
                    setProjects(allProjects);
                }
            });
    }, [projects]);

    return { projects, setProjects };
};