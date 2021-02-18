import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { arrTheme } from '../../components/StyledComponent/Theme/ToDoList/ThemeManager'
import { ToDoListPrimaryTheme } from '../../components/StyledComponent/Theme/ToDoList/ToDoListPrimaryTheme'

import { Container } from '../../components/StyledComponent/Component/ToDoList/Container'
import { Dropdown } from '../../components/StyledComponent/Component/ToDoList/Dropdown'
import { Heading4, Heading3 } from '../../components/StyledComponent/Component/ToDoList/Heading'
import { TextField } from '../../components/StyledComponent/Component/ToDoList/TextField'
import { Button } from '../../components/StyledComponent/Component/ToDoList/Button'
import { Table, Thead, Tr, Th } from '../../components/StyledComponent/Component/ToDoList/Table'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TASK_API, DELETE_TASK_API, DONE_TASK_API, GET_TASKLIST_API, REJECT_TASK_API } from '../../redux/constants/ToDoListConst'
import { DISPLAY_LOADING, HIDE_LOADING } from '../../redux/constants/LoadingConst'

export default function ToDoList() {
    const taskList = useSelector(state => state.ToDoListReducer.taskList);
    const [state, setState] = useState({
        theme: ToDoListPrimaryTheme,
        values: {
            newTask: ""
        },
        errors: {
            newTask: ""
        }
    });

    const dispatch = useDispatch();

    const doneTask = (taskName) => {
        dispatch({
            type: DONE_TASK_API,
            taskName: taskName
        })
    }

    const removeTask = (taskName) => {
        // console.log("removeTask");
        dispatch({
            type: DELETE_TASK_API,
            taskName: taskName
        })
    }

    const addTask = () => {
        dispatch({
            type: ADD_TASK_API,
            newTask: state.values.newTask
        });
    }

    const rejectTask = (taskName) => {
        dispatch({
            type: REJECT_TASK_API,
            taskName: taskName
        })
    }

    const getTaskList = () => {
        dispatch({
            type: GET_TASKLIST_API
        })
    }

    useEffect(() => {
        getTaskList();
    }, []);

    const handleChangeNewTask = (e) => {
        let { value, name } = e.target;

        let newValues = { ...state.values };
        let newErrors = { ...state.errors };


        if (value.trim() === "") {
            newErrors.newTask = name + " invalid !";
        } else {
            newErrors.newTask = "";
            newValues.newTask = value;
        }

        setState({
            ...state,
            values: newValues,
            errors: newErrors
        });
    }

    const renderTheme = () => {
        return arrTheme.map((theme, index) => {
            return <option key={index} value={theme.id}>
                {theme.name}
            </option>
        });
    }
    const renderTaskToDo = () => {
        return taskList.filter(task => !task.status).map((task, index) => {
            if (task.taskName.trim() !== "") {
                return <Tr key={index}>
                    <Th style={{ verticalAlign: "middle" }}>{task.taskName}</Th>
                    <Th className="text-right">
                        <Button onClick={() => {
                            removeTask(task.taskName)
                        }} className="ml-2"><i className="fas fa-sm fa-trash"></i> </Button>
                        <Button onClick={() => {
                            doneTask(task.taskName)
                        }} className="ml-2"><i className="fas fa-sm fa-check"></i> </Button>
                        {/* <Button className="ml-2"><i className="fas fa-sm fa-edit"></i> </Button> */}
                    </Th>
                </Tr>
            }
            return "";
        })
    }

    const renderTaskCompleted = () => {
        return taskList.filter(task => task.status).map((task, index) => {
            if (task.taskName.trim() !== "") {
                return <Tr key={index}>
                    <Th style={{ verticalAlign: "middle" }}>{task.taskName}</Th>
                    <Th className="text-right">
                        <Button onClick={() => {
                            removeTask(task.taskName)
                        }} className="ml-2"><i className="fas fa-sm fa-trash"></i> </Button>
                        <Button onClick={() => {
                            rejectTask(task.taskName)
                        }} className="ml-2"><i className="fas fa-sm fa-arrow-up"></i> </Button>
                    </Th>
                </Tr>
            }
            return "";
        })
    }

    return (
        <div className="todolist-content">
            <ThemeProvider theme={state.theme}>
                <Container className="container">
                    <Heading3>Awesome TodoList</Heading3>
                    <Dropdown id="todolist-dropdown" onChange={(event) => {
                        let value = event.target.value;
                        let newTheme = arrTheme.find(item => item.id == value);
                        if (newTheme !== -1) {
                            dispatch({
                                type: DISPLAY_LOADING
                            })
                            setState({
                                ...state,
                                theme: newTheme.theme
                            });

                            // change color left table content
                            let myTable = document.getElementsByClassName("my-table")[0];
                            myTable.setAttribute("style",`color: ${newTheme.theme.color}`);
                            myTable.getElementsByTagName("a")[0].setAttribute("style",`color: ${newTheme.theme.color}`);
                            myTable.getElementsByTagName("a")[1].setAttribute("style",`color: ${newTheme.theme.color}`);
                            document.getElementsByClassName("bottom-description")[0].setAttribute("style",`color: ${newTheme.theme.color}`);

                            setTimeout(function(){
                                dispatch({
                                    type: HIDE_LOADING
                                })
                            }, 500);

                        }
                    }} className="mb-3">
                        {renderTheme()}
                    </Dropdown>
                    <TextField onChange={handleChangeNewTask} label="Enter an activity..." name="taskName" id="textfield-taskName" style={{ width: 300 }} ></TextField>
                    <Button onClick={() => {
                        addTask()
                    }} className="ml-2"><i className="fa fa-plus"></i> Add task</Button>
                    {/* <Button className="ml-2"><i className="fa fa-sync"></i> Update task</Button> */}
                    <Heading4 className="mt-2">Task Todo</Heading4>
                    <Table>
                        <Thead>
                            {renderTaskToDo()}
                        </Thead>
                    </Table>

                    <Heading4 className="mt-2">Task Completed</Heading4>
                    <Table>
                        <Thead>
                            {renderTaskCompleted()}
                        </Thead>
                    </Table>
                </Container>
            </ThemeProvider>
        </div>
    )
}
