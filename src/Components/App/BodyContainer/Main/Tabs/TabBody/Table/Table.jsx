import HeaderRow from './HeaderRow/HeaderRow'
import Row from './Row/Row'
import cls from './Table.module.css'


const Table = (props) => {

    let rows = props.jobs.map((obj, idx) => {
        return <Row key={obj.id} job={obj}/>
    })
    console.log(rows);
    return (
        <div className={cls.wrapper}>
            <HeaderRow/>
            {rows}

            
        </div>
    )
      
}
export default Table