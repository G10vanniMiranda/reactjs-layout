import "./Login.css"

export function Login(){
    return(
        <div className="app-body">
      
      <section className="section-image"></section>

      <section className="section-form">
        <label>Username</label>
        <input type="text" placeholder="John" />

        <label>Password</label>
        <input type="password" placeholder="*******" />

        <button> Sign In</button>

        <p>Forget Password</p>
      </section>

    </div>
    )
}