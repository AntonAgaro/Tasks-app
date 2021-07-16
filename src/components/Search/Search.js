import React from 'react';
import './Search.scss';
import search from './image/search.svg';

const Search = () => {  
    const searchTask = (event) => {
        const tasks = document.querySelectorAll('.tasks__list-item');
        if (tasks) {
            tasks.forEach(item => {
                if (item.textContent.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            })
        }
    }

        return (
            <div className="search">
                    <img className="search__img" src={search} alt="search" />
                    <input 
                        className="search__input" 
                        type="text" 
                        placeholder="Search for any task you want " 
                        onChange={searchTask}
                    />
            </div>
        );
}


export default Search;