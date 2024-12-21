import React from 'react'

const Watches = () => {
  const watcheData = [
    {id: 1, name:'Rolex', price:10000, description: 'Luxury watch' ,image: '/rolex (1).jpg'},
    {id: 2, name:'Omega', price:8000, description: 'Sporty design' ,image: '/omega.jpg'},
    {id: 3, name:'Seiko', price:1000, description: 'Affordable and reliable' ,image: '/seiko.jpg'},
    {id: 4, name:'Tag Heuer', price:5000, description: 'Sporty and Stylish' ,image: '/tag heure.jpg'},
    {id: 5, name:'Audemars Piguet Automatic', price:7000, description: 'Bold and rugged' ,image: '/ausmarse piguet.jpg'},
    {id:6, name:'Patek Philippe', price:25000, description:'Elegent timepiece', image: '/patek philippe.jpg'}
  ]
  return (
    <div>
      <div className="watches">
        {watcheData.map((watch) => (

           <div key={watch.id} className="watch-card">
            <img src={watch.image} alt={watch.name} />
            <h3>{watch.name}</h3>
            <p>{watch.description}</p>
            <div className="price">${watch.price}</div>
            <button>Add to Cart</button>

           </div>
        ))}
      </div>
    </div>
  )
}

export default Watches
