import React from 'react'

export default function profiles({Leaderboard}) {
    return (
        <div id='profile'>
            {item(Leaderboard)}
        </div>
    )
}

function item(data) {
    return (
        <>
            {
                data.map((value, index) => (
                    <div className='flex' key={index}>
                        <div className='item'>
                            <div className='info'>
                                <h3 className='name text-dark'>{value.userName}</h3>
                            </div>
                        </div>
                        <div className='item'>
                            <span>{value.userScore}</span>
                        </div>
                    </div>
                ))
            }

        </>

    )
}