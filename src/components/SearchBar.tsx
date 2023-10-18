type SearchProps = {
    loadUser: (userName: string) => Promise<void>,
};
import style from './Searchmodule.css';

import { useState, KeyboardEvent } from 'react';

import { BsSearch } from 'react-icons/bs';

const SearchBar = ({ loadUser }: SearchProps) => {
    const [userName, setUserName] = useState("");

    const handleKeyDown = (e: KeyboardEvent) => {
        if(e.key === "Enter") {
            loadUser(userName);
        }
    };

    return (
        <div className={style.search}>
            <h2 className="searchTitle">Busqueda por usuario:</h2>
            <p>Conoce sus Repositorios</p>
            <div className="searchContainer">
                <input type="text" placeholder="Nombre de Usuario" onChange={(e) => setUserName(e.target.value)} onKeyDown={handleKeyDown} />
                <button onClick={() => loadUser(userName)}>
                    <BsSearch />
                </button>
            </div>
        </div>
    )
}
export default SearchBar;