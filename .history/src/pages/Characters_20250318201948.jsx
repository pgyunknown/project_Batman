import React, { useContext } from 'react'
import { CharDataContext } from '../data/CharContextData'

const Characters = () => {
  const {char}=useContext(CharDataProvider)
  return (
    <CharDataContext>

    </CharDataContext>
  )
}

export default Characters