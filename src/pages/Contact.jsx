export default function Contact() {
  return (
    <section className="px-5 pt-6 pb-10 sm:px-7 xl:px-10">
      <h2 className="mb-8 font-bold sm:text-lg lg:mb-14 xl:text-2xl 2xl:mb-12">
        Contact Us
      </h2>

      <div className="flex flex-col gap-10 sm:w-5/6 md:w-3/4">
        <div>
          <p className="text-sm text-gray-800 leading-normal mb-4 sm:text-base xl:text-xl">
            If you have any questions, concerns, or need assistance, our
            dedicated support team is here to help. Feel free to reach out to us
            via:
          </p>

          <a
            href="mailto:swiftcart@gmail.com"
            className="text-sm block text-gray-800 leading-normal sm:text-base xl:text-xl"
          >
            - <strong>Email:</strong> swiftcart@gmail.com
          </a>
          <a
            href="tel:+2348123456789"
            className="text-sm block text-gray-800 leading-normal sm:text-base xl:text-xl"
          >
            - <strong>Phone:</strong> +2348123456789
          </a>
        </div>

        <div>
          <h4 className="mb-2 xl:text-2xl">Connect On Social Media</h4>
          <p className="text-sm text-gray-800 leading-normal mb-4 sm:text-base xl:text-xl">
            Stay updated and join the conversation! Connect with us on social
            media for the latest news, promotions, and more:
          </p>
          <a
            href="#"
            className="text-sm block text-gray-800 leading-normal sm:text-base xl:text-xl"
          >
            - Facebook
          </a>
          <a
            href="#"
            className="text-sm block text-gray-800 leading-normal sm:text-base xl:text-xl"
          >
            - Instagram
          </a>
          <a
            href="#"
            className="text-sm block text-gray-800 leading-normal sm:text-base xl:text-xl"
          >
            - Whatsapp
          </a>
        </div>

        <div>
          <h4 className="mb-2 xl:text-2xl">Hours of Operations</h4>
          <li className="text-sm block text-gray-800 leading-normal list-none sm:text-base xl:text-xl">
            Monday to Friday: 9:00 AM - 6:00 PM
          </li>
          <li className="text-sm block text-gray-800 leading-normal list-none sm:text-base xl:text-xl">
            Saturday: 10:00 AM - 3:00 PM
          </li>
        </div>
      </div>
    </section>
  );
}
