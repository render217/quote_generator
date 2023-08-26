import React from 'react'
import { Link } from 'react-router-dom';

export const QuoteCard = ({ quote, showAuthor = true }) => {

    const { quoteGenre, quoteAuthor, quoteText } = quote;
    return (
        <div className='max-w-lg mx-auto space-y-8 '>
            <div className='ps-8 border-l-4 border-amber-200 my-10'>
                <p className='text-xl '>{quoteText}</p>
            </div>
            {showAuthor && (
                <Link to={`/${quoteAuthor}`} className='p-8 flex justify-between items-center cursor-pointer duration-200 hover:bg-slate-800 hover:text-white'>
                    <div>
                        <p className='text-2xl font-semibold capitalize'>{quoteAuthor}</p>
                        <p className='text-sm font-light'>{quoteGenre}</p>
                    </div>
                    <div>
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </div>
                </Link>
            )}

        </div>
    )
}
