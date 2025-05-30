
import Goback from '@/components/Goback'
import React from 'react'

const UserDetail = ({params}) => {
    // const {userId} = userParams() bu client component icin
    // burada userId koseli dosya ismi ile ayni olmali
    const {userId} = params // bu server component icin
  return (
    <div>
        <h1 className='text-2xl text-center'>User details</h1>
        <p>user - {userId}</p>
        <Goback></Goback>
    </div>
  )
}

// userId ile olusan sayfalar dinamik sayfalardir. bunu static hale getirebiliriz generateStaticParam ile

export async function generateStaticParam() {
    const userArr = [1,2,3,4];
    return userArr.map((userId)=> ({userId: userId.toString()}))
}

export default UserDetail