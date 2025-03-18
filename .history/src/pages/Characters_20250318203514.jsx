import React, { useContext } from 'react'

const Characters = () => {
  const { char } = useContext(CharDataContext);
  return (
    <div>Characters</div>
  )
}

export default Characters