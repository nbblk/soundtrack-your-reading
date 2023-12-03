"use client";
import { useState } from "react";
import { Editor, EditorState } from "react-draft-wysiwyg";
import { Button } from "../../components/shared";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function Write() {
  const [editorState, setEditorState] = useState(EditorState?.createEmpty());

  const onClickPublishButton = () => {
    console.log(editorState.getCurrentContent().getPlainText());
    // todo: send data to server
  };

  return (
    <section className="w-full h-screen p-8 flex justify-start items-start p-[40px]">
      <div className="w-full flex flex-col justify-start items-start gap-16">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-2xl font-bold">Write something...</h1>
          <Button
            type="button"
            size="md"
            value="Publish"
            onClick={onClickPublishButton}
            styles="md:w-auto px-8"
          />
        </div>
        <section className="w-1/2 h-screen">
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="h-2/3 border border-black"
            editorClassName="p-4"
            onEditorStateChange={setEditorState}
            placeholder="Jot down your thoughts here..."
          />
        </section>
        <section></section>
      </div>
    </section>
  );
}
