import styled from 'styled-components';
import { SearchBox, SearchInput, ProfileImage } from './ContactListComponent';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    background: #f8f9fb;
    flex: 3;
`;

const ProfileHeader = styled.div`
    display: flex;
    flex-direction: row;
    background: #ededed;
    padding: 10px;
    align-items: center;
    gap: 10px;
`;

const ChatBox = styled.div`
    display: flex;
    background: #f0f0f0;
    padding: 10px;
    align-items: center;
    bottom: 0;
`;

const ConversationComponent = () => {
    return (
        <Container>
            <ProfileHeader>
                <ProfileImage src='/profile/sundarPichai.jpg' />
                Shantanu Narayan
            </ProfileHeader>
            <ChatBox>
                <SearchBox>
                    <SearchInput placeholder='Type a message' />
                </SearchBox>
            </ChatBox>
        </Container>
    );
}

export default ConversationComponent;