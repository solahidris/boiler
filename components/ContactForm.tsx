import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || 'zero-default-form-id');
  
  if (state.succeeded) {
    return <p className="text-green-500 text-center border border-gray-300 rounded p-4">Thanks for your feedback!</p>;
  }

  return (
    <div className="w-full mx-auto p-4 border border-gray-200 rounded-lg ">
      <h2 className="text-lg font-semibold pb-4">Feedback Form</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="mb-4">
          <label className="font-semibold text-[12px]" htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            className="w-full text-xs p-2 border border-gray-300 rounded"
            placeholder="miketyson@gmail.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="mb-4">
          <label className="font-semibold text-[12px]" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="w-full min-h-[70px] text-xs p-2 border border-gray-300 rounded"
            placeholder="I have a suggestion or a complaint, or I like this specific feature."
          ></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="bg-black text-xs text-white px-4 py-2 rounded cursor-pointer"
        >
          Submit
        </button>
        <ValidationError errors={state.errors} />
      </form>
    </div>
  );
};

export default ContactForm;