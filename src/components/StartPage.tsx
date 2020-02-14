import React, { useState, useEffect } from 'react';
import Card from './Card';
import AddSnippetModal from './AddSnippetModal';
import styled from 'styled-components';
import useTypedSelector from '../hooks/useTypedSelector';

// STYLES
const Wrapper = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-auto-rows: 1fr;
`;

const Header = styled.h2`
  margin: 20px;
  text-align: center;
  font-size: 26px;
`;

const Button = styled.button`
  padding: 10px 24px;
  background-color: ${props => props.theme.green};
  color: ${props => props.theme.fontColor};
  border: solid 1px ${props => props.theme.fontColor};
`;

// COMPONENT
const StartPage: React.FC = () => {
  const snippets = useTypedSelector(state => state.snippets);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.title = 'Code Buddy';
  });

  const links = snippets.map(({ title, language, id }) => (
    <Card title={title} language={language} id={id} key={id} />
  ));

  return (
    <main>
      <Button onClick={() => setIsModalOpen(true)}>ADD NEW SNIPPET</Button>

      {links.length > 0 ? (
        <>
          <Header>Avaliable snippets:</Header>
          <Wrapper>{links}</Wrapper>
        </>
      ) : (
        <Header>Snippet list is empty, add a new one!</Header>
      )}
      <AddSnippetModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </main>
  );
};

export default StartPage;
