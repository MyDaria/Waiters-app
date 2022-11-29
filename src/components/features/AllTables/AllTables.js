import { getAllTables } from '../../../redux/tablesRedux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import { Spinner } from 'react-bootstrap';

const AllTables = () => {
    const tables = useSelector(getAllTables);
    
    if (tables.length === 0) return (
        <div className='d-flex justify-content-center' style={{padding: '10%'}}>
          <Spinner style={{width: '5rem', height: '5rem', fontSize: '2rem'}} animation="border" variant="primary" />  
        </div>
      )

    return (
        <div>
            <h2 className='mb-0'>All Tables</h2>
            <ListGroup variant="flush">
                {tables.map((table) => <ListGroup.Item className="d-flex justify-content-between align-items-start mt-3 ps-0 pe-0" key={table.id} status={table.status} id={table.id} to={'/table/' + table.id}>
                    <div className='d-flex align-items-center'>
                        <h2 className='pe-4'>Table {table.id}</h2>
                        <h6>Status: <span className="ms-1 text-muted">{table.status}</span></h6>
                    </div>
                <Link to={{ pathname: `/table/${table.id}`}} className="btn btn-primary mb-2">Show more</Link>
                </ListGroup.Item>
                )}
            </ListGroup>
        </div>
    );
};

export default AllTables;