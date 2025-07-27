import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ToDoListApi = () => {

    const [arrTask, setArrTask] = useState([]);
    const [newTask, setNewTask] = useState('');
    let loadTask;

    const getAllTask = async () => {
        try {
            let res = await axios({
                url: `https://svcy.myclass.vn/api/ToDoList/GetAllTask`,
                method: 'GET',
                responseData: 'JSON'
            });
            setArrTask(res.data);
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getAllTask();
        // setup sau mỗi 5s hàm callback trong setInterval sẽ gọi lại 1 lần
        loadTask = setInterval(() => {
            getAllTask();
        }, 5000);
        return () => {
            clearInterval(loadTask);
        }
    }, []);
    const renderTask = () => {
        let res = arrTask.filter(item => item.status == false);
        let arrTaskJSX = res.map((item, index) => {
            return <div className="alert alert-dark bg-dark text-white d-flex justify-content-between" key={index}>
                <span>{item.taskName}</span>
                <div className="button-action">
                    <button className="btn btn-success" onClick={() => {
                        handleDoneTask(item.taskName);
                    }}>Complete</button>
                    <button className="btn btn-danger ms-2" onClick={() => {
                        deleteTask(item.taskName);
                    }}>Delete</button>
                </div>
            </div>
        });
        return arrTaskJSX;
    }
    const renderTaskComplete = () => {
        let res = arrTask.filter(item => item.status == true);
        let arrTaskJSX = res.map((item, index) => {
            return <div className="alert alert-dark bg-success text-white d-flex justify-content-between" key={index}>
                <span style={{ textDecoration: 'line-through' }}>{item.taskName}</span>
                <div className="button-action">
                    <button className="btn btn-warning" onClick={() => {
                        handleRejectTask(item.taskName);
                    }}>Reject</button>
                    <button className="btn btn-danger ms-2" onClick={() => {
                        deleteTask(item.taskName);
                    }}>Delete</button>
                </div>
            </div>
        });
        return arrTaskJSX;
    }

    const addTask = async () => {
        // Gọi API từ addTask từ backend
        let objTask = {
            "taskName": newTask
        };
        console.log(objTask)
        try {
            let res = await axios({
                url: `https://svcy.myclass.vn/api/ToDoList/AddTask`,
                method: 'POST',
                data: objTask
            })
            // console.log(res.data)
            getAllTask();
        } catch (err) {
            console.log(err);
        }

    }
    const handleDoneTask = async (taskNameDone) => {
        try {
            const res = await axios({
                url: `https://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskNameDone}`,
                method: 'PUT'
            });
            // Gọi lại API load task
            getAllTask();
        } catch (err) {
            console.log(err)
        }

    }
    const handleRejectTask = async (taskNameReject) => {
        try {
            const res = await axios({
                url: `https://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskNameReject}`,
                method: 'PUT'
            });
            getAllTask();
        } catch (err) {
            console.log(err)
        }

    }
    const deleteTask = async (taskNameDelete) => {
        try {
            const res = await axios({
                url: `https://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskNameDelete}`,
                method: 'DELETE'
            })
            window.alert('Xóa thành công');
            getAllTask();
        } catch (err) {
            console.log(err)
        }
    }
    //----------------------------------------------------
    return (
        <div className='container'>
            <h3>To Do List</h3>
            <div className="input-group">
                <input type="text" className="form-control" id='task' placeholder='nhập công việc cần làm' onInput={(e) => {
                    let { value } = e.target;
                    setNewTask(value);
                }} />
                <button className='btn btn-dark' onClick={() => {
                    addTask();
                }}>Add</button>
            </div>

            <div className="form-group">
                <h3>Việc chưa làm</h3>

                {renderTask()}

            </div>
            <div className="form-group">
                <h3>Việc đã làm</h3>

                {renderTaskComplete()}

            </div>
        </div>
    )
}

export default ToDoListApi