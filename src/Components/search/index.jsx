import React from 'react'
import { Select } from 'antd';
import './style.scss'

const { Option } = Select;

function Search() {
    return (
        <div className="search">
               <div className="search__main">
                   <input type="text" placeholder="Buscar"/>
                </div>        
                <div className="search__program">
                    <Select defaultValue="Programa de Especialización" className="search__order--select" style={{ width: 280, }} >
                        <Option value="option1">option1</Option>
                        <Option value="option2">option2</Option>                      
                        <Option value="option3">option3</Option>
                    </Select>
                </div>
                <div className="search__order">
                <Select defaultValue="Ordenar por" className="search__order--select" style={{ width: 280 }} >
                        <Option value="option1">option1</Option>
                        <Option value="option2">option2</Option>                      
                        <Option value="option3">option3</Option>
                    </Select>
                </div>
        </div>
    )
}
 
export default Search
