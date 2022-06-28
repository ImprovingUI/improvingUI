import React, {FC, ChangeEvent, useState} from 'react';

export interface InputProps {
    initial?: any,
    setInitial?: any,
    listRows?: Object[],
    listColumns: any,
    setInitialFilter: any,
    listIndex: any
}

export const InputFilter: FC<InputProps> =({initial,setInitial, listRows=[], listColumns=[], setInitialFilter, listIndex=[]}) => {
    const [filter, setFilter] = useState('');
    const [option, setOption] = useState('all');
    const [temp, setTemp] = useState([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
        if(e.target.value.length === 0){
            setInitial(temp);
            setTemp([]);
            setInitialFilter(listRows);
        }else{
            if(e.target.value.length === 1 && temp.length === 0){
                setTemp(initial);
            }
            if(option === 'all'){
                const filteredRows = listRows.filter((row:Object)=> {
                    let values = Object.values(row);
                    for(let i = 0; i < values.length; i++){
                        if(listIndex.some((element:number) => element !== i) && values[i].toString().toLowerCase().includes(e.target.value.toLowerCase())){
                            return true;
                        }
                        
                    }
                    return false;
                })
                setInitialFilter(filteredRows);
                setInitial(filteredRows);
            }else{
                const filteredRows = listRows.filter((row: any) => {
                    const data = row[option];

                    if( data.toString().toLowerCase().includes(e.target.value.toLowerCase())){
                        return true;
                    }
                    
                    return false;
                })
                setInitialFilter(filteredRows);
                setInitial(filteredRows);
            }
        }
    }

    return(
        <div>
            {listRows.length > 0
                ?<div>
                    <input type = "text" value={filter} onChange={handleChange}/>
                    <select value={option} onChange={e => setOption(e.target.value)}>
                        <option value="all">All</option>
                        {listColumns.length > 0 && listColumns.map((column: string, index: number) => (
                            <option value={Object.keys(listRows[0])[index]}>{column}</option>
                        ))

                        } 
                    </select> 
                </div>
                :null
            }
        </div>
    )
} 