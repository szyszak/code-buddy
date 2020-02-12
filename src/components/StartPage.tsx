import React, { useState } from 'react';
import Card from './Card';
import AddSnippetModal from './AddSnippetModal';
import styled from 'styled-components';
import useTypedSelector from '../hooks/useTypedSelector';

// STYLES
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const Header = styled.h2`
  margin: 20px;
  text-align: center;
  font-size: 26px;
`;

// COMPONENT
const StartPage: React.FC = () => {
  const snippets = useTypedSelector(state => state.snippets);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const links = snippets.map(({ title, language, id }) => (
    <Card title={title} language={language} id={id} key={id} />
  ));

  return (
    <main>
      <button onClick={() => setIsModalOpen(true)}>ADD NEW SNIPPET</button>

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
