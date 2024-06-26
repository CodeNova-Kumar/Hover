import React from 'react'
import "./Notfound.css";

const Notfound = () => {
  return (
    <div><>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Document</title>
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="col-sm-10 col-sm-offset-1 text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center">404</h1>
              </div>
              <div className="content_box_404">
                <h3 className="h2">Looks Like You're Lost</h3>
                <p>The page you are looking for not available</p>
                <a href="Home">Go to Home</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  </div>
  )
}

export default Notfound