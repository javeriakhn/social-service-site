import RegularButton from "./Button";

function CampaignForm() {
  return (
    <section className="w-full px-3.5">
      <div className="flex flex-col items-start w-full px-12 py-5 mt-12 bg-stone-900 max-md:px-5  gap-5">
        <h2 className="text-3xl md:text-4xl text-white">
          Campaign With Us To Reach Maximum Distance
        </h2>
        <form className="w-full">
          <textarea
            className="w-full rounded-3xl bg-zinc-300 h-[250px] p-3"
            placeholder="Write Campaign Details Here"
          ></textarea>
          <div className="flex flex-col flex-wrap justify-between items-start w-full gap-2">
            <div className="flex flex-wrap gap-2 md:gap-4 items-center text-white max-md:text-4xl mt-2">
              <label
                htmlFor="fileUpload"
                className="grow my-auto text-xl md:text-2xl cursor-pointer"
              >
                Upload Attachment
              </label>
              <input type="file" id="fileUpload" className="sr-only" multiple />
              <button
                type="button"
                className="h-10 w-10 md:h-14 md:w-14 rounded-[14px] font-bold md:rounded-[20px] flex justify-center items-center bg-[#757575] text-white text-3xl"
              >
                +
              </button>
              <button
                type="button"
                className="h-10 w-10 md:h-14 md:w-14 rounded-[14px] font-bold md:rounded-[20px] flex justify-center items-center bg-[#757575] text-white text-3xl"
              >
                +
              </button>
              <button
                type="button"
                className="h-10 w-10 md:h-14 md:w-14 rounded-[14px] font-bold md:rounded-[20px] flex justify-center items-center bg-[#757575] text-white text-3xl"
              >
                +
              </button>
            </div>
            <div className="flex justify-end w-full">
              <RegularButton type="submit">Submit</RegularButton>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CampaignForm;
