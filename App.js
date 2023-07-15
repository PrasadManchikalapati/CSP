import './App.css';
function Card(props){
  return <div className="shadow recycle-item-card p-3 m-5 col-3">
     <img src={props.res.img} class="recycle-item-image w-100" />
     <h1 className="recycle-card-title">{props.res.name}</h1>
     <a href="" style={{textDecoration:"none"}} className="recycle-item-link">
                       View More
         <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right-short" fill="#071952" xmlns="http://www.w3.org/2000/svg">
             <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
         </svg>
     </a>
 </div>
}

function App() {
  let array=[{
    name:'PETE',
    img: 'https://www.maxpack.co.uk/wp-content/uploads/2021/11/maxpack-Recycle-Resin-Codes-1-1.jpg'
  },
  {
    name:'HDPE',
    img: 'https://www.maxpack.co.uk/wp-content/uploads/2021/11/maxpack-Recycle-Resin-Codes-2.jpg'
  },
  {
    name:'PVC',
    img:"https://www.maxpack.co.uk/wp-content/uploads/2021/11/maxpack-Recycle-Resin-Codes-3.jpg"
  },
  {
    name:'LDPE',
    img:"https://www.maxpack.co.uk/wp-content/uploads/2021/11/maxpack-Recycle-Resin-Codes-4.jpg"
  },
  {
    name:'PP',
    img:"https://www.maxpack.co.uk/wp-content/uploads/2021/11/maxpack-Recycle-Resin-Codes-5.jpg"
  },
  {
    name:'PS',
    img:"https://www.maxpack.co.uk/wp-content/uploads/2021/11/maxpack-Recycle-Resin-Codes-6.jpg"
  },
  {
    name:'Other',
    img:"https://www.maxpack.co.uk/wp-content/uploads/2021/11/maxpack-Recycle-Resin-Codes-7.jpg"
  }
  ]
  return (
    <div className="recycle-bg">
    <h1 className="pt-5 pl-5 recycle-card-heading"><b>Types Of Plastic Identification Codes</b></h1>
    <div className="row">
    {array.map((res) => <Card res={res} />)}
    </div>
      
    </div>
  );
}

export default App;
