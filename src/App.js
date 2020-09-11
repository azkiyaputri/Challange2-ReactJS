import React from 'react';
import Card from "./Components/Card"
import Konversi from "./Page/Konversi"


class App extends React.Component{
  render(){
    return(
      // <div className="container">
      //   <Card title="Azkiya putri" tipe="danger">
      //     <strong>Azkiya putri adalah siswa yang cerdas</strong>
      //     <button className="btn btn-primary"> Ini tombol</button>
      //   </Card>
      //   <Card title="kiya kalen" tipe="warning">
      //     <u>Kiya berasal dari ambulu</u>
      //     <button className="btn btn-danger">Click Me</button>
      //   </Card>

      //   <p align="center">
      //     ini paragraf {/* ini elemen children dari p */}
      //   </p>
      //   {/* p itu adalah nama komponen, align itu adalah properti dari komponen */}


      //   <Konversi />
      // </div>
      
       <Konversi />
      
    )
  }
}
export default App;