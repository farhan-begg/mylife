import { getCollatedTasks } from '../constants'


export const getCollatedTasks = selectedProject =>
    collatedTasksExist.find(task => task.key === selectedProject);