// APIエンドポイント
export const API_END_POINT = '/vue-todo'
// 参照
export const API_REF_LIST = '/todo_list'
// 作成
export const API_CREATE_TODO = '/todo_create'
// 更新
export const API_UPDATE_TODO = '/todo_update'
// 削除
export const API_DELETE_TODO = '/todo_delete'

export const API_HEADER = {
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json'
}
