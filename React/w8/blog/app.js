

import BlogList from './BlogList';
import Header from 'partials/header';

const App = (props) => {    
    return (
        <div>
            <Header title={"My Blog Valjda"}/>
            <BlogList items={postsData}/>
        </div>
    )

}

ReactDOM.render(<App />, document.getElementById('root'));

export default app;