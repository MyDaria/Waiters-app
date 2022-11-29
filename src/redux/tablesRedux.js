import { API_URL } from '../config';

//selectors
export const getAllTables = ({tables}) => tables;
export const getTableId = ({tables}, tableId) => tables.find(table => table.id === tableId);

// actions
const createActionName = actionName => `app/tables/${actionName}`;

const UPDATE_TABLE = createActionName('UPDATE_TABLE');
const EDIT_TABLE = createActionName('EDIT_TABLE');

// action creators
export const updateTable = payload => ({ type: UPDATE_TABLE, payload });
export const editTable = payload => ({ type: EDIT_TABLE, payload });

export const fetchTables = () => {
  return (dispatch) => {
    fetch(`${API_URL}/tables`)
      .then(res => res.json())
      .then(tables => dispatch(updateTable(tables)));
  }
};

export const editTableRequest = (newTableValues) => {
  return (dispatch) => {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...newTableValues })
    };
    
    fetch(`${API_URL}/tables/${newTableValues.id}`, options)
      .then(() => dispatch(editTable(newTableValues)));
  }
};

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLE:
      return [...action.payload]
    case EDIT_TABLE:
      return statePart.map(table => (table.id === action.payload.id ? { ...table, ...action.payload } : table));
    default:
      return statePart;
  };
};

export default tablesReducer;