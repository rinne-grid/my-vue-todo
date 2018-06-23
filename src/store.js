import Vue from 'vue'
import Vuex from 'vuex'

import { API_HEADER, API_END_POINT, API_CREATE_TODO,
  API_UPDATE_TODO, API_DELETE_TODO, API_REF_LIST } from '@/consts/TodoConsts'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  namespace: true,
  state: {
    tasks: []
  },
  getters: {
    tasks (state) { return state.tasks }
  },
  actions: {
    // --------------------------------------------------
    // タスク取得API呼び出し
    // --------------------------------------------------
    setTasksService ( { commit } ) {
      axios.create(API_HEADER)
      .get(API_END_POINT + API_REF_LIST)
      .then(response => {
        let _tasks = response.data || []
        commit('setTasks', _tasks)
      })
      .catch(error => {
        if (error) { }
      })
    },
    // --------------------------------------------------
    // タスク作成API呼び出し
    // --------------------------------------------------
    createTaskService ( { commit }, taskObj) {
      axios.create(API_HEADER)
      .post(API_END_POINT + API_CREATE_TODO,
      {
        'id': '',
        'contents': taskObj.contents,
        'user': taskObj.user
      })
      .then (response => {
        // this.tasks.push(response.data)
        commit('createTask', response.data)
      })
      .catch (function (error, data) {
        if (error) {
          console.log(error)
          console.log(data)
        }
      })
    },
    // --------------------------------------------------
    // タスク更新API呼び出し
    // --------------------------------------------------
    updateTaskService ( { commit }, taskObj) {
      axios.create(API_HEADER)
      .put(API_END_POINT + API_UPDATE_TODO, {
        'id': taskObj.id,
        'contents': taskObj.contents,
        'user': taskObj.user
      })
      .then(response => {
        console.log('更新成功')
      })
      .catch(error => {
        if (error) { }
        console.log(error)
        console.log('更新失敗')
      })
    },
    // --------------------------------------------------
    // タスク削除API呼び出し
    // --------------------------------------------------
    deleteTaskService ( { commit }, taskId) {
      axios.create(API_HEADER)
      .delete(API_END_POINT + API_DELETE_TODO + '/' + taskId)
      .then(response => {
        console.log('削除成功')
        commit('deleteTask', taskId)
      })
      .catch(error => {
        console.log(error)
        if (error) { }
      })
    }
  },
  mutations: {
    // --------------------------------------------------
    // タスク取得
    // --------------------------------------------------
    setTasks (state, tasks) {
      state.tasks = tasks
    },
    // --------------------------------------------------
    // タスク作成
    // --------------------------------------------------
    createTask (state, taskObj) {
      state.tasks.push(taskObj)
    },
    // --------------------------------------------------
    // タスク更新
    // --------------------------------------------------
    updateTask (state, taskObj) {
      let target = state.tasks.forEach(task => {
        if (task.id === taskObj.id) {
          return task
        }
      })
      target.contents = taskObj.contents
    },
    // --------------------------------------------------
    // タスク削除
    // --------------------------------------------------
    deleteTask (state, taskId) {
      state.tasks.forEach( (task, index) => {
        if (task.id === taskId) {
          state.tasks.splice(index, 1)
        }
      })
    }
  }
})

export default store
