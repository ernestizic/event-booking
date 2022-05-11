import React, { useContext } from 'react';
import QRCode from 'react-qr-code';
import { QrCodeContext } from '../../contexts/QrCodeContext';
import { TicketScreenContainer } from './TicketScreen.styled';

const TicketScreen = () => {
    const {userDetails} = useContext(QrCodeContext)
    let userDetail = JSON.stringify(userDetails)

	return (
		<TicketScreenContainer>
            <QRCode value={userDetail? userDetail : 'user'} />
            <p>{userDetails.name}</p>
            <button onClick={()=> window.print()}>Print ticket</button>
		</TicketScreenContainer>
	);
};

export default TicketScreen;
