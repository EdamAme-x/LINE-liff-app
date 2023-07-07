import { Head } from "$fresh/runtime.ts";
import liff from "@sky-liff";

import { useRef, useEffect } from "preact/hooks";

export default function Home() {
  let inputRef = useRef<HTMLInputElement>(null);
  let liffId = "";

  useEffect(() => {
    liff
      .init({
        liffId: liffId,
      })
      .then(() => {
        getProfile();
      })
      .catch((err) => {
        alert(err);
      })
      .then(() => {
        alert("起動しました。");
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  function SendMessage() {
    if (inputRef.current) {
      liff.sendMessages([{ type: "text", text: inputRef.current.value }]);
      alert("送信しました。");
      inputRef.current.value = "ok";
    }
  }

  return (
    <>
      <Head>
        <title>LINE-Tool-Kit</title>
        <meta name="description" content="LINE-Tool-Kit by @macl2189 / amex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>LINE-Tool-Kit</h1>
        <p>Test: SendMessage</p>
        <input
          type="text"
          class="border"
          placeholder="Message"
          ref={inputRef}
        />
        <button class="px-2 py-1 border-gray-500 border-2 rounded bg-white hover:bg-gray-200 transition-colors">
          Send
        </button>
        <p>LINE-Tool-Kit by @macl2189 / amex</p>
      </div>
    </>
  );
}
