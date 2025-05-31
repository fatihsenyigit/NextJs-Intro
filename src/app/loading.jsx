
import React from 'react';

//aplikasyonun herhangi bir yerinde gecikme olustugunda otomatik loading.js dosyasi render edilir.

const Loading = () => {
    return (
        <div className='text-center'>
            <div className='spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600 mt-52'>
                <span className='visually-hidden'>Loading . . .</span>
            </div>
        </div>
    )
}

export default Loading;
