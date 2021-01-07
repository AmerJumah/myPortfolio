import React from 'react'
import { Route, Router } from 'react-router-dom';
import Header from './Header';
import Edu from './sections/edu/Edu';
import CreateEdu from './sections/edu/CreateEdu';
import Experience from './sections/experience/Experience';
import Info from './sections/info/Info';
import CreateInfo from './sections/info/CreateInfo'
import EditInfo from './sections/info/EditInfo'
import Home from './home/Home'
import Skills from './sections/skills/Skills';
import SkillsCreate from './sections/skills/SkillsCreate';
import SkillsEdit from './sections/skills/SkillsEdit';
import history from '../history'
import  EduEdit from './sections/edu/EduEdit';
import ExpCreate from './sections/experience/ExpCreate';
import ExpEdit from './sections/experience/ExpEdit';
import MyContacts from './home/contact/MyContacts';
import  Thanks  from './home/contact/Thanks';
import Footer from './home/Footer';



const App = ()=>{
    return(
        <>
        
        <Router history={history}>
            <div className='ui container'>
                <Header />

                <Route path='/' exact component={Home} />
                <Route path='/info' exact component={Info} />
                <Route path='/info/create' exact component={CreateInfo} />                  
                <Route path='/info/edit/:id' exact component={EditInfo} />                  
                <Route path='/education' exact component={Edu} />
                <Route path='/education/create' exact component={CreateEdu} />
                <Route path='/education/edit/:id' exact component={EduEdit} />
                <Route path='/experience' exact component={Experience} />
                <Route path='/experience/create' exact component={ExpCreate} />
                <Route path='/experience/edit/:id' exact component={ExpEdit} />
                <Route path='/skills' exact component={Skills} />
                <Route path='/skills/create' exact component={SkillsCreate} />
                <Route path='/skills/edit/:id' exact component={SkillsEdit} />
                <Route path='/thanks' exact component={Thanks} />
                <Route path='/my$contacts' exact component={MyContacts} />
            </div>
            <div className='ui hidden divider'></div>
            <Footer/>
        </Router>  
        
        </>

    )
}


export default App