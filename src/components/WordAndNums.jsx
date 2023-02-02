import React from 'react';
import { useParams } from 'react-router-dom';

const WordAndNums = (props) => {
    const { wordornum , color, backgroundColor } = useParams();
    return (
        <div>
            {
                isNaN(wordornum)?
                <p style={color?{color: color, background: backgroundColor}:null}>The Word is: { wordornum }</p>
                :
                <p>The Number is: { wordornum }</p>
            }
        </div>
    );
}

export default WordAndNums;
