export default function Login() {
  return (
    <section className="min-h-screen ">
      <form className="w-4/5 max-w-xl mx-auto mt-28 p-10 py-16 rounded shadow-xl flex flex-col gap-4 xl:gap-6">
        <h3 className="font-bold text-lg mb-4 lg:text-xl xl:text-2xl">
          Login to Admin Panel
        </h3>
        <label className="flex flex-col gap-1 lg:text-lg xl:text-xl">
          Email:
          <input
            type="email"
            name="email"
            required
            className="block border border-solid border-hero-desc h-8 p-2 focus:outline-none focus:border-2 xl:h-10"
          />
        </label>

        <label className="flex flex-col gap-1 lg:text-lg xl:text-xl">
          Password:
          <input
            type="password"
            name="password"
            required
            className="block border border-solid border-hero-desc h-8 p-2 focus:outline-none focus:border-2 xl:h-10"
          />
        </label>
        <input
          type="submit"
          value="Login"
          className="text-white bg-hero-desc cursor-pointer py-1 lg:text-lg xl:text-xl"
        />
      </form>
    </section>
  );
}
