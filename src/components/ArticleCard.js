import React from 'react'
import {getFormattedDate} from '../functions/getFormattedDate';

export default function ArticleCard({article}) {
    const date = getFormattedDate(article.date);
    return (
        <div>
            <p style={{fontSize: '25px',fontWeight: 'bold',color: '#000'}}>{article.title}</p>
            <pre style={{color: 'rgba(128,128,128,1)'}}>{date}</pre>
            <p style={{color: 'rgba(128,128,128,1)'}}> {article.content[0].substring(0,150)}...</p>
        </div>
    )
}