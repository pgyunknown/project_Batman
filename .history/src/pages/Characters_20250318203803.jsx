import React, { useContext } from 'react'

const Characters = () => {
  const { Character } = useContext(CharDataContext);
  console.log(char)
  return (
    <div>
      {Character.map((i, n) => (
        <h1>{i.name}</h1>
      ))}
    </div>
  )
}

export default Characters