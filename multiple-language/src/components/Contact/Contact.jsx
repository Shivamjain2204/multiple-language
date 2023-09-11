import React from 'react'
import {useTranslation} from 'react-i18next'
import i18next from 'i18next';

export default function Contact() {
    const {t} = useTranslation();
    return (
        
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800 ' >
            <h1 className='text-2xl text-center text-white my-3 text-orange-500'>
                {t('Hello')} , {t('Myself')}  {t('Shivam')}  {t('Jain')} 
            </h1>

            <h3 className='text-xl text-center text-white my-3 text-orange-500'>
                {t('Web')} {t('Developer')} 
            </h3>

            <h5 className='text-l text-center text-white my-3 text-orange-500'>
                {t('Contact')} {t('For')} {t('Query')}
            </h5>
        </div>
   
    );
}
