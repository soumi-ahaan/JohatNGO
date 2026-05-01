import { useForm } from "react-hook-form";
import { submitDonationEntry } from "../../../Api/Api";

const DonationPopupForm = ({ isOpen, onClose, service }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

const onSubmit = async (data) => {
  try {
    const res = await submitDonationEntry(data);

    if (res.success) {
      alert("Saved in WordPress!");
      reset();
      onClose();
    }
  } catch (err) {
    console.log(err);
  }
};

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl w-full max-w-3xl p-10 relative shadow-xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-2xl text-gray-500 hover:text-black"
        >
          ✕
        </button>

        {/* 🔥 LOGO CENTER */}
        <div className="flex justify-center mb-4">
          <img
            src="/logo.png" // 👉 change with your logo path
            alt="logo"
            className="h-12 object-contain"
          />
        </div>

        {/* Heading */}
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 font-display">
          Donate for <span dangerouslySetInnerHTML={{ __html: service }} />
        </h3>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {/* Inputs */}
          <input
            {...register("first_name", { required: true })}
            placeholder="First Name"
            className="input-modern"
          />

          <input
            {...register("last_name", { required: true })}
            placeholder="Last Name"
            className="input-modern"
          />

          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Email"
            className="input-modern"
          />

          <input
            {...register("phone", { required: true })}
            placeholder="Phone Number"
            className="input-modern"
          />

          <input
            {...register("address")}
            placeholder="Address"
            className="input-modern md:col-span-2"
          />

          <input
            {...register("country")}
            placeholder="Country"
            className="input-modern"
          />

          <input
            {...register("amount", { required: true })}
            type="number"
            placeholder="Donate Amount"
            className="input-modern"
          />

          <textarea
            {...register("comments")}
            placeholder="Comments"
            rows={4}
            className="input-modern md:col-span-2"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="md:col-span-2 bg-[#f59e0b] hover:bg-[#d97706] transition-all duration-300 text-white py-3 rounded-lg font-semibold shadow-md"
          >
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationPopupForm;
