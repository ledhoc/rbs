"use client";

import Button from "@/components/Button";
type Tag = {
  id: string;
  title: string;
};

type Props = {
  list: Tag[];
  selectedId: string;
  onClick: (id: string) => void;
};

export default function SelectTags({ list = [], selectedId, onClick }: Props) {
  const onClickTag = (id) => {
    onClick(id);
  };
  return (
    <div className="flex w-full">
      {list.map((tag) => (
        <div key={tag.id} className={` mr-4 flex flex-row`}>
          <Button
            id={tag.id}
            colorClass={
              tag.id === selectedId
                ? undefined
                : "border-[1px] border-primary hover:bg-primary/65"
            }
            key={tag.id}
            title={tag.title}
            onClick={onClickTag}
          />
        </div>
      ))}
    </div>
  );
}
