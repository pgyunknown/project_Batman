import React, { useContext } from 'react'

const Characters = () => {
  const { char } = useContext(CharDataContext);
  console.log(char)
  return (
    <div>
      {char.map((i, n) => (
        <h1>{i.name}</h1>
      ))}
    </div>
  )
}

export default Characters