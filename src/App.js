import { useState } from 'react';
import './index.css'


function App() {
  const [data, setData] = useState({
    userName: "",
    dept: "",
    rate: "",
  })
  const [collect, collectData] = useState([])
  const [next, setNext] = useState(false);

  const userHandler = (u) => {
    const name = u.target.name;
    const value = u.target.value;
    console.log(name, value);
    setData({ ...data, [name]: value })
   
  }
  const submitHandler = (us) => {
    us.preventDefault()
    // console.log(data);
    const newRecord = { ...data, id: new Date().getTime().toString() }
    console.log(newRecord)
    collectData([...collect, newRecord])
    console.log(collect)
    setData({ userName: " ", dept: " ", rate: " " })
    setNext(true);
  }
  const back = () => {
    setNext(false);

  }
  return (
    <div className='container'>
      {next ? null :
        <form action="" onSubmit={submitHandler}>


          <h1>EMPLOYEE FEEDBACK FORM</h1>
          
          <div className="sub_container">
          <label>Name : </label>
          <input className='input_ctn' type="text" name="userName" value={data.userName} onChange={userHandler} />
          </div>
          <div className="sub_container">
          <label>Department : </label>
          <input className='input_ctn'  type="text" name="dept" value={data.dept} onChange={userHandler} />
          </div>
          <div className="sub_container">
          <label>Rating : </label>
          <input className='input_ctn'  type="text" name="rate" value={data.rate} onChange={userHandler} />
          </div> 
          <input className="submit_ctn" type="submit" />
        </form>}
      {next ?
        <div>
<br/><br/>

          <h1>EMPLOYEE FEEDBACK DATA</h1>
<br/><br/>
          <div className="box_ctn">

            {
              collect.map((ele) => {
                let { id, userName, dept, rate } = ele
                return (
                  <div className="subbox" key={id}>
                    Name:{userName}| Department :{dept} | Rating :{rate}
                  </div>
                )
              })
            }
          </div>

{next?<input onClick={back} className="submit" type="button" value="Go Back"/>:null}
        </div>:null}
    </div>
  );
}

export default App;