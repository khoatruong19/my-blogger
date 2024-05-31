'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import Blockquote from '@tiptap/extension-blockquote';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Heading from '@tiptap/extension-heading';
import Bold from '@tiptap/extension-bold';
import Text from '@tiptap/extension-text';
import CodeBlock from '@tiptap/extension-code-block-lowlight';
import Image from '@tiptap/extension-image';
import TiptapNodes from './tiptap-nodes';
import { createLowlight } from 'lowlight';
import css from 'highlight.js/lib/languages/css';
import js from 'highlight.js/lib/languages/javascript';
import ts from 'highlight.js/lib/languages/typescript';
import go from 'highlight.js/lib/languages/go';
import html from 'highlight.js/lib/languages/xml';

const lowlight = createLowlight();

lowlight.register({
  html,
  css,
  js,
  ts,
  go,
});

const TiptapEditor = () => {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Blockquote,
      Image,
      Bold,
      CodeBlock.configure({
        lowlight,
      }),
      Heading.configure({
        levels: [1, 2, 3, 4, 5],
      }),
    ],
    content: `
    <h1>This is a 1st level heading</h1>
    <h2>This is a 2st level heading</h2>
    <h3>This is a 3st level heading</h3>
    <h4>This is a 4st level heading</h4>
    <h5>This is a 5st level heading</h5>
    <img src="https://source.unsplash.com/8xznAGy4HcY/800x400" />

    `,
    editorProps: {
      attributes: {
        class: 'min-h-[600px] focus:outline-none',
      },
    },
  });

  if (!editor) return null;

  return (
    <div className='mx-auto flex w-[80%] flex-col gap-5 font-sans'>
      <TiptapNodes editor={editor} />
      <EditorContent editor={editor} className='h-full' />
    </div>
  );
};

export default TiptapEditor;
