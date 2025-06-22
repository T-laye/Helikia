import Image from "next/image";
import React from "react";
import KeyNote from "../ui/KeyNote";

export default function KeyNotes() {
  return (
    <section
      id="keyNote"
      className="min-h-screen relative pt-[35px] pb-20 sm:pt-20"
    >
      <div className="absolute top-0 bottom-0 left-0 right-0">
        <Image
          alt="bg-img"
          src="/images/key_point_bg.png"
          height={1000}
          width={1000}
          className="w-full h-full"
        />
      </div>

      <div className="myContainer">
        <h2 data-aos="flip-up">Key Points to Note</h2>

        <div className="mt-10 flex flex-col gap-8 sm:text-lg">
          <KeyNote text="   The Youth Word & Prayer Retreat is a 2Day Camping Retreat and as such we would kindly appreciate you bear it in mind and clear your schedule to avoid unnecessary movements in and out of the retreat venue." />

          <KeyNote text="Kindly come with the following items to aid your comfort at the venue:">
            <ol className="mt-3">
              <li>i. Socks</li>
              <li>ii. Duvet or Wrapper</li>
              <li>iii. Personal effects</li>
              <li>iv. Water Can</li>
              <li>v. Sweater or Cardigan</li>
              <li>vi. DECENT Trousers are allowed for females.</li>
              <li>vii. Head warmer/Hoodies</li>
            </ol>
          </KeyNote>

          <KeyNote text="Do not come with shorts or revealing clothes to be worn in the premises (male or female). We would not appreciate that." />

          <KeyNote text="For those undertaking Medications we kindly appeal that you come with your medication or health aid while we desperately trust God for your perfect Wholeness." />

          <KeyNote text="Only Liquids will be allowed. PLEASE DO NOT COME WITH ANY SOLID EDIBLES." />

          <KeyNote text="Avoid coming with object(s) that may pose a threat to the Security or wellbeing of other attendees." />

          <KeyNote text="PLEASE DO NOT COME IN THE NIGHT. ARRIVAL MUST BE DURING THE DAY." />

          <KeyNote text="PLEASE AVOID BRINGING GADGETS THAT YOU WILL NOT NEED EXCEPT THEY ARE YOUR WORK TOOLS AND IT IS EXPEDIENT YOU BRING THEM.  We shall not be liable to you in case of eventualities." />

          <KeyNote text="AFTER REGISTRATION KINDLY REACH US WITH YOUR PHOTO FOR YOUR CUSTOMIZED FLYER" />

          <KeyNote text="WE LOOK FORWARD TO SEEING YOU AND PLEASE MOST IMPORTANTLY COME EXPECTANT, COME HUNGRY FOR STATURE." />
        </div>
      </div>
    </section>
  );
}
