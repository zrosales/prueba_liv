import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import EmpNew from '../pages/EmpNew';
import EmpEdit from '../pages/EmpEdit';
import EmpDetails from '../pages/EmpDetailsContainer';
import Emps from '../pages/Emps';

function App(){ 
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/emps" component={Emps} />
                    <Route exact path="/emps/new" component={EmpNew} />
                    <Route exact path="/emps/:empId" component={EmpDetails} />
                    <Route exact path="/emps/:empId/edit" component={EmpEdit} />
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}
    
export default App;