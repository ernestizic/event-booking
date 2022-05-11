import React, { createContext, useState, useEffect } from 'react';

export const QrCodeContext = createContext();

const QrCodeContextProvider =(props)=> {
    // State to store the input gotten from the form globally to be able to provide to other components
    const [userDetails, setUserDetails] = useState({});

    useEffect(() => {
      getUserDetailsFromForm()
    }, [])
    

    const getUserDetailsFromForm =(inputs)=> {
        setUserDetails(inputs)
    }

    return ( 
        <QrCodeContext.Provider value={{userDetails, getUserDetailsFromForm}}>
            {props.children}
        </QrCodeContext.Provider>
    );
}
export default QrCodeContextProvider;
