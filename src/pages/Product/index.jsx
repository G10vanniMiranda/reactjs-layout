import "./Product.css"
export function Product(){
    return(
        <div className="body-Product">
            <section className="section-image"></section>
            <section className="section-card">
                
                <nav className="card-item">
                    <h3>Aula 1</h3>
                    <img  src="https://1.bp.blogspot.com/-v9hlfIXIXkc/XhDO6IvdC_I/AAAAAAAANfI/duPrIrwP_r8F-_DnpnQ-IaFDSvC_SBZcACLcBGAsYHQ/s200/1417589451_html-256.png" alt="imagem aula 1" />
                    <h4>Html5</h4>
                    <p>Fundamentos inicial</p>
                </nav>

                <nav className="card-item">
                    <h3>Aula 2</h3>
                    <img  src="https://blog.4linux.com.br/wp-content/uploads/2018/03/aprender-html5-e-css3.jpg" alt="imagem aula 2" />
                    <h4>CSS3</h4>
                    <p>Fundamentos inicial</p>
                </nav>

                <nav className="card-item">
                    <h3>Aula 3</h3>
                    <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHnJDLOcdm_0b6N6kNj-1OvO9KhKYgqIy0w&s" alt="imagem aula 3" />
                    <h4>JavaScript</h4>
                    <p>Fundamentos inicial</p>
                </nav>

                <nav className="card-item">
                    <h3>Aula 4</h3>
                    <img  src="./image/reactjs.png" alt="imagem aula 4" />
                    <h4>React</h4>
                    <p>Fundamentos inicial</p>
                </nav>

                <nav className="card-item">
                    <h3>Aula 5</h3>
                    <img  src="./image/api.png" alt="imagem aula 5" />
                    <h4>API</h4>
                    <p>Fundamentos inicial</p>
                </nav>

            </section>
        </div>
    )
}