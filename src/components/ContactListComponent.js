import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background: #f8f9fb;
    flex: 1.6;
`;

const ProfileInfoDiv = styled.div`
    display: flex;
    flex-direction: row;
    background: #ededed;
    padding: 10px;
`;

export const ProfileImage = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
`;

export const SearchContainer = styled.div`
    display: flex;
    background: #f6f6f6;
    padding: 10px;
`;

export const SearchBox = styled.div`
    display: flex;
    flex-direction: row;
    background: white;
    border-radius: 16px;
    width: 100%;
    padding: 5px 10px;
`;

const SearchIcon = styled.img`
    width: 28px;
    height: 28px;
`;

export const SearchInput = styled.input`
    width: 100%;
    border: none;
    outline: none;
    font-size: 15px;
    margin-left: 10px;
`;

const ContactItem = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #f2f2f2;
    background: white;
    cursor: pointer;
    padding: 15px 12px;
`;

const ProfileIcon = styled(ProfileImage)`
    width: 38px;
    height: 38px;
`;

const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 12px;
`;

const ContactName = styled.span`
    width: 100%;
    font-size: 16px;
    color: black;
`;

const MessageText = styled.span`
    width: 100%;
    font-size: 14px;
`;

const MessageTime = styled.span`
    font-size: 12px;
    margin-right: 10px;
    color: rgba(0,0,0,0.45);
    white-space: nowrap;
`;

const ContactComponent = () => {
    return (
        <ContactItem>
            <ProfileIcon src='/profile/sundarPichai.jpg' />
            <ContactInfo>
                <ContactName>Shantanu Narayan</ContactName>
                <MessageText>Hey Adobe</MessageText>
            </ContactInfo>
            <MessageTime>12:30 PM</MessageTime>
        </ContactItem>
    );
}

const ContactListComponent = () => {
    return (
        <Container>
            <ProfileInfoDiv>
                <ProfileImage src='/profile/sundarPichai.jpg' />
            </ProfileInfoDiv>
            <SearchContainer>
                <SearchBox>
                    <SearchIcon src='/otherImages/icons8-search-30.png' />
                    <SearchInput placeholder='Search or start a new chat' />
                </SearchBox>
            </SearchContainer>
            <ContactComponent />
        </Container>
    );
}

export default ContactListComponent;