import React from 'react';
import { saveAs } from 'file-saver';

export default function DownloadResume() {
    const saveFile = () => {
        saveAs(
            'Resume_Daniela_Damjanoska.pdf',
            'Resume_Daniela_Damjanoska.pdf'
        );
    };
    return (
        <>
            <button onClick={saveFile}>my Resume</button>
        </>
    );
}
