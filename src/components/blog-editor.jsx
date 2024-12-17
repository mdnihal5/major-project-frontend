"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bold, Italic, List, ListOrdered } from "lucide-react";

export function BlogEditor({ content, onChange }) {
  const [selection, setSelection] = useState({ start: 0, end: 0 });

  const handleSelectionChange = () => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const preSelectionRange = range.cloneRange();
      preSelectionRange.selectNodeContents(document.getElementById("editor"));
      preSelectionRange.setEnd(range.startContainer, range.startOffset);
      const start = preSelectionRange.toString().length;
      setSelection({ start, end: start + range.toString().length });
    }
  };

  const applyStyle = (tag) => {
    const newContent =
      content.substring(0, selection.start) +
      `<${tag}>` +
      content.substring(selection.start, selection.end) +
      `</${tag}>` +
      content.substring(selection.end);
    onChange(newContent);
  };

  return (
    <div className="space-y-2">
      <div className="flex space-x-2">
        <Button size="sm" onClick={() => applyStyle("strong")}>
          <Bold className="w-4 h-4" />
        </Button>
        <Button size="sm" onClick={() => applyStyle("em")}>
          <Italic className="w-4 h-4" />
        </Button>
        <Button size="sm" onClick={() => applyStyle("ul")}>
          <List className="w-4 h-4" />
        </Button>
        <Button size="sm" onClick={() => applyStyle("ol")}>
          <ListOrdered className="w-4 h-4" />
        </Button>
      </div>
      <div
        id="editor"
        className="min-h-[200px] p-2 border rounded-md"
        contentEditable
        dangerouslySetInnerHTML={{ __html: content }}
        onInput={(e) => onChange(e.currentTarget.innerHTML)}
        onSelect={handleSelectionChange}
      />
    </div>
  );
}
