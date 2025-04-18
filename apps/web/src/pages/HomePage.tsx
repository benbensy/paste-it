import { client } from "@/utils/client";

export default function HomePage() {
  const { data, isLoading } = client.pastebin.getPastebin.useQuery(
    ["getPastebin"],
    { params: { id: "123" } }
  );
  return (
    <div>
      {
        isLoading ? (
          <div>Loading...</div>
        ) : (
          <div>{data?.body?.title}</div>
        )
      }
    </div>
  );
}
