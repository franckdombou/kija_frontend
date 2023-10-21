import React from 'react'
import Categorie from '../scenes/global/Categorie'
import Features from '../scenes/global/Features'
import Explore from '../scenes/global/Explore'
import SocialMedia from '../scenes/global/SocialMedia'
import Suscribe from '../scenes/global/Suscribe'

function Acceuil() {
  return (
    <div>
       <Categorie /> 
       <Features categorie={"Personal Computer"} />
       <Features categorie={"Phones"} />
       <Features categorie={"Apple Watch"} />
       <Explore />
       <SocialMedia />
       <Suscribe />
    </div>
  )
}

export default Acceuil