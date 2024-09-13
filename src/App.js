import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="logo-box">
        <img src="./logo.png" alt="logo" className="logo" />
        <h2>sign In to Twitter</h2>
        <button>
          <img src="./google.png" alt="logo" />
          sign In with Google
        </button>
        <button>
          <img src="./apple.png" alt="logo" />
          sign In with Google
        </button>

        <hr></hr>
        <span>or</span>

        <form action="">
          <input type="text" placeholder="phone email or username" />
          <button>Next</button>
        </form>

        <button>Forget Password</button>
        <p>
          Don't Have an account <a>sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default App;
