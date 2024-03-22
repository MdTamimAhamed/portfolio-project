function FormInputHandler({ type, placeholderText, state, setState }) {
  return (
    <>
      <input
        className=" my-1 h-12 w-full rounded-xl border-[1px] border-deepNaviBlue/30 px-4 outline-none  dark:border-none dark:bg-white/5"
        type={type || "text"}
        placeholder={placeholderText}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </>
  );
}

export default FormInputHandler;
