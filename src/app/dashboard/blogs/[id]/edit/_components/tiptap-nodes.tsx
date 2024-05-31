import { Tabs, TabsList } from '@/components/ui/tabs';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';
import { type Editor } from '@tiptap/react';
import { ElementRef, useRef } from 'react';
import { IoMdImage } from 'react-icons/io';
import { IoCodeSlashOutline } from 'react-icons/io5';
import { LuHeading1, LuHeading2, LuHeading3, LuHeading4, LuHeading5 } from 'react-icons/lu';
import { MdFormatBold } from 'react-icons/md';
import { RiDoubleQuotesL } from 'react-icons/ri';
import useTiptapEditor from '../_hooks/useTiptapEditor';
import TiptapNode from './tiptap-node';

type TiptapNodesProps = {
  editor: Editor;
};

const TiptapNodes = ({ editor }: TiptapNodesProps) => {
  const { handleAddImage } = useTiptapEditor(editor);

  const tabsRef = useRef<ElementRef<'div'>>(null);
  const isInView = useIntersectionObserver(tabsRef);

  return (
    <>
      <div ref={tabsRef} className='h-5' />
      <Tabs
        className={cn('flex flex-wrap items-center gap-2', {
          'sticky top-1 z-20': !isInView,
        })}
      >
        <TiptapNode
          icon={MdFormatBold}
          onClick={() => editor.chain().focus().toggleBold().run()}
          isActive={editor.isActive('bold')}
        />
        <TiptapNode
          icon={RiDoubleQuotesL}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          isActive={editor.isActive('blockquote')}
        />
        <TiptapNode
          icon={IoCodeSlashOutline}
          onClick={() => editor.chain().focus().setCodeBlock().run()}
          isActive={editor.isActive('codeblocklowlight')}
        />
        <TabsList className='overflow-hidden border shadow-md'>
          <TiptapNode
            className='border-0 shadow-none'
            icon={LuHeading1}
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            isActive={editor.isActive('heading', { level: 1 })}
          />
          <TiptapNode
            className='border-0 shadow-none'
            icon={LuHeading2}
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            isActive={editor.isActive('heading', { level: 2 })}
          />
          <TiptapNode
            className='border-0 shadow-none'
            icon={LuHeading3}
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            isActive={editor.isActive('heading', { level: 3 })}
          />
          <TiptapNode
            className='border-0 shadow-none'
            icon={LuHeading4}
            onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
            isActive={editor.isActive('heading', { level: 4 })}
          />
          <TiptapNode
            className='border-0 shadow-none'
            icon={LuHeading5}
            onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
            isActive={editor.isActive('heading', { level: 5 })}
          />
        </TabsList>
        <TiptapNode icon={IoMdImage} onClick={handleAddImage} isActive={false} />
      </Tabs>
    </>
  );
};

export default TiptapNodes;
