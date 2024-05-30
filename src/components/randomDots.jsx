import React, { useEffect } from 'react';
import '../index.css';

const RandomDots = () => {
    useEffect(() => {
        const numDots = 100;
        const body = document.body;
        const width = window.innerWidth;
        const height = window.innerHeight;

        for (let i = 0; i < numDots; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            dot.style.width = dot.style.height = `${Math.random() * 10}px`;
            dot.style.left = `${Math.random() * width}px`;
            dot.style.top = `${Math.random() * height}px`;
            body.appendChild(dot);
        }
    }, []);

    return null;
};

export default RandomDots;
