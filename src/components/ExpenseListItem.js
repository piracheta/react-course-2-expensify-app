import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

// const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => {
//     return (
//         <div>
//             <Link to={`/edit/${id}`} >
//                 <h3>{description}</h3>
//             </Link>
//             <p>{amount} - {createdAt}</p>
//             <button onClick={() => {
//                 dispatch(removeExpense({id}));
//             }}>Remove</button>
//         </div>
//     )
// }

// export default connect()(ExpenseListItem);

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => {
    return (
        <div>
            <Link to={`/edit/${id}`} >
                <h3>{description}</h3>
            </Link>
            <p>{amount} - {moment(createdAt).format("dddd, MMMM Do YYYY")}</p>
        </div>
    )
}

export default ExpenseListItem;