import React, { useState } from 'react';
import { toast } from 'react-toastify';
import CopyToClipboard from 'react-copy-to-clipboard';

import './Card.css'

const MyCard = ({ imageUrl, description, url }) => {
    // const [isCopied, setIsCopied] = useState(true);

    const handleCopyClick = () => {
        
        // setIsCopied(false);
        setTimeout(() => {
            // setIsCopied(false);
        }, 1000);
        // if (isCopied) {
            toast.success('🦄 Copied To Clipboard!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        // }

    };

    return (
        <section>
            <div className='card'>
                <img src={imageUrl} alt={description} />

                <p>Description : {description}</p>
                <div>
                    <p>URL: <br/> {url}  </p>
                
                    {/* <p>{isCopied ? 'Copied To Clipboard!' : ''}</p> */}

                    <CopyToClipboard text={url} onCopy={handleCopyClick}>
                        <button>Copy URL  </button>
                    </CopyToClipboard>
                </div>

            </div>

        </section>
    );
};

export default MyCard;
