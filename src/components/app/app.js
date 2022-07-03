import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';


import './app.css'

function App(){
    const data = [
        {name:'Alex C' , salary: 800 , increase: true, id: 1},
        {name:'Konstantin' , salary: 3000 , increase: false, id: 2},
        {name:'Ivan' , salary: 5000, increase:true, id: 3},
    ];
    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            
            <EmployersList data = {data}/>
            <EmployersAddForm/>
        </div>
    );
}

export default App;