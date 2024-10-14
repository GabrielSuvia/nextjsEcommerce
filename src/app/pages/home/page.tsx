import React from "react"
import img2 from "../../../assets/imagenes/img2.jpg"

const Home: React.FC = ()=>{

return (<>

<div className="d-flex flex-column align-items-center justify-content-center" style={{background:'lightblue'}} >

<h1 className="mb-4">the best products of the world</h1>
<div className="col-md-4 text-center">
<img src={img2.src} alt="imgProducts" className="img-fluid mb-4" />
<p className="mb-4">Las plataformas digitales han dado el poder a los clientes, quienes se expresan 
    libremente y con un alcance global a través de sus testimonios y valoraciones sobre
     los productos que consumen y las marcas con las que se relacionan. Lo que ellos digan
      sobre tu empresa puede ser más potente que tu campaña de marketing más costosa para
       intentar atraerlos</p>
       </div>

       <div className="col-md-4 text-center">
       <img src={img2.src} alt="imgProducts" className="img-fluid mb-4"/>
<p className="mb-4">Las plataformas digitales han dado el poder a los clientes, quienes se expresan 
    libremente y con un alcance global a través de sus testimonios y valoraciones sobre
     los productos que consumen y las marcas con las que se relacionan. Lo que ellos digan
      sobre tu empresa puede ser más potente que tu campaña de marketing más costosa para
       intentar atraerlos</p>
       </div>
</div>

</>)


}
export default Home;
