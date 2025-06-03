const SubscribeForm = () => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="mt-4 flex w-full max-w-md overflow-hidden rounded-md border border-white lg:mt-6"
    >
      <input
        type="email"
        placeholder="Enter Email"
        className="w-full bg-transparent px-4 py-2 text-white placeholder-white outline-none"
        required
      />

      <button
        type="submit"
        className="cursor-pointer bg-white px-4 py-2 font-semibold text-black transition hover:bg-gray-200"
      >
        SUBSCRIBE
      </button>
    </form>
  );
};

export default SubscribeForm;
