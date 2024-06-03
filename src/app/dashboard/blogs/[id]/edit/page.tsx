import BlogNameEditor from './_components/blog-name-editor';
import BlogSave from './_components/blog-save';
import ImageSelector from './_components/thumbnail-selector';
import TiptapEditor from './_components/tiptap-editor';

export default function BlogEditorPage() {
  return (
    <div className='relative mx-auto flex max-w-[80%] flex-col py-5'>
      <ImageSelector imageSrc='https://statics.cdn.200lab.io/2023/06/interface-trong-golang-cach-dung-chinh-xac-2.jpg?width=500' />
      <BlogNameEditor className='mt-4' />
      <TiptapEditor />
      <BlogSave />
    </div>
  );
}
