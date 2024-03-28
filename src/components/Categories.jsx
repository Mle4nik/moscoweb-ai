import React from 'react';

export default function Categories() {
    return (
        <>
            <div className='flex'>
                <div className='text-7xl font-bold '></div>
                <ul className=' border-solid border-gray-500'>
                    <li className='border-y p-14'>Одежда/Обувь</li>
                    <li className='border-y p-14'>Техника </li>
                    <li className='border-y p-14'>Общепит</li>
                    <li className='border-y p-14'>Медиа</li>
                    <li className='border-y p-14'>Услуги</li>
                </ul>
            </div>
        </>
    );
}
