import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
  return <Router>
    <Routes>  {/* URL주소를 찾는 것 */}
      <Route path='/react-for-beginners' element={<Home/>}/> {/* URL주소를 지정하는 것 */}
      <Route path='/movie/:id' element={<Detail/>}/> {/* URL의 파라미터는 반드시 ':'기호를 앞에 넣어줄 것 */}
      <Route path='/hello' element={<h1>Hello</h1>}/>
    </Routes>
  </Router>;
}

export default App;
