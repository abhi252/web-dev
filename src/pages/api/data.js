import React from 'react'

export const getStaticProps = async () => {
    const resut = await fetch("https://fakestoreapi.com/products");
    const data = await resut.json();

    return {
        props : {
            ninjas : data
        }
    }
}

const data = ({ninjas}) => {
  return (
    <div>
     {ninjas.map(ninja => (
        <div key={ninja.id}>
            <h3>{ninja.title}</h3>
        </div>
  ))}
    </div>
  )
}

export default data
