import React from 'react'
import Button from '../button/Button'
import Discord from '../../../public/icons/Discord.js'
import Twitter from '../../../public/icons/Twitter'
import Telegram from '../../../public/icons/Telegram'
import Image from 'next/image'

const JoinUs = () => {
  return (
    <section className="bg-[#DBF2FF]">
      <div className="py-20">
        <h2 className="text-3xl md:text-5xl mb-4 text-black text-center font-Swanky_and_Moo_Moo">
          Join our beautiful community
        </h2>
        <p className="mx-8 md:mx-72 text-sm text-center">
          Discover a supportive and creative space where you can
          <strong> share your journey and stay connected</strong>. Whether
          through our exclusive Discord channels, where you can share your
          images and experiences of the stages of grief with the chance to
          inspire new NFTs, or by following us on social media to stay updated
          on the latest news, releases, and special events and share your
          journey with us,
          <strong>
            you will be part of a community that values your experiences and
            contributions
          </strong>
        </p>
      </div>
      <div className="flex flex-col md:flex-row  justify-center items-center">
        <div className="w-full md:w-1/3 p-6 md:p-4 flex flex-col">
          <div className="card bg-white pt-6 md:pt-12 pl-6 md:pl-12 pr-6 md:pr-12 flex-1 flex flex-col min-h-full">
            <div className="flex-1 flex justify-center items-center"></div>
            <Image
              src="/images/denial.jpeg"
              alt="denial"
              width={500}
              height={500}
            />
          </div>
          <div className="bg-white py-7 text-center shadow-xl flex flex-col align-center items-center">
            <h3 className="text-3xl text-black text-center font-Swanky_and_Moo_Moo mb-5 px-4">
              Discord Community
            </h3>
            <Button
              text="Join Us"
              url="https://discord.com/"
              newTab
              iconPosition="left"
              icon={<Discord />}
            />
          </div>
        </div>
        <div className="w-full md:w-1/3 p-6 md:p-4 flex flex-col align-center">
          <div className="card bg-white pt-6 md:pt-12 pl-6 md:pl-12 pr-6 md:pr-12 flex-1 flex flex-col min-h-full">
            <br />
            <Image
              src="/images/acceptance.jpeg"
              alt="acceptance"
              width={500}
              height={500}
            />
          </div>
          <div className="bg-white py-7 text-center shadow-xl flex flex-col align-center">
            <h3 className="text-3xl text-black text-center font-Swanky_and_Moo_Moo mb-5 px-4">
              Follow Us
            </h3>
            <div className="flex justify-center gap-10">
              <Button url="https://twitter.com/" newTab icon={<Twitter />} />
              <Button url="http://telegram.org/" newTab icon={<Telegram />} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinUs
