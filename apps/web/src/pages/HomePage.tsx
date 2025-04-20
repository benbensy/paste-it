import { client } from "@/utils/client";
import { FormEvent, useState } from "react";

export default function HomePage() {
  const { data, refetch } = client.pastebin.getPastebinList.useQuery([
    "getPastebinList",
  ]);

  const { mutateAsync } = client.pastebin.createPastebin.useMutation({
    onSuccess() {
      refetch()
    },
  });

  const [formValues, setFormValues] = useState({
    title: "",
    content: "",
  });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    await mutateAsync({
      body: formValues,
    });
  }

  return (
    <div className="flex flex-col items-center w-full p-4 gap-8">
      <form
        className="grid grid-cols-1 gap-4 border-2 border-black p-4"
        action="#"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl">添加 pastebin</h2>
        <hr />
        <label className="flex flex-row gap-2">
          <span>标题</span>
          <input
            className="border-2 border-black px-2 rounded"
            value={formValues.title}
            onChange={(e) =>
              setFormValues((value) => ({
                ...value,
                title: e.target.value,
              }))
            }
          />
        </label>
        <label className="flex flex-row gap-2">
          <span>内容</span>
          <textarea
            className="border-2 border-black px-2 rounded"
            value={formValues.content}
            onChange={(e) =>
              setFormValues((value) => ({
                ...value,
                content: e.target.value,
              }))
            }
          />
        </label>
        <button className="border-2 border-black px-2 rounded">提交</button>
      </form>
      <div className="flex flex-col gap-4">
        {data?.body.map((item) => (
          <div className="flex flex-row gap-4 border-2 border-black p-4" key={item.id}>
            <div>{item.id}</div>
            <div>{item.title}</div>
            <div>{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
