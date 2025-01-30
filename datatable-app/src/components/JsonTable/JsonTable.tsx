import data from '../../../data.json';
import './JsonTable.css';

type Consoles = {
    id: string;
    title: string;
    type: string;
    teraflops: string;
}

type Data = {
    Consoles: Consoles[];
}

const typedData: Data = data;

const columnTitles = ['ID', 'Title', 'Type', 'Teraflops'];

export default function JsonTable() {
    const listName = 'Consoles';
    const consoles: Consoles[] = typedData[listName];
    
    return (
        <div className='container'>
            <div className="e-table-container">
                <h2 className='table-title'>{listName}</h2>
                <table className="e-table">
                    <thead>
                        <tr>
                            <th scope="col">{columnTitles[0]}</th>
                            <th scope="col">{columnTitles[1]}</th>
                            <th scope="col">{columnTitles[2]}</th>
                            <th scope="col">{columnTitles[3]}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {consoles.map((console: Consoles) => (
                            <tr className='table-row' key={console.id}>
                                <td className='table-col'>{console.id}</td>
                                <td>{console.title}</td>
                                <td>{console.type}</td>
                                <td>{console.teraflops}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
    
}