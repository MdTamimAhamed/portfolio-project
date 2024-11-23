function BigTitle({ transparentTitle, title }) {
  return (
    <div className="relative mb-8">
      <div className=" text-9xl uppercase text-center font-black text-transTitle">
        {transparentTitle}
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-2xl font-medium">
        {title}
      </div>
    </div>
  );
}

export default BigTitle;
