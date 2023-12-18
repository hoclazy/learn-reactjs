import logo from './logo.svg';
import './App.css';

function App() {
    const name = 'Học';
    const age = 28;
    const isMale = true;
    const student = {
        name: 'Easy Frontend'
    }
    const colorList = ['red', 'green', 'blue']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

          {/*render các thẻ*/}
        <p>Xin chào {isMale ? 'anh' : 'chị'} {name} - {age} tuổi - Giới tính: {isMale ? 'Nam' : 'Nữ'}</p>

{/*          render 1 thẻ theo 1 điều kiện
          {isMale ? <p>Female</p> : <p>male</p>}
          {isMale && <p>Female</p> }
          {!isMale && <p>male</p>}*/}


          {/*render nhiều thẻ theo 1 điều kiện*/}
          {isMale && (
              <>
                  <p>Quê quán: Yên Nhân, Ý Yên, Nam Định</p>
                  <p>Số điện thoại: 0335532246</p>
                  <p>Email: hoctd.dev@gmail.com</p>
              </>
          )}

          {/*render object (lưu ý k render được trực tiếp object mà render các thuộc tính của object)*/}
          <p>{student.name}</p>

          {/*render list*/}
          <ul>
              {colorList.map(color => (
                  <li key={color} style={{color}}>{color}</li>
              ))}
          </ul>
      </header>
    </div>
  );
}

export default App;
