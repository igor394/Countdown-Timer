import Counters from './Counter';
import {Table} from 'react-bootstrap'


function List(props) {

  return (
    <div >
         {props.timers.length ===0 ? <h4>not timers</h4> : 
         <Table striped bordered hover style={{padding: '80px 300px 80px 250px'}}>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Down time</th>
                </tr>
            </thead>
            <tbody>
                    {props.timers.map((item, index)=> 
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{item['title']}</td>
                        <td>{item['date']}</td>
                        <td>{item['number'] ? item['number'] : '00:00'}</td>
                        <td> {<Counters time={item['timeDown']}/>}
                        </td>
                    </tr>)}
            </tbody>
        </Table>}
    </div>
  )
  }

export default List;