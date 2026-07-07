import "./userProfile.css";
import style from "./userProfile.module.css";
//traditionally == html page but in react=== component
const App = () => {
  //Inline style object for the container
  const containerStyle = {
    textAlign: "center",
    margin: "20px auto",
  };
  return (
    // styling with css
    // <div style={containerStyle}>
    //   <img
    //     src="https://cdn.pixabay.com/photo/2025/03/07/15/17/goose-9453257_1280.jpg "
    //     alt="avatar"
    //     // applying inline style directly
    //     style={{
    //       width: "150px",
    //       height: "150px",
    //       borderRadius: "50%",
    //       objectFit: "cover",
    //     }}
    //   ></img>
    //   <h2 className="name"> Emmanual Tweneboah</h2>
    //   <p className="bio">Fullstack web developer | React Enthusiast</p>
    //   <ul className={style.hobbies}>
    //     <li className={style.hobby}>Coding</li>
    //     <li className={style.hobby}>Reading</li>
    //     <li className={style.hobby}>Traveling</li>
    //   </ul>
    // </div>

    //tailwind css
    //   <h1 className="text-3xl text-red-800 font-bold underline">Hello world!</h1>

    //bootstrap css
    <div>
      <div className="alert alert-primary" role="alert">
        A simple primary alert—check it out!
      </div>
      <div className="alert alert-secondary" role="alert">
        A simple secondary alert—check it out!
      </div>
      <div className="alert alert-success" role="alert">
        A simple success alert—check it out!
      </div>
      <div className="alert alert-danger" role="alert">
        A simple danger alert—check it out!
      </div>
      <div className="alert alert-warning" role="alert">
        A simple warning alert—check it out!
      </div>
      <div className="alert alert-info" role="alert">
        A simple info alert—check it out!
      </div>
      <div className="alert alert-light" role="alert">
        A simple light alert—check it out!
      </div>
      <div className="alert alert-dark" role="alert">
        A simple dark alert—check it out!
      </div>
    </div>
  );
};

export default App;
