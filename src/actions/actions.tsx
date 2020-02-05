export const saveEditorValue = (payload: string, id: string) => {
  return {
    type: 'snippets/changeValue',
    payload,
    id,
  };
};
