import React from 'react';

export default function Avatar({src = 'http://via.placeholder.com/230x230'}) {
    const styles = {
        maxWidth: '230px'
    };
    
    return (
        <img className = 'card-img' src = {src} style = {styles} alt = '' />
    );
};