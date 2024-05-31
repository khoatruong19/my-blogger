import TiptapEditor from './_components/tiptap-editor';
import ImageSelector from './_components/thumbnail-selector';

export default function BlogEditorPage() {
  return (
    <div className='mx-auto flex max-w-[80%] flex-col py-5'>
      <ImageSelector imageSrc='https://statics.cdn.200lab.io/2023/06/interface-trong-golang-cach-dung-chinh-xac-2.jpg?width=500' />
      <TiptapEditor />
    </div>
  );
}
