import { SyncLoader } from "react-spinners";

export default function Loader() {
  return (
    <>
      <div className="fixed w-screen h-screen top-0 left-0 z-50 bg-emerald-500 flex justify-center items-center">
        <SyncLoader size={15} color="#fff" loading={true} />
      </div>
    </>
  );
}
