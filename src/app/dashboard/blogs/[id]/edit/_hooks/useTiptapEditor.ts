import { Editor } from '@tiptap/react';
import { useCallback } from 'react';

const useTiptapEditor = (editor: Editor) => {
  const handleAddImage = useCallback(() => {
    const url = window.prompt('URL');

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  return { handleAddImage };
};

export default useTiptapEditor;
